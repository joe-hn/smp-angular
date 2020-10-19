import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./pantallas/login/login.component";
import { ErrorComponent } from "./pantallas/error/error.component";
import { ListaOperacionComponent } from "./screem/operacion/lista-operacion/lista-operacion.component";
import { NuevaOperacionComponent } from "./screem/operacion/nueva-operacion/nueva-operacion.component";
import { ListaComponenteComponent } from "./screem/operacion/lista-componente/lista-componente.component";
import { NuevoComponenteComponent } from "./screem/operacion/nuevo-componente/nuevo-componente.component";
import { ListaIndicadorComponent } from "./screem/operacion/lista-indicador/lista-indicador.component";
import { NuevoIndicadorComponent } from "./screem/operacion/nuevo-indicador/nuevo-indicador.component";
import { ListaProductoComponent } from "./screem/operacion/lista-producto/lista-producto.component";
import { NuevoProductoComponent } from "./screem/operacion/nuevo-producto/nuevo-producto.component";
import { EditarComponenteComponent } from "./screem/operacion/editar-componente/editar-componente.component";
import { EditarIndicadorComponent } from "./screem/operacion/editar-indicador/editar-indicador.component";
import { ListaSubcomponenteComponent } from "./screem/operacion/lista-subcomponente/lista-subcomponente.component";
import { NuevoSubcomponenteComponent } from "./screem/operacion/nuevo-subcomponente/nuevo-subcomponente.component";
import { EditarSubcomponenteComponent } from "./screem/operacion/editar-subcomponente/editar-subcomponente.component";
import { EdtComponenteComponent } from "./screem/operacion/edt-componente/edt-componente.component";
import { EdtSubcomponenteComponent } from "./screem/operacion/edt-subcomponente/edt-subcomponente.component";
import { NuevoIndicadorSubcomponenteComponent } from "./screem/operacion/nuevo-indicador-subcomponente/nuevo-indicador-subcomponente.component";
import { NuevoProductoSubcomponenteComponent } from "./screem/operacion/nuevo-producto-subcomponente/nuevo-producto-subcomponente.component";
import { EditarProductoComponent } from "./screem/operacion/editar-producto/editar-producto.component";
import { EdtIndicadorComponent } from "./screem/operacion/edt-indicador/edt-indicador.component";
import { EdtProductoComponent } from "./screem/operacion/edt-producto/edt-producto.component";
import { VistaOperacionComponent } from "./screem/operacion/vista-operacion/vista-operacion.component";
import { PoaOperacionComponent } from "./screem/operacion/poa-operacion/poa-operacion.component";
import { NuevoPoaComponent } from "./screem/operacion/nuevo-poa/nuevo-poa.component";
import { PoaProyeccionComponent } from "./screem/operacion/poa-proyeccion/poa-proyeccion.component";
import { PoaEjecucionComponent } from "./screem/operacion/poa-ejecucion/poa-ejecucion.component";
import { NuevaActividadComponent } from "./screem/operacion/nueva-actividad/nueva-actividad.component";
import { NuevaActividadSubcomponenteComponent } from "./screem/operacion/nueva-actividad-subcomponente/nueva-actividad-subcomponente.component";
import { EdtActividadComponent } from "./screem/operacion/edt-actividad/edt-actividad.component";
import { ListaActividadComponent } from "./screem/operacion/lista-actividad/lista-actividad.component";
import { EditarActividadComponent } from "./screem/operacion/editar-actividad/editar-actividad.component";
import { ListaCargoComponent } from "./screem/catalogo/lista-cargo/lista-cargo.component";
import { ListaDireccionComponent } from "./screem/catalogo/lista-direccion/lista-direccion.component";
import { ListaEmpleadoComponent } from "./screem/catalogo/lista-empleado/lista-empleado.component";
import { ListaFuenteComponent } from "./screem/catalogo/lista-fuente/lista-fuente.component";
import { ListaProgramaComponent } from "./screem/catalogo/lista-programa/lista-programa.component";
import { ListaTipoDireccionComponent } from "./screem/catalogo/lista-tipo-direccion/lista-tipo-direccion.component";
import { NuevoCargoComponent } from "./screem/catalogo/nuevo-cargo/nuevo-cargo.component";
import { NuevaDireccionComponent } from "./screem/catalogo/nueva-direccion/nueva-direccion.component";
import { NuevoEmpleadoComponent } from "./screem/catalogo/nuevo-empleado/nuevo-empleado.component";
import { NuevaFuenteComponent } from "./screem/catalogo/nueva-fuente/nueva-fuente.component";
import { NuevoProgramaComponent } from "./screem/catalogo/nuevo-programa/nuevo-programa.component";
import { NuevoTipoDireccionComponent } from "./screem/catalogo/nuevo-tipo-direccion/nuevo-tipo-direccion.component";
import { EditarCargoComponent } from "./screem/catalogo/editar-cargo/editar-cargo.component";
import { EditarDireccionComponent } from "./screem/catalogo/editar-direccion/editar-direccion.component";
import { EditarEmpleadoComponent } from "./screem/catalogo/editar-empleado/editar-empleado.component";
import { EditarFuenteComponent } from "./screem/catalogo/editar-fuente/editar-fuente.component";
import { EditarProgramaComponent } from "./screem/catalogo/editar-programa/editar-programa.component";
import { EditarTipoDireccionComponent } from "./screem/catalogo/editar-tipo-direccion/editar-tipo-direccion.component";
import { ListaRolComponent } from "./screem/seguridad/lista-rol/lista-rol.component";
import { ListaUsuarioComponent } from "./screem/seguridad/lista-usuario/lista-usuario.component";
import { NuevoRolComponent } from "./screem/seguridad/nuevo-rol/nuevo-rol.component";
import { NuevoUsuarioComponent } from "./screem/seguridad/nuevo-usuario/nuevo-usuario.component";
import { EditarRolComponent } from "./screem/seguridad/editar-rol/editar-rol.component";
import { EditarUsuarioComponent } from "./screem/seguridad/editar-usuario/editar-usuario.component";
import { ReporteDireccionComponent } from "./screem/reportes/reporte-direccion/reporte-direccion.component";
import { ListaObjetoGastoComponent } from "./screem/catalogo/lista-objeto-gasto/lista-objeto-gasto.component";
import { NuevoObjetoGastoComponent } from "./screem/catalogo/nuevo-objeto-gasto/nuevo-objeto-gasto.component";
import { EditarObjetoGastoComponent } from "./screem/catalogo/editar-objeto-gasto/editar-objeto-gasto.component";
import { ReporteDireccionRiesgoComponent } from "./screem/reportes/reporte-direccion-riesgo/reporte-direccion-riesgo.component";
import { reporteDireccionAcumulado } from "./model/reporteDireccionAcumulado";
import { ReporteDireccionActividadComponent } from "./screem/reportes/reporte-direccion-actividad/reporte-direccion-actividad.component";
import { ReporteDireccionComparativoEjecucionComponent } from './screem/reportes/reporte-direccion-comparativo-ejecucion/reporte-direccion-comparativo-ejecucion.component';
import { ReporteObjetoGastoComponent } from './screem/reportes/reporte-objeto-gasto/reporte-objeto-gasto.component';

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
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "error", component: ErrorComponent },

  { path: "vista-operacion/:id", component: VistaOperacionComponent },
  { path: "lista-operaciones", component: ListaOperacionComponent },
  { path: "nueva-operacion", component: NuevaOperacionComponent },
  { path: "lista-componente/:id", component: ListaComponenteComponent },
  { path: "nuevo-componente/:id", component: NuevoComponenteComponent },
  {
    path: "editar-componente/:id/:operacion",
    component: EditarComponenteComponent,
  },
  { path: "lista-indicador/:id", component: ListaIndicadorComponent },
  { path: "nuevo-indicador/:id", component: NuevoIndicadorComponent },
  {
    path: "nuevo-indicador-subcomponente/:id",
    component: NuevoIndicadorSubcomponenteComponent,
  },
  {
    path: "editar-indicador/:id/:operacion",
    component: EditarIndicadorComponent,
  },
  { path: "lista-producto/:id", component: ListaProductoComponent },
  { path: "nuevo-producto/:id", component: NuevoProductoComponent },
  {
    path: "nuevo-producto-subcomponente/:id",
    component: NuevoProductoSubcomponenteComponent,
  },
  {
    path: "editar-producto/:id/:operacion",
    component: EditarProductoComponent,
  },
  { path: "lista-subcomponente/:id", component: ListaSubcomponenteComponent },
  { path: "nuevo-subcomponente/:id", component: NuevoSubcomponenteComponent },
  {
    path: "editar-subcomponente/:id/:operacion",
    component: EditarSubcomponenteComponent,
  },

  { path: "edt-componente/:id", component: EdtComponenteComponent },
  { path: "edt-subcomponente/:id", component: EdtSubcomponenteComponent },
  { path: "edt-indicador/:id", component: EdtIndicadorComponent },
  { path: "edt-producto/:id", component: EdtProductoComponent },
  { path: "edt-actividad/:poa/:operacion", component: EdtActividadComponent },

  { path: "poa-operacion/:id", component: PoaOperacionComponent },
  { path: "nuevo-poa/:id", component: NuevoPoaComponent },
  { path: "poa-proyeccion/:id", component: PoaProyeccionComponent },
  { path: "poa-ejecucion/:id", component: PoaEjecucionComponent },
  {
    path: "lista-actividad/:poa/:operacion",
    component: ListaActividadComponent,
  },
  { path: "nueva-actividad/:id", component: NuevaActividadComponent },
  {
    path: "nueva-actividad-subcomponente/:id",
    component: NuevaActividadSubcomponenteComponent,
  },
  {
    path: "editar-actividad/:id/:operacion",
    component: EditarActividadComponent,
  },

  { path: "lista-cargo", component: ListaCargoComponent },
  { path: "lista-direccion", component: ListaDireccionComponent },
  { path: "lista-empleado", component: ListaEmpleadoComponent },
  { path: "lista-fuente", component: ListaFuenteComponent },
  { path: "lista-programa", component: ListaProgramaComponent },
  { path: "lista-tipodireccion", component: ListaTipoDireccionComponent },
  { path: "lista-objetogasto", component: ListaObjetoGastoComponent },

  { path: "nuevo-cargo", component: NuevoCargoComponent },
  { path: "nueva-direccion", component: NuevaDireccionComponent },
  { path: "nuevo-empleado", component: NuevoEmpleadoComponent },
  { path: "nueva-fuente", component: NuevaFuenteComponent },
  { path: "nuevo-programa", component: NuevoProgramaComponent },
  { path: "nuevo-tipodireccion", component: NuevoTipoDireccionComponent },
  { path: "nuevo-objetogasto", component: NuevoObjetoGastoComponent },

  { path: "editar-cargo/:id", component: EditarCargoComponent },
  { path: "editar-direccion/:id", component: EditarDireccionComponent },
  { path: "editar-empleado/:id", component: EditarEmpleadoComponent },
  { path: "editar-fuente/:id", component: EditarFuenteComponent },
  { path: "editar-programa/:id", component: EditarProgramaComponent },
  { path: "editar-tipodireccion/:id", component: EditarTipoDireccionComponent },
  { path: "editar-objetogasto/:id", component: EditarObjetoGastoComponent },

  { path: "lista-rol", component: ListaRolComponent },
  { path: "lista-usuario", component: ListaUsuarioComponent },
  { path: "nuevo-rol", component: NuevoRolComponent },
  { path: "nuevo-usuario", component: NuevoUsuarioComponent },
  { path: "editar-rol/:id", component: EditarRolComponent },
  { path: "editar-usuario/:id", component: EditarUsuarioComponent },

  { path: "reporte-direccion", component: ReporteDireccionComponent },
  {
    path: "reporte-direccion-riesgo",
    component: ReporteDireccionRiesgoComponent,
  },
  {
    path: "reporte-direccion-actividades",
    component: ReporteDireccionActividadComponent,
  },
  {path:'reporte-direccion-comparativa-ejecucion', component: ReporteDireccionComparativoEjecucionComponent},
  {path: 'reporte-objeto-gasto', component: ReporteObjetoGastoComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
