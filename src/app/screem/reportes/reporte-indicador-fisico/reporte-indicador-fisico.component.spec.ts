import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIndicadorFisicoComponent } from './reporte-indicador-fisico.component';

describe('ReporteIndicadorFisicoComponent', () => {
  let component: ReporteIndicadorFisicoComponent;
  let fixture: ComponentFixture<ReporteIndicadorFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteIndicadorFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIndicadorFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
