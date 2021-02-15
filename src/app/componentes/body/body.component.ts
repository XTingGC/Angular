import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent{
mostrar = true;
carta1: any = {
  titulo: "BL Editorial",
  texto: "Editorial dedicada a las novelas web"
}
}

