import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ks-profile-edit-menu',
  templateUrl: 'profile-edit-menu.component.html',
  styleUrls: ['./profile-edit-menu.component.scss']
})
export class ProfileEditMenuComponent {
  @Output()
  public saveChanges = new EventEmitter<boolean>();

  constructor(public translate: TranslateService) {}

  public save() {
    this.saveChanges.emit(true);
  }
}
