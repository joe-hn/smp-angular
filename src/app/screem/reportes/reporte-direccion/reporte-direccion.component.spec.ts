import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDireccionComponent } from './reporte-direccion.component';

describe('ReporteDireccionComponent', () => {
  let component: ReporteDireccionComponent;
  let fixture: ComponentFixture<ReporteDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
