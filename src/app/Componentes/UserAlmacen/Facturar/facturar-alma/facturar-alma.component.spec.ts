import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturarAlmaComponent } from './facturar-alma.component';

describe('FacturarAlmaComponent', () => {
  let component: FacturarAlmaComponent;
  let fixture: ComponentFixture<FacturarAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturarAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturarAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
