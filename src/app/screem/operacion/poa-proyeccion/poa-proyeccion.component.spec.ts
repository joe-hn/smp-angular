import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaProyeccionComponent } from './poa-proyeccion.component';

describe('PoaProyeccionComponent', () => {
  let component: PoaProyeccionComponent;
  let fixture: ComponentFixture<PoaProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
