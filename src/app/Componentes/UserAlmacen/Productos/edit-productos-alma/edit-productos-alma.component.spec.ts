import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductosAlmaComponent } from './edit-productos-alma.component';

describe('EditProductosAlmaComponent', () => {
  let component: EditProductosAlmaComponent;
  let fixture: ComponentFixture<EditProductosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
