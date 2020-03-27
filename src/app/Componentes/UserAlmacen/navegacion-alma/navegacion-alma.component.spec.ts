import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionAlmaComponent } from './navegacion-alma.component';

describe('NavegacionAlmaComponent', () => {
  let component: NavegacionAlmaComponent;
  let fixture: ComponentFixture<NavegacionAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
