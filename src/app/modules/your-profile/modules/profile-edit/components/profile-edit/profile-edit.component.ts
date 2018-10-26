import { Component } from '@angular/core';
import { LanguageStore } from '../../../../../select-language/store/language.store';
import { ProfileStore } from '../../../../store/profile.store';

@Component({
  selector: 'ks-profile-edit',
  templateUrl: 'profile-edit.component.html'
})
export class ProfileEditComponent {
  constructor(public languageStore: LanguageStore, public profileStore: ProfileStore) {
  }
}