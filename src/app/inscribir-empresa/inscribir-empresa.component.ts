import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from "../empresa.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscribir-empresa',
  templateUrl: './inscribir-empresa.component.html',
  styleUrls: ['./inscribir-empresa.component.css']
})
export class InscribirEmpresaComponent implements OnInit {

  public nit: number | string = '';
  public empresa = new Empresa();

  constructor(private empresaService: EmpresaService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.empresaService.getEmpresa(this.nit).subscribe((response: any) => {
      console.log(response);

      if(response.mensaje.length > 0){
        this.snackBar.open(response.mensaje, undefined, {
          duration: 4000,
        });
      } else {
        this.snackBar.open('Lectura correcta', undefined, {
          duration: 4000,
        });
        this.empresa.TipoIdentificacion = response.TipoIdentificacion;
        this.empresa.Identificacion = response.Identificacion;
        this.empresa.DireccionEmpresa = response.DireccionEmpresa;
        this.empresa.Pais = response.Pais;
        this.empresa.Departamento = response.Departamento;
        this.empresa.Municipio = response.Municipio;
        this.empresa.NombreEmpresa = response.NombreEmpresa;
        this.empresa.PrimerNombre = response.PrimerNombre;
        this.empresa.SegundoNombre = response.SegundoNombre;
        this.empresa.PrimerApellido = response.PrimerApellido;
        this.empresa.SegundoApellido = response.SegundoApellido;
        this.empresa.TipoVia = response.TipoVia;
        this.empresa.NumeroVia = response.NumeroVia;
        this.empresa.NumeroCruce = response.NumeroCruce;
        this.empresa.Ubicacion = response.Ubicacion;
        this.empresa.Telefono = response.Telefono;
        this.empresa.AutorizaEnvioEmail = response.AutorizaEnvioEmail;
        this.empresa.AutorizaEnvioSMS = response.AutorizaEnvioSMS;
        this.empresa.EmailNotificacionEmpresa = response.EmailNotificacionEmpresa;
      }

      //this.router.navigate(['/municipios']);
    })
  }

  onUpdate() {
    this.snackBar.open('Realizaría actualización', undefined, {
      duration: 4000,
    });
  }

}
