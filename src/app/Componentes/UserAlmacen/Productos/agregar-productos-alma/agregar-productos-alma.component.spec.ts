import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductosAlmaComponent } from './agregar-productos-alma.component';

describe('AgregarProductosAlmaComponent', () => {
  let component: AgregarProductosAlmaComponent;
  let fixture: ComponentFixture<AgregarProductosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProductosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProductosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
