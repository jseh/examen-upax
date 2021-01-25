import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('reconstruido');
  }

}
