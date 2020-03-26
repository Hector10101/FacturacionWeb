import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliUsuariosComponent } from './eli-usuarios.component';

describe('EliUsuariosComponent', () => {
  let component: EliUsuariosComponent;
  let fixture: ComponentFixture<EliUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
