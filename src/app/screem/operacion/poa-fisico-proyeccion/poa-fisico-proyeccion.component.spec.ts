import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaFisicoProyeccionComponent } from './poa-fisico-proyeccion.component';

describe('PoaFisicoProyeccionComponent', () => {
  let component: PoaFisicoProyeccionComponent;
  let fixture: ComponentFixture<PoaFisicoProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaFisicoProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaFisicoProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
