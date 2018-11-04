import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ks-profile-edit-menu',
  templateUrl: 'profile-edit-menu.component.html',
  styleUrls: ['./profile-edit-menu.component.scss']
})
export class ProfileEditMenuComponent {
  @Output()
  public saveChanges = new EventEmitter<boolean>();

  @Output()
  public cancel = new EventEmitter<boolean>();

  @Input()
  public isSaving: boolean;

  constructor(public translate: TranslateService) {}

  public onCancel() {
    this.cancel.emit(true);
  }

  public onSave() {
    if(this.isSaving === true) {
      return;
    }

    this.saveChanges.emit(true);
  }
}
