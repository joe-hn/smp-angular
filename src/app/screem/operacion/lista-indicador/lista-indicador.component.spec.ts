import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndicadorComponent } from './lista-indicador.component';

describe('ListaIndicadorComponent', () => {
  let component: ListaIndicadorComponent;
  let fixture: ComponentFixture<ListaIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
