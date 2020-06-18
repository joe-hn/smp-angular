import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProgramaComponent } from './nuevo-programa.component';

describe('NuevoProgramaComponent', () => {
  let component: NuevoProgramaComponent;
  let fixture: ComponentFixture<NuevoProgramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoProgramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
