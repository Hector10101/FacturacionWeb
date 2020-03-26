import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiProductosComponent } from './modifi-productos.component';

describe('ModifiProductosComponent', () => {
  let component: ModifiProductosComponent;
  let fixture: ComponentFixture<ModifiProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
