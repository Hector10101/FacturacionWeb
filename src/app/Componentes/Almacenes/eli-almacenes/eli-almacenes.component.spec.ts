import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliAlmacenesComponent } from './eli-almacenes.component';

describe('EliAlmacenesComponent', () => {
  let component: EliAlmacenesComponent;
  let fixture: ComponentFixture<EliAlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliAlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
