import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFuenteComponent } from './nueva-fuente.component';

describe('NuevaFuenteComponent', () => {
  let component: NuevaFuenteComponent;
  let fixture: ComponentFixture<NuevaFuenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaFuenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaFuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
