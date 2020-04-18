import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pantallas/login/login.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { ErrorComponent } from './pantallas/error/error.component';
import { InicioOperacionComponent } from './pantallas/operaciones/inicio-operacion/inicio-operacion.component';
import { IniciocatalogoComponent } from './pantallas/catalogos/iniciocatalogo/iniciocatalogo.component';
import { InicioseguridadComponent } from './pantallas/seguridad/inicioseguridad/inicioseguridad.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'iniciooperacion', component: InicioOperacionComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'iniciocatalogo', component: IniciocatalogoComponent },
  { path: 'inicioseguridad', component: InicioseguridadComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
