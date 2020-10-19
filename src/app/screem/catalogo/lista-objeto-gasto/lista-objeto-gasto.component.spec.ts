import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObjetoGastoComponent } from './lista-objeto-gasto.component';

describe('ListaObjetoGastoComponent', () => {
  let component: ListaObjetoGastoComponent;
  let fixture: ComponentFixture<ListaObjetoGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaObjetoGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObjetoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
