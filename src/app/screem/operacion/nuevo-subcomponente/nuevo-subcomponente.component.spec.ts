import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSubcomponenteComponent } from './nuevo-subcomponente.component';

describe('NuevoSubcomponenteComponent', () => {
  let component: NuevoSubcomponenteComponent;
  let fixture: ComponentFixture<NuevoSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
