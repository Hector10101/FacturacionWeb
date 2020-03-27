import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductosAlmaComponent } from './ver-productos-alma.component';

describe('VerProductosAlmaComponent', () => {
  let component: VerProductosAlmaComponent;
  let fixture: ComponentFixture<VerProductosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProductosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerProductosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
