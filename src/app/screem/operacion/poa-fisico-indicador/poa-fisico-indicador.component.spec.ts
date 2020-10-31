import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaFisicoIndicadorComponent } from './poa-fisico-indicador.component';

describe('PoaFisicoIndicadorComponent', () => {
  let component: PoaFisicoIndicadorComponent;
  let fixture: ComponentFixture<PoaFisicoIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaFisicoIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaFisicoIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
