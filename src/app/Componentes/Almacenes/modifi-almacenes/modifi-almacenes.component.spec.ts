import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiAlmacenesComponent } from './modifi-almacenes.component';

describe('ModifiAlmacenesComponent', () => {
  let component: ModifiAlmacenesComponent;
  let fixture: ComponentFixture<ModifiAlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiAlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
