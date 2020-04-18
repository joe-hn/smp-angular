import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioseguridadComponent } from './inicioseguridad.component';

describe('InicioseguridadComponent', () => {
  let component: InicioseguridadComponent;
  let fixture: ComponentFixture<InicioseguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioseguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
