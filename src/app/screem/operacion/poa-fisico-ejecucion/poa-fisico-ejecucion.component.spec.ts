import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaFisicoEjecucionComponent } from './poa-fisico-ejecucion.component';

describe('PoaFisicoEjecucionComponent', () => {
  let component: PoaFisicoEjecucionComponent;
  let fixture: ComponentFixture<PoaFisicoEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaFisicoEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaFisicoEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
