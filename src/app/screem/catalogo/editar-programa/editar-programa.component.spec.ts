import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProgramaComponent } from './editar-programa.component';

describe('EditarProgramaComponent', () => {
  let component: EditarProgramaComponent;
  let fixture: ComponentFixture<EditarProgramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarProgramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
