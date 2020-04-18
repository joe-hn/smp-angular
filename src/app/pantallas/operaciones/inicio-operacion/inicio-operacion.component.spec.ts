import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioOperacionComponent } from './inicio-operacion.component';

describe('InicioOperacionComponent', () => {
  let component: InicioOperacionComponent;
  let fixture: ComponentFixture<InicioOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
