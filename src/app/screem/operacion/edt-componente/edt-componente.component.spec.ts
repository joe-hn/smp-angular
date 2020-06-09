import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtComponenteComponent } from './edt-componente.component';

describe('EdtComponenteComponent', () => {
  let component: EdtComponenteComponent;
  let fixture: ComponentFixture<EdtComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
