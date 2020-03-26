import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionSucuComponent } from './navegacion-sucu.component';

describe('NavegacionSucuComponent', () => {
  let component: NavegacionSucuComponent;
  let fixture: ComponentFixture<NavegacionSucuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionSucuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionSucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
