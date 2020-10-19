import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarObjetoGastoComponent } from './editar-objeto-gasto.component';

describe('EditarObjetoGastoComponent', () => {
  let component: EditarObjetoGastoComponent;
  let fixture: ComponentFixture<EditarObjetoGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarObjetoGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarObjetoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
