import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMunicipiosComponent } from './listar-municipios/listar-municipios.component';
import { ObtenerMaestroComponent } from './obtener-maestro/obtener-maestro.component';
import { InscribirEmpresaComponent } from './inscribir-empresa/inscribir-empresa.component';

const routes: Routes = [
  { path: "municipios", component: ListarMunicipiosComponent },
  { path: "maestro", component: ObtenerMaestroComponent },
  { path: "inscribir", component: InscribirEmpresaComponent },
  { path: "**", redirectTo: "/maestro" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
