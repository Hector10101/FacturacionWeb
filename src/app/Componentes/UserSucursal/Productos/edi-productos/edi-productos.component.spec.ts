import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiProductosComponent } from './edi-productos.component';

describe('EdiProductosComponent', () => {
  let component: EdiProductosComponent;
  let fixture: ComponentFixture<EdiProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
