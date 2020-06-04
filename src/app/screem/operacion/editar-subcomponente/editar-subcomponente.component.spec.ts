import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSubcomponenteComponent } from './editar-subcomponente.component';

describe('EditarSubcomponenteComponent', () => {
  let component: EditarSubcomponenteComponent;
  let fixture: ComponentFixture<EditarSubcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSubcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSubcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
