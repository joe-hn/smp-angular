import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import {
  registerLocaleData,
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";
import localesHN from "@angular/common/locales/es-HN";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { materialModule } from "./angular-material/material-module";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { LoginComponent } from "./pantallas/login/login.component";
import { InicioComponent } from "./pantallas/inicio/inicio.component";
import { ErrorComponent } from "./pantallas/error/error.component";
import { InicioseguridadComponent } from "./pantallas/seguridad/inicioseguridad/inicioseguridad.component";
import { CabeceraComponent } from "./component/cabecera/cabecera.component";
import { ResponsableComponent } from "./component/responsable/responsable.component";
import { MenuComponent } from "./component/menu/menu.component";
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
import { ModalEliminarComponent } from "./component/modal-eliminar/modal-eliminar.component";
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
import { ModalInformacionGeneralComponent } from "./component/modal-informacion-general/modal-informacion-general.component";
import { EdtActividadComponent } from "./screem/operacion/edt-actividad/edt-actividad.component";
import { ListaActividadComponent } from "./screem/operacion/lista-actividad/lista-actividad.component";
import { EditarActividadComponent } from "./screem/operacion/editar-actividad/editar-actividad.component";
import { ListaProgramaComponent } from "./screem/catalogo/lista-programa/lista-programa.component";
import { ListaCargoComponent } from "./screem/catalogo/lista-cargo/lista-cargo.component";
import { ListaDireccionComponent } from "./screem/catalogo/lista-direccion/lista-direccion.component";
import { ListaTipoDireccionComponent } from "./screem/catalogo/lista-tipo-direccion/lista-tipo-direccion.component";
import { ListaFuenteComponent } from "./screem/catalogo/lista-fuente/lista-fuente.component";
import { ListaEmpleadoComponent } from "./screem/catalogo/lista-empleado/lista-empleado.component";
import { NuevoProgramaComponent } from "./screem/catalogo/nuevo-programa/nuevo-programa.component";
import { NuevoCargoComponent } from "./screem/catalogo/nuevo-cargo/nuevo-cargo.component";
import { NuevoEmpleadoComponent } from "./screem/catalogo/nuevo-empleado/nuevo-empleado.component";
import { NuevaFuenteComponent } from "./screem/catalogo/nueva-fuente/nueva-fuente.component";
import { NuevoTipoDireccionComponent } from "./screem/catalogo/nuevo-tipo-direccion/nuevo-tipo-direccion.component";
import { NuevaDireccionComponent } from "./screem/catalogo/nueva-direccion/nueva-direccion.component";
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
import { ReporteDireccionGlobalComponent } from './screem/reportes/reporte-direccion-global/reporte-direccion-global.component';

registerLocaleData(localesHN, "es-HN");

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ErrorComponent,
    InicioseguridadComponent,
    CabeceraComponent,
    ResponsableComponent,
    MenuComponent,
    ListaOperacionComponent,
    NuevaOperacionComponent,
    ListaComponenteComponent,
    NuevoComponenteComponent,
    ListaIndicadorComponent,
    NuevoIndicadorComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarComponenteComponent,
    EditarIndicadorComponent,
    ModalEliminarComponent,
    ListaSubcomponenteComponent,
    NuevoSubcomponenteComponent,
    EditarSubcomponenteComponent,
    EdtComponenteComponent,
    EdtSubcomponenteComponent,
    NuevoIndicadorSubcomponenteComponent,
    NuevoProductoSubcomponenteComponent,
    EditarProductoComponent,
    EdtIndicadorComponent,
    EdtProductoComponent,
    VistaOperacionComponent,
    PoaOperacionComponent,
    NuevoPoaComponent,
    PoaProyeccionComponent,
    PoaEjecucionComponent,
    NuevaActividadComponent,
    NuevaActividadSubcomponenteComponent,
    ModalInformacionGeneralComponent,
    EdtActividadComponent,
    ListaActividadComponent,
    EditarActividadComponent,
    ListaProgramaComponent,
    ListaCargoComponent,
    ListaDireccionComponent,
    ListaTipoDireccionComponent,
    ListaFuenteComponent,
    ListaEmpleadoComponent,
    NuevoProgramaComponent,
    NuevoCargoComponent,
    NuevoEmpleadoComponent,
    NuevaFuenteComponent,
    NuevoTipoDireccionComponent,
    NuevaDireccionComponent,
    EditarCargoComponent,
    EditarDireccionComponent,
    EditarEmpleadoComponent,
    EditarFuenteComponent,
    EditarProgramaComponent,
    EditarTipoDireccionComponent,
    ListaRolComponent,
    ListaUsuarioComponent,
    NuevoRolComponent,
    NuevoUsuarioComponent,
    EditarRolComponent,
    EditarUsuarioComponent,
    ReporteDireccionComponent,
    ReporteDireccionGlobalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-HN" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
