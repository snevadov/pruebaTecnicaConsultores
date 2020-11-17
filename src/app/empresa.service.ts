import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from "./empresa"
import { environment } from "../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getEmpresa(nit: string | number) {
    return this.http.get(`${this.baseUrl}/validar_nit.php?nit=${nit}`);
  }
}
