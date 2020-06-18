import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoDireccionComponent } from './editar-tipo-direccion.component';

describe('EditarTipoDireccionComponent', () => {
  let component: EditarTipoDireccionComponent;
  let fixture: ComponentFixture<EditarTipoDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTipoDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
