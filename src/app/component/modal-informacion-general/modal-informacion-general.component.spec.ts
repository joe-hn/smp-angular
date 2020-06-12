import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformacionGeneralComponent } from './modal-informacion-general.component';

describe('ModalInformacionGeneralComponent', () => {
  let component: ModalInformacionGeneralComponent;
  let fixture: ComponentFixture<ModalInformacionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInformacionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformacionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
