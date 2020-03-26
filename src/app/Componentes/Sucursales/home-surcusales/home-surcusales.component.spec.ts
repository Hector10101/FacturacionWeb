import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSurcusalesComponent } from './home-surcusales.component';

describe('HomeSurcusalesComponent', () => {
  let component: HomeSurcusalesComponent;
  let fixture: ComponentFixture<HomeSurcusalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSurcusalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSurcusalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
