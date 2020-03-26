import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiEmpleadosComponent } from './modifi-empleados.component';

describe('ModifiEmpleadosComponent', () => {
  let component: ModifiEmpleadosComponent;
  let fixture: ComponentFixture<ModifiEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
