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
 
import { LoginComponent } from './pantallas/login/login.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { ErrorComponent } from './pantallas/error/error.component';
import { InicioOperacionComponent } from './pantallas/operaciones/inicio-operacion/inicio-operacion.component';
import { IniciocatalogoComponent } from './pantallas/catalogos/iniciocatalogo/iniciocatalogo.component';
import { InicioseguridadComponent } from './pantallas/seguridad/inicioseguridad/inicioseguridad.component';


registerLocaleData(localesHN, 'es-HN');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ErrorComponent,
    InicioOperacionComponent,
    IniciocatalogoComponent,
    InicioseguridadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
