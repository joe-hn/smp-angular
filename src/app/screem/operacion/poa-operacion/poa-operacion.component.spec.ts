import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaOperacionComponent } from './poa-operacion.component';

describe('PoaOperacionComponent', () => {
  let component: PoaOperacionComponent;
  let fixture: ComponentFixture<PoaOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoaOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
