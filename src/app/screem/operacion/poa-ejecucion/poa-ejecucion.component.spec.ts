import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaEjecucionComponent } from './poa-ejecucion.component';

describe('PoaEjecucionComponent', () => {
  let component: PoaEjecucionComponent;
  let fixture: ComponentFixture<PoaEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
