import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getMaestro(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/maestro.php`);
  }
}
