import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiProductosAlmaComponent } from './modifi-productos-alma.component';

describe('ModifiProductosAlmaComponent', () => {
  let component: ModifiProductosAlmaComponent;
  let fixture: ComponentFixture<ModifiProductosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiProductosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiProductosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
