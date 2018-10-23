import { Component, Input } from '@angular/core';

@Component({
  selector: 'ks-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input()
  title: string;
}