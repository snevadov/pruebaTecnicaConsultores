import { Component, OnInit } from '@angular/core';
import { MunicipiosService } from "../municipios.service"
import { Municipio } from "../municipio"
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-municipios',
  templateUrl: './listar-municipios.component.html',
  styleUrls: ['./listar-municipios.component.css']
})
export class ListarMunicipiosComponent implements OnInit {

  constructor(private municipiosService: MunicipiosService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
