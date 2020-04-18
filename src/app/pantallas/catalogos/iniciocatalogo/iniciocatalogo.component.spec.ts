import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocatalogoComponent } from './iniciocatalogo.component';

describe('IniciocatalogoComponent', () => {
  let component: IniciocatalogoComponent;
  let fixture: ComponentFixture<IniciocatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciocatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciocatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
