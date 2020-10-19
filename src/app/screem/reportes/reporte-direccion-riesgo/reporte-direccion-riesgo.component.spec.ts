import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDireccionRiesgoComponent } from './reporte-direccion-riesgo.component';

describe('ReporteDireccionRiesgoComponent', () => {
  let component: ReporteDireccionRiesgoComponent;
  let fixture: ComponentFixture<ReporteDireccionRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDireccionRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDireccionRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
