import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenteAComponent } from './fuente-a.component';

describe('FuenteAComponent', () => {
  let component: FuenteAComponent;
  let fixture: ComponentFixture<FuenteAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuenteAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
