import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlmacenesComponent } from './agregar-almacenes.component';

describe('AgregarAlmacenesComponent', () => {
  let component: AgregarAlmacenesComponent;
  let fixture: ComponentFixture<AgregarAlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
