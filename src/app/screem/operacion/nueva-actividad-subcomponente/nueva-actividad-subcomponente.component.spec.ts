import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaActividadSubcomponenteComponent } from './nueva-actividad-subcomponente.component';

describe('NuevaActividadSubcomponenteComponent', () => {
  let component: NuevaActividadSubcomponenteComponent;
  let fixture: ComponentFixture<NuevaActividadSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaActividadSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaActividadSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
