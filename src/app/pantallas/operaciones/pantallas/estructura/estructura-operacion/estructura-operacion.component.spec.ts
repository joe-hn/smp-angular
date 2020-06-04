import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraOperacionComponent } from './estructura-operacion.component';

describe('EstructuraOperacionComponent', () => {
  let component: EstructuraOperacionComponent;
  let fixture: ComponentFixture<EstructuraOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructuraOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
