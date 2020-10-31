import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformacionIndicadorGeneralComponent } from './modal-informacion-indicador-general.component';

describe('ModalInformacionIndicadorGeneralComponent', () => {
  let component: ModalInformacionIndicadorGeneralComponent;
  let fixture: ComponentFixture<ModalInformacionIndicadorGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInformacionIndicadorGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformacionIndicadorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
