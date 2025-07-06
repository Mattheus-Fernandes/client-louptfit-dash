import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { listLinks } from 'src/app/types/list-links.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() id!: number | null
  @Input() role!: number

  linksPrivate: listLinks = [
    { linkText: "Novo produto", linkUrl: "" },
    { linkText: "Lançar venda", linkUrl: "" },
    { linkText: "Fornecedores", linkUrl: "" },
    { linkText: "Loja", linkUrl: "" },
    { linkText: "Mercadorias", linkUrl: "" },
    { linkText: "Compras", linkUrl: "" },
    { linkText: "Estoque", linkUrl: "" },
    { linkText: "Reposições", linkUrl: "" },
    { linkText: "Usuários", linkUrl: "" },

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

  notAdmin(role: number): listLinks {

    if (role === 1) {
      return this.linksPrivate
    }

    const linksNotAdmin = [...this.linksPrivate]
    linksNotAdmin.splice(2, 1)

    return linksNotAdmin
  }

}
