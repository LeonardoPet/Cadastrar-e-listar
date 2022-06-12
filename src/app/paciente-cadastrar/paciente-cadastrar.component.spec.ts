import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCadastrarComponent } from './paciente-cadastrar.component';

describe('PacienteCadastrarComponent', () => {
  let component: PacienteCadastrarComponent;
  let fixture: ComponentFixture<PacienteCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
