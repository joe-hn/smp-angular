import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProgramaComponent } from './lista-programa.component';

describe('ListaProgramaComponent', () => {
  let component: ListaProgramaComponent;
  let fixture: ComponentFixture<ListaProgramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProgramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
