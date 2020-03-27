import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEmpleadoAlmaComponent } from './modif-empleado-alma.component';

describe('ModifEmpleadoAlmaComponent', () => {
  let component: ModifEmpleadoAlmaComponent;
  let fixture: ComponentFixture<ModifEmpleadoAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEmpleadoAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEmpleadoAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
