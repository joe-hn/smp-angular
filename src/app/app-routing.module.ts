import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pantallas/login/login.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { ErrorComponent } from './pantallas/error/error.component';
import { InicioOperacionComponent } from './pantallas/operaciones/inicio-operacion/inicio-operacion.component';
import { IniciocatalogoComponent } from './pantallas/catalogos/iniciocatalogo/iniciocatalogo.component';
import { InicioseguridadComponent } from './pantallas/seguridad/inicioseguridad/inicioseguridad.component';
import { OprAComponent } from './pantallas/operaciones/pantallas/opr-a/opr-a.component';
import { ProgramaAComponent } from './pantallas/catalogos/pantallas/programa/programa-a/programa-a.component';
import { ProgramaEComponent } from './pantallas/catalogos/pantallas/programa/programa-e/programa-e.component';
import { FuenteAComponent } from './pantallas/catalogos/pantallas/fuente/fuente-a/fuente-a.component';
import { FuenteEComponent } from './pantallas/catalogos/pantallas/fuente/fuente-e/fuente-e.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'iniciooperacion', component: InicioOperacionComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'iniciocatalogo', component: IniciocatalogoComponent },
  { path: 'inicioseguridad', component: InicioseguridadComponent },
  { path: 'opr-a', component: OprAComponent },
  { path: 'programa-a', component: ProgramaAComponent },
  { path: 'programa-e/:id', component: ProgramaEComponent },
  { path: 'fuente-a', component: FuenteAComponent },
  { path: 'fuente-e/:id', component: FuenteEComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
