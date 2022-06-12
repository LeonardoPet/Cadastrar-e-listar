import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarComponent } from './editar-consultar.component';

describe('EditarConsultarComponent', () => {
  let component: EditarConsultarComponent;
  let fixture: ComponentFixture<EditarConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
