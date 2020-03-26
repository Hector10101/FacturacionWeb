import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MofiUsuariosComponent } from './mofi-usuarios.component';

describe('MofiUsuariosComponent', () => {
  let component: MofiUsuariosComponent;
  let fixture: ComponentFixture<MofiUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MofiUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MofiUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
