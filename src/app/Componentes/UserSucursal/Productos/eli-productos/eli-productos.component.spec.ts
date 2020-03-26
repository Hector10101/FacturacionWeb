import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliProductosComponent } from './eli-productos.component';

describe('EliProductosComponent', () => {
  let component: EliProductosComponent;
  let fixture: ComponentFixture<EliProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
