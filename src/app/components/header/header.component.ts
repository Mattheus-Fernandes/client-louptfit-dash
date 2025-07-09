import { Component, Input } from '@angular/core';
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

  notAdmin(role: number): listLinks {

    if (role === 1) {
      return this.linksPrivate
    }

    return this.linksPrivate.filter((_, index) => index !== 0 && index !== 2 && index !== 8)
  }

}
