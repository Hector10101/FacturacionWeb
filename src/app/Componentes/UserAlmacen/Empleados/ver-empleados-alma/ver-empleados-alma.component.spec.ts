import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmpleadosAlmaComponent } from './ver-empleados-alma.component';

describe('VerEmpleadosAlmaComponent', () => {
  let component: VerEmpleadosAlmaComponent;
  let fixture: ComponentFixture<VerEmpleadosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmpleadosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEmpleadosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
