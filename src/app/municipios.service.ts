import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Municipio } from "./municipio"
import { environment } from "../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }
}
