import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConsultaPacienteComponent } from './ver-consulta-paciente.component';

describe('VerConsultaPacienteComponent', () => {
  let component: VerConsultaPacienteComponent;
  let fixture: ComponentFixture<VerConsultaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerConsultaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerConsultaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
