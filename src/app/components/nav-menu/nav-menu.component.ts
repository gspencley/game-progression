import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ks-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @Input()
  activeRoute: string;

  @Output()
  navigate = new EventEmitter<string>();

  doNavigate(route: string) {
    this.navigate.emit(route);
  }

  isActive(route: string) {
    return route === this.activeRoute;
  }
}
