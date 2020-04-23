import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprAComponent } from './opr-a.component';

describe('OprAComponent', () => {
  let component: OprAComponent;
  let fixture: ComponentFixture<OprAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
