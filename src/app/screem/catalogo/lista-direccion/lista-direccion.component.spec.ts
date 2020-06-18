import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDireccionComponent } from './lista-direccion.component';

describe('ListaDireccionComponent', () => {
  let component: ListaDireccionComponent;
  let fixture: ComponentFixture<ListaDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
