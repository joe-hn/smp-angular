import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaAComponent } from './programa-a.component';

describe('ProgramaAComponent', () => {
  let component: ProgramaAComponent;
  let fixture: ComponentFixture<ProgramaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
