import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeestatusComponent } from './add-employeestatus.component';

describe('AddEmployeestatusComponent', () => {
  let component: AddEmployeestatusComponent;
  let fixture: ComponentFixture<AddEmployeestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
