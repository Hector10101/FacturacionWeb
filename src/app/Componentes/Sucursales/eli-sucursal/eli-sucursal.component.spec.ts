import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliSucursalComponent } from './eli-sucursal.component';

describe('EliSucursalComponent', () => {
  let component: EliSucursalComponent;
  let fixture: ComponentFixture<EliSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
