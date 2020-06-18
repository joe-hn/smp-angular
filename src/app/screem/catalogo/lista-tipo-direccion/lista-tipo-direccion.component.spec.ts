import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoDireccionComponent } from './lista-tipo-direccion.component';

describe('ListaTipoDireccionComponent', () => {
  let component: ListaTipoDireccionComponent;
  let fixture: ComponentFixture<ListaTipoDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTipoDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTipoDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
