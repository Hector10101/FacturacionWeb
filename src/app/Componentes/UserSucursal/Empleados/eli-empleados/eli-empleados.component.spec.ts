import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliEmpleadosComponent } from './eli-empleados.component';

describe('EliEmpleadosComponent', () => {
  let component: EliEmpleadosComponent;
  let fixture: ComponentFixture<EliEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
