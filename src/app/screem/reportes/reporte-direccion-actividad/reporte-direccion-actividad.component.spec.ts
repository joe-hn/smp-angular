import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDireccionActividadComponent } from './reporte-direccion-actividad.component';

describe('ReporteDireccionActividadComponent', () => {
  let component: ReporteDireccionActividadComponent;
  let fixture: ComponentFixture<ReporteDireccionActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDireccionActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDireccionActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
