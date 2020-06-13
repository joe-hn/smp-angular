import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtActividadComponent } from './edt-actividad.component';

describe('EdtActividadComponent', () => {
  let component: EdtActividadComponent;
  let fixture: ComponentFixture<EdtActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
