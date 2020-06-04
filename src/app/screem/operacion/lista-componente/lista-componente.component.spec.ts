import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponenteComponent } from './lista-componente.component';

describe('ListaComponenteComponent', () => {
  let component: ListaComponenteComponent;
  let fixture: ComponentFixture<ListaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
