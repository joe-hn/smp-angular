import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDireccionComparativoEjecucionComponent } from './reporte-direccion-comparativo-ejecucion.component';

describe('ReporteDireccionComparativoEjecucionComponent', () => {
  let component: ReporteDireccionComparativoEjecucionComponent;
  let fixture: ComponentFixture<ReporteDireccionComparativoEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDireccionComparativoEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDireccionComparativoEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
