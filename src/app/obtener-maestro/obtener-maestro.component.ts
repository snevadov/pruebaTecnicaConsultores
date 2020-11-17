import { Component, OnInit } from '@angular/core';
import { MaestroService } from "../maestro.service"
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Maestro } from "../maestro"

@Component({
  selector: 'app-obtener-maestro',
  templateUrl: './obtener-maestro.component.html',
  styleUrls: ['./obtener-maestro.component.css']
})
export class ObtenerMaestroComponent implements OnInit {
  public municipios = [];
  public paises = [];
  public tiposVia = [];
  public tipos_identificacion = [];

  constructor(private maestroService: MaestroService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerMaestro();
  }

  obtenerMaestro() {
    this.maestroService.getMaestro()
    .subscribe((response: any) => {
      this.municipios = response.municipios.Municipio;
      this.paises = response.paises.pais;
      this.tiposVia = response.tiposVia.tipoVia;
      this.tipos_identificacion = response.tipos_identificacion.tipo_identificacion;
      console.log(response);
    });
  }

}
