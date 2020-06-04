import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaOperacionComponent } from './nueva-operacion.component';

describe('NuevaOperacionComponent', () => {
  let component: NuevaOperacionComponent;
  let fixture: ComponentFixture<NuevaOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
