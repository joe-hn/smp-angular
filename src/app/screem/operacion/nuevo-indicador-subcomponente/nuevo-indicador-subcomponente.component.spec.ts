import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIndicadorSubcomponenteComponent } from './nuevo-indicador-subcomponente.component';

describe('NuevoIndicadorSubcomponenteComponent', () => {
  let component: NuevoIndicadorSubcomponenteComponent;
  let fixture: ComponentFixture<NuevoIndicadorSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoIndicadorSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoIndicadorSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
