import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCadastrarComponent } from './medico-cadastrar.component';

describe('MedicoCadastrarComponent', () => {
  let component: MedicoCadastrarComponent;
  let fixture: ComponentFixture<MedicoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
