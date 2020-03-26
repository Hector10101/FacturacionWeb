import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSucursaliesComponent } from './ver-sucursalies.component';

describe('VerSucursaliesComponent', () => {
  let component: VerSucursaliesComponent;
  let fixture: ComponentFixture<VerSucursaliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSucursaliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSucursaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
