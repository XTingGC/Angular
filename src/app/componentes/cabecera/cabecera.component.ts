import { Component } from '@angular/core';

/*el nombre del selector nos permitirá añadirlo en app.component.html*/
/*templateUrl sirve para enlazar el TS con el HTML de la cabecera */
/*Si no se enlaza y no se pone el selector en el HTML principal,
 no va a aparecer el HTML en la página */
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',

})
/*Se exporta la clase para que pueda llamarlo en app.module.ts */
export class CabeceraComponent {

}