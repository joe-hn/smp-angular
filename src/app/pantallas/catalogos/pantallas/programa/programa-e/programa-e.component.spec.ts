import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaEComponent } from './programa-e.component';

describe('ProgramaEComponent', () => {
  let component: ProgramaEComponent;
  let fixture: ComponentFixture<ProgramaEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
