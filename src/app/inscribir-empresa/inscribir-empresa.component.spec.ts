import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirEmpresaComponent } from './inscribir-empresa.component';

describe('InscribirEmpresaComponent', () => {
  let component: InscribirEmpresaComponent;
  let fixture: ComponentFixture<InscribirEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
