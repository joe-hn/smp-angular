import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOperacionComponent } from './lista-operacion.component';

describe('ListaOperacionComponent', () => {
  let component: ListaOperacionComponent;
  let fixture: ComponentFixture<ListaOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
