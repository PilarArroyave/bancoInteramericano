import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticarComponent } from './autenticar/autenticar.component'; //para manejar las rutas de  la aplicación

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AutenticarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }