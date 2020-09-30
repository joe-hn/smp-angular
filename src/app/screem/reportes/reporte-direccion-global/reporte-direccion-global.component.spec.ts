import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDireccionGlobalComponent } from './reporte-direccion-global.component';

describe('ReporteDireccionGlobalComponent', () => {
  let component: ReporteDireccionGlobalComponent;
  let fixture: ComponentFixture<ReporteDireccionGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDireccionGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDireccionGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
