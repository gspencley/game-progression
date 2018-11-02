import { Component, OnInit } from '@angular/core';

import { LanguagesStore } from '../../../../../../modules/languages/store/languages.store';
import { ProfileStore } from '../../../../../../modules/profile/store/profile.store';
import { ProfileEditStore } from '../../store/profile-edit.store';

@Component({
  selector: 'ks-profile-edit',
  templateUrl: 'profile-edit.component.html'
})
export class ProfileEditComponent implements OnInit {
  constructor(
    public languagesStore: LanguagesStore,
    public profileStore: ProfileStore,
    public profileEditStore: ProfileEditStore
  ) {}

  public ngOnInit(): void {
    this.languagesStore.retrieve();
    this.profileStore.retrieve();
  }
}
