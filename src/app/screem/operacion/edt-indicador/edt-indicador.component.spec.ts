import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtIndicadorComponent } from './edt-indicador.component';

describe('EdtIndicadorComponent', () => {
  let component: EdtIndicadorComponent;
  let fixture: ComponentFixture<EdtIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
