import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtSubcomponenteComponent } from './edt-subcomponente.component';

describe('EdtSubcomponenteComponent', () => {
  let component: EdtSubcomponenteComponent;
  let fixture: ComponentFixture<EdtSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
