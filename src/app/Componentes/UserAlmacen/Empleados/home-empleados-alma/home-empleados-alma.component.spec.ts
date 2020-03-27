import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmpleadosAlmaComponent } from './home-empleados-alma.component';

describe('HomeEmpleadosAlmaComponent', () => {
  let component: HomeEmpleadosAlmaComponent;
  let fixture: ComponentFixture<HomeEmpleadosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmpleadosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmpleadosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
