import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoObjetoGastoComponent } from './nuevo-objeto-gasto.component';

describe('NuevoObjetoGastoComponent', () => {
  let component: NuevoObjetoGastoComponent;
  let fixture: ComponentFixture<NuevoObjetoGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoObjetoGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoObjetoGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
