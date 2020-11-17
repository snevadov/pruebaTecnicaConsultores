import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerMaestroComponent } from './obtener-maestro.component';

describe('ObtenerMaestroComponent', () => {
  let component: ObtenerMaestroComponent;
  let fixture: ComponentFixture<ObtenerMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
