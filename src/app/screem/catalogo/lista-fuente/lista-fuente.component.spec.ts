import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuenteComponent } from './lista-fuente.component';

describe('ListaFuenteComponent', () => {
  let component: ListaFuenteComponent;
  let fixture: ComponentFixture<ListaFuenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFuenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
