import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { listLinks } from 'src/app/types/list-links.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() id!:number | null

  linksPrivate: listLinks = [
    { linkText: "Novo produto", linkUrl: "" },
    { linkText: "Registrar venda", linkUrl: "" },
    { linkText: "Fornecedores", linkUrl: "" },
    { linkText: "Papelaria", linkUrl: "" },
    { linkText: "Reposição de estoque", linkUrl: "" },
  ]

  linksPublic: listLinks = [
    { linkText: "Mais vendidos", linkUrl: "" },
    { linkText: "Conjuntos", linkUrl: "" },
    { linkText: "Macaquinhos", linkUrl: "" },
    { linkText: "Calças", linkUrl: "" },
    { linkText: "Shorts", linkUrl: "" },
    { linkText: "Tops", linkUrl: "" },
    { linkText: "Blusas", linkUrl: "" },
    { linkText: "Casacos", linkUrl: "" },

  ]

}
