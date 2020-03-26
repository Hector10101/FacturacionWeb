import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlmacenesComponent } from './home-almacenes.component';

describe('HomeAlmacenesComponent', () => {
  let component: HomeAlmacenesComponent;
  let fixture: ComponentFixture<HomeAlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
