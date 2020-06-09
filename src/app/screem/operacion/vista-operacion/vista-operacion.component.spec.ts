import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOperacionComponent } from './vista-operacion.component';

describe('VistaOperacionComponent', () => {
  let component: VistaOperacionComponent;
  let fixture: ComponentFixture<VistaOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
