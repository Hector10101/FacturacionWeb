import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmpleadosAlmaComponent } from './agregar-empleados-alma.component';

describe('AgregarEmpleadosAlmaComponent', () => {
  let component: AgregarEmpleadosAlmaComponent;
  let fixture: ComponentFixture<AgregarEmpleadosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEmpleadosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEmpleadosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
