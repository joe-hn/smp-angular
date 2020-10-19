import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteObjetoGastoComponent } from './reporte-objeto-gasto.component';

describe('ReporteObjetoGastoComponent', () => {
  let component: ReporteObjetoGastoComponent;
  let fixture: ComponentFixture<ReporteObjetoGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteObjetoGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteObjetoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
