import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiSucursalesComponent } from './modifi-sucursales.component';

describe('ModifiSucursalesComponent', () => {
  let component: ModifiSucursalesComponent;
  let fixture: ComponentFixture<ModifiSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
