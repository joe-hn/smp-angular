import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtProductoComponent } from './edt-producto.component';

describe('EdtProductoComponent', () => {
  let component: EdtProductoComponent;
  let fixture: ComponentFixture<EdtProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
