import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliEmpleadosAlmaComponent } from './eli-empleados-alma.component';

describe('EliEmpleadosAlmaComponent', () => {
  let component: EliEmpleadosAlmaComponent;
  let fixture: ComponentFixture<EliEmpleadosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliEmpleadosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliEmpleadosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
