import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliProductosAlmaComponent } from './eli-productos-alma.component';

describe('EliProductosAlmaComponent', () => {
  let component: EliProductosAlmaComponent;
  let fixture: ComponentFixture<EliProductosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliProductosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliProductosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
