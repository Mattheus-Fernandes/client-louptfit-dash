import { Component, Input } from '@angular/core';
import { ILink } from 'src/app/interfaces/link.interface';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() linkText: ILink = {} as ILink;
}
