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
    FuenteEComponent
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
