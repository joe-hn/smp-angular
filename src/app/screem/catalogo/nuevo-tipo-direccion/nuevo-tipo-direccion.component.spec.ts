import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoDireccionComponent } from './nuevo-tipo-direccion.component';

describe('NuevoTipoDireccionComponent', () => {
  let component: NuevoTipoDireccionComponent;
  let fixture: ComponentFixture<NuevoTipoDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTipoDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
