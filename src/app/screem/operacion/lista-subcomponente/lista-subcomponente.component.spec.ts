import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSubcomponenteComponent } from './lista-subcomponente.component';

describe('ListaSubcomponenteComponent', () => {
  let component: ListaSubcomponenteComponent;
  let fixture: ComponentFixture<ListaSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
