import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanDetailsComponent } from './human-details.component';

describe('HumanDetailsComponent', () => {
  let component: HumanDetailsComponent;
  let fixture: ComponentFixture<HumanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
