import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProductoSubcomponenteComponent } from './nuevo-producto-subcomponente.component';

describe('NuevoProductoSubcomponenteComponent', () => {
  let component: NuevoProductoSubcomponenteComponent;
  let fixture: ComponentFixture<NuevoProductoSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoProductoSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoProductoSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
