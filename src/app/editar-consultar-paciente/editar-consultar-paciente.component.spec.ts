import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarPacienteComponent } from './editar-consultar-paciente.component';

describe('EditarConsultarPacienteComponent', () => {
  let component: EditarConsultarPacienteComponent;
  let fixture: ComponentFixture<EditarConsultarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConsultarPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsultarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
