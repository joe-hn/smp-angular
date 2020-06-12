import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPoaComponent } from './nuevo-poa.component';

describe('NuevoPoaComponent', () => {
  let component: NuevoPoaComponent;
  let fixture: ComponentFixture<NuevoPoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
