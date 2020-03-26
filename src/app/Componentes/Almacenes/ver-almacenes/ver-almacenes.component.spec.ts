import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlmacenesComponent } from './ver-almacenes.component';

describe('VerAlmacenesComponent', () => {
  let component: VerAlmacenesComponent;
  let fixture: ComponentFixture<VerAlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
