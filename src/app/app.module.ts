import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import localesHN from '@angular/common/locales/es-HN';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModule } from './angular-material/material-module';
import {CurrencyMaskModule} from 'ng2-currency-mask';
 
import { LoginComponent } from './pantallas/login/login.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { ErrorComponent } from './pantallas/error/error.component';
import { InicioOperacionComponent } from './pantallas/operaciones/inicio-operacion/inicio-operacion.component';
import { IniciocatalogoComponent } from './pantallas/catalogos/iniciocatalogo/iniciocatalogo.component';
import { InicioseguridadComponent } from './pantallas/seguridad/inicioseguridad/inicioseguridad.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { OprAComponent } from './pantallas/operaciones/pantallas/opr-a/opr-a.component';
import { ProgramaAComponent } from './pantallas/catalogos/pantallas/programa/programa-a/programa-a.component';
import { ProgramaEComponent } from './pantallas/catalogos/pantallas/programa/programa-e/programa-e.component';
import { FuenteAComponent } from './pantallas/catalogos/pantallas/fuente/fuente-a/fuente-a.component';
import { FuenteEComponent } from './pantallas/catalogos/pantallas/fuente/fuente-e/fuente-e.component';
import { EstructuraOperacionComponent } from './pantallas/operaciones/pantallas/estructura/estructura-operacion/estructura-operacion.component';
import { ResponsableComponent } from './component/responsable/responsable.component';
import { ComponenteComponent } from './pantallas/operaciones/pantallas/componente/componente.component';
import { IndicadorComponent } from './pantallas/operaciones/pantallas/indicador/indicador.component';
import { ProductoComponent } from './pantallas/operaciones/pantallas/producto/producto.component';
import { MenuComponent } from './component/menu/menu.component';
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
import { ModalEliminarComponent } from './component/modal-eliminar/modal-eliminar.component';
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

registerLocaleData(localesHN, 'es-HN');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ErrorComponent,
    InicioOperacionComponent,
    IniciocatalogoComponent,
    InicioseguridadComponent,    
    CabeceraComponent,
    OprAComponent,    
    ProgramaAComponent,
    ProgramaEComponent,
    FuenteAComponent,
    FuenteEComponent,
    EstructuraOperacionComponent,
    ResponsableComponent,
    ComponenteComponent,
    IndicadorComponent,
    ProductoComponent,
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
    EdtProductoComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
