import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductosAlmaComponent } from './home-productos-alma.component';

describe('HomeProductosAlmaComponent', () => {
  let component: HomeProductosAlmaComponent;
  let fixture: ComponentFixture<HomeProductosAlmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductosAlmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductosAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
