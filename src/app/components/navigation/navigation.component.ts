import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStore } from '../../store/navigation/navigation.store';

@Component({
  selector: 'ks-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(public navigationStore: NavigationStore, public translate: TranslateService) {
  }
}
