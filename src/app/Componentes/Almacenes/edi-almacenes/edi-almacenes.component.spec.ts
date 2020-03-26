import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiAlmacenesComponent } from './edi-almacenes.component';

describe('EdiAlmacenesComponent', () => {
  let component: EdiAlmacenesComponent;
  let fixture: ComponentFixture<EdiAlmacenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiAlmacenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
