import { Component, OnInit } from '@angular/core';
import { listLinks } from 'src/app/types/list-links.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  linksToRedirect: listLinks = [
    { linkText: "Novo produto", linkUrl: "" },
    { linkText: "Registrar venda", linkUrl: "" },
    { linkText: "Mais vendidos", linkUrl: "" },
    { linkText: "Conjuntos", linkUrl: "" },
    { linkText: "Macaquinhos", linkUrl: "" },
    { linkText: "Calças", linkUrl: "" },
    { linkText: "Shorts", linkUrl: "" },
    { linkText: "Tops", linkUrl: "" },
    { linkText: "Blusas", linkUrl: "" },
    { linkText: "Casacos", linkUrl: "" },
    { linkText: "Papelaria", linkUrl: "" },
    { linkText: "Reposição de estoque", linkUrl: "" },
    { linkText: "Fornecedores", linkUrl: "" }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
