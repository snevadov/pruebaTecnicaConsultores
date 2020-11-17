import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMunicipiosComponent } from './listar-municipios.component';

describe('ListarMunicipiosComponent', () => {
  let component: ListarMunicipiosComponent;
  let fixture: ComponentFixture<ListarMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMunicipiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
