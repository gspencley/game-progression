import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ks-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @Input()
  public activeRoute: string;

  @Output()
  public navigate = new EventEmitter<string>();

  public doNavigate(route: string) {
    this.navigate.emit(route);
  }

  public isActive(route: string) {
    return route === this.activeRoute;
  }
}
