import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
    @Input()titulo:string = '' // Define una variable pública llamada 'titulo' de tipo string, inicializada como cadena vacía

  constructor() { }

  ngOnInit() {}

}
