import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiEmpleadosAlmaComponent } from './edi-empleados-alma.component';

describe('EdiEmpleadosAlmaComponent', () => {
  let component: EdiEmpleadosAlmaComponent;
  let fixture: ComponentFixture<EdiEmpleadosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiEmpleadosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiEmpleadosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
