import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Human } from "./human";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { catchError, map, tap } from 'rxjs/operators';

/** The @Injectable() decorator accepts a metadata object for the service,
 the same way the @Component() decorator did for your component classes*/
@Injectable({
  providedIn: 'root'
})
export class HumanService {
  /** Log a HumanService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HumanService: ${message}`);
  }
  private humansUrl = 'api/humans';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

/**This is a typical "service-in-service" scenario: you inject the MessageService
 into the HumanService which is injected into the HumansComponent.*/
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

/**
  The current HumanService.getHumans() uses the RxJS of() function
  to return an array of mock humans as an Observable<Human[]>.

  getHumans(): Observable<Human[]>{
    this.messageService.add('HumanService fetched humans');
  return of(HUMANS);
  }
*/

  /** GET humans from the server
  getHumans(): Observable<Human[]> {
    return this.http.get<Human[]>(this.humansUrl)
  }*/
  /** GET humans from the server */
  getHumans(): Observable<Human[]> {
    return this.http.get<Human[]>(this.humansUrl)
      .pipe(
        tap(_ => this.log('fetched humans')),
        catchError(this.handleError<Human[]>('getHumans', []))
      );
  }
  /** GET human by id. Return `undefined` when id not found */
  getHumanNo404<Data>(id: number): Observable<Human> {
    const url = `${this.humansUrl}/?id=${id}`;
    return this.http.get<Human[]>(url)
      .pipe(
        map(humans => humans[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} human id=${id}`);
        }),
        catchError(this.handleError<Human>(`getHuman id=${id}`))
      );
  }
  /** GET human by id. Will 404 if id not found */
  getHuman(id: number): Observable<Human> {
    const url = `${this.humansUrl}/${id}`;
     return this.http.get<Human>(url).pipe(
       tap(_ => this.log(`fetched human id=${id}`)),
       catchError(this.handleError<Human>(`getHuman id=${id}`))
     );
  }
  /* GET humans whose name contains search term */
  searchHumans(term: string): Observable<Human[]> {
    if (!term.trim()) {
      // if not search term, return empty human array.
      return of([]);
    }
    return this.http.get<Human[]>(`${this.humansUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found humans matching "${term}"`) :
        this.log(`no humans matching "${term}"`)),
      catchError(this.handleError<Human[]>('searchHumans', []))
    );
  }
  updateHuman(human: Human): Observable<any> {
    return this.http.put(this.humansUrl, human, this.httpOptions).pipe(
      tap(_ => this.log(`updated human id=${human.id}`)),
        catchError(this.handleError<any>('updateHuman'))
      );
  }
  /** POST: add a new human to the server */
  addHuman(human: Human): Observable<Human> {
    return this.http.post<Human>(this.humansUrl, human, this.httpOptions).pipe(
      tap((newHuman: Human) => this.log(`added human w/ id=${newHuman.id}`)),
      catchError(this.handleError<Human>('addHuman'))
    );
  }
  deleteHuman(human: Human | number): Observable<Human> {
    const id = typeof human === 'number' ? human : human.id;
    const url = `${this.humansUrl}/${id}`;

    return this.http.delete<Human>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted human id=${id}`)),
      catchError(this.handleError<Human>('deleteHuman'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }




}

