import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Importamos las clases que hemos exportado en los ts correspondientes */
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { BodyComponent } from './componentes/body/body.component';
import { PieComponent } from './componentes/pie/pie.component';
/*Las declaramos para que reconozca los componentes */
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BodyComponent,
    PieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
