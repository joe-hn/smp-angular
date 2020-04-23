import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteEComponent } from './fuente-e.component';

describe('FuenteEComponent', () => {
  let component: FuenteEComponent;
  let fixture: ComponentFixture<FuenteEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuenteEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenteEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
