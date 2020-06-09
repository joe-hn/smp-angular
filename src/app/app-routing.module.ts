import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pantallas/login/login.component';
import { ErrorComponent } from './pantallas/error/error.component';
import { ListaOperacionComponent } from './screem/operacion/lista-operacion/lista-operacion.component';
import { NuevaOperacionComponent } from './screem/operacion/nueva-operacion/nueva-operacion.component';
import { ListaComponenteComponent } from './screem/operacion/lista-componente/lista-componente.component';
import { NuevoComponenteComponent } from './screem/operacion/nuevo-componente/nuevo-componente.component';
import { ListaIndicadorComponent } from './screem/operacion/lista-indicador/lista-indicador.component';
import { NuevoIndicadorComponent } from './screem/operacion/nuevo-indicador/nuevo-indicador.component';
import { ListaProductoComponent } from './screem/operacion/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './screem/operacion/nuevo-producto/nuevo-producto.component';
import { EditarComponenteComponent } from './screem/operacion/editar-componente/editar-componente.component';
import { EditarIndicadorComponent } from './screem/operacion/editar-indicador/editar-indicador.component';
import { ListaSubcomponenteComponent } from './screem/operacion/lista-subcomponente/lista-subcomponente.component';
import { NuevoSubcomponenteComponent } from './screem/operacion/nuevo-subcomponente/nuevo-subcomponente.component';
import { EditarSubcomponenteComponent } from './screem/operacion/editar-subcomponente/editar-subcomponente.component';
import { EdtComponenteComponent } from './screem/operacion/edt-componente/edt-componente.component';
import { EdtSubcomponenteComponent } from './screem/operacion/edt-subcomponente/edt-subcomponente.component';
import { NuevoIndicadorSubcomponenteComponent } from './screem/operacion/nuevo-indicador-subcomponente/nuevo-indicador-subcomponente.component';
import { NuevoProductoSubcomponenteComponent } from './screem/operacion/nuevo-producto-subcomponente/nuevo-producto-subcomponente.component';
import { EditarProductoComponent } from './screem/operacion/editar-producto/editar-producto.component';
import { EdtIndicadorComponent } from './screem/operacion/edt-indicador/edt-indicador.component';
import { EdtProductoComponent } from './screem/operacion/edt-producto/edt-producto.component';

/*
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { InicioOperacionComponent } from './pantallas/operaciones/inicio-operacion/inicio-operacion.component';
import { IniciocatalogoComponent } from './pantallas/catalogos/iniciocatalogo/iniciocatalogo.component';
import { InicioseguridadComponent } from './pantallas/seguridad/inicioseguridad/inicioseguridad.component';
import { OprAComponent } from './pantallas/operaciones/pantallas/opr-a/opr-a.component';
import { ProgramaAComponent } from './pantallas/catalogos/pantallas/programa/programa-a/programa-a.component';
import { ProgramaEComponent } from './pantallas/catalogos/pantallas/programa/programa-e/programa-e.component';
import { FuenteAComponent } from './pantallas/catalogos/pantallas/fuente/fuente-a/fuente-a.component';
import { FuenteEComponent } from './pantallas/catalogos/pantallas/fuente/fuente-e/fuente-e.component';
import { EstructuraOperacionComponent } from './pantallas/operaciones/pantallas/estructura/estructura-operacion/estructura-operacion.component';
import { ComponenteComponent } from './pantallas/operaciones/pantallas/componente/componente.component';
import { IndicadorComponent } from './pantallas/operaciones/pantallas/indicador/indicador.component';
import { ProductoComponent } from './pantallas/operaciones/pantallas/producto/producto.component';
*/

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },

  { path: 'lista-operaciones', component: ListaOperacionComponent },
  { path: 'nueva-operacion', component: NuevaOperacionComponent },
  { path: 'lista-componente/:id', component: ListaComponenteComponent },
  { path: 'nuevo-componente/:id', component: NuevoComponenteComponent },
  { path: 'editar-componente/:id/:operacion', component: EditarComponenteComponent },
  { path: 'lista-indicador/:id', component: ListaIndicadorComponent },
  { path: 'nuevo-indicador/:id', component: NuevoIndicadorComponent },
  { path: 'nuevo-indicador-subcomponente/:id', component: NuevoIndicadorSubcomponenteComponent },
  { path: 'editar-indicador/:id/:operacion', component: EditarIndicadorComponent },
  { path: 'lista-producto/:id', component: ListaProductoComponent },
  { path: 'nuevo-producto/:id', component: NuevoProductoComponent },
  { path: 'nuevo-producto-subcomponente/:id', component: NuevoProductoSubcomponenteComponent },
  { path: 'editar-producto/:id/:operacion', component: EditarProductoComponent },
  { path: 'lista-subcomponente/:id', component: ListaSubcomponenteComponent },
  { path: 'nuevo-subcomponente/:id', component: NuevoSubcomponenteComponent },
  { path: 'editar-subcomponente/:id/:operacion', component: EditarSubcomponenteComponent },

  { path: 'edt-componente/:id', component: EdtComponenteComponent },
  { path: 'edt-subcomponente/:id', component: EdtSubcomponenteComponent },
  { path: 'edt-indicador/:id', component: EdtIndicadorComponent },
  { path: 'edt-producto/:id', component: EdtProductoComponent }

  /*
    { path: 'iniciooperacion', component: InicioOperacionComponent },  
    { path: 'iniciocatalogo', component: IniciocatalogoComponent },
    { path: 'inicioseguridad', component: InicioseguridadComponent },
    { path: 'opr-a', component: OprAComponent },
    { path: 'programa-a', component: ProgramaAComponent },
    { path: 'programa-e/:id', component: ProgramaEComponent },
    { path: 'fuente-a', component: FuenteAComponent },
    { path: 'fuente-e/:id', component: FuenteEComponent },
    { path: 'operacion-estructura/:id', component: EstructuraOperacionComponent },
    { path: 'componente/:id', component: ComponenteComponent },
    { path: 'indicador', component: IndicadorComponent },
    { path: 'producto', component: ProductoComponent }
  */

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
