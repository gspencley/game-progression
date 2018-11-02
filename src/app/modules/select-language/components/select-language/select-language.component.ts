import { Component, OnInit } from '@angular/core';

import { LanguagesStore } from '../../../languages/store/languages.store';
import { ProfileStore } from '../../../profile/store/profile.store';

@Component({
  selector: 'ks-select-language',
  templateUrl: './select-language.component.html'
})
export class SelectLanguageComponent implements OnInit {
  constructor(public languagesStore: LanguagesStore, public profileStore: ProfileStore) {}

  public ngOnInit(): void {
    // this.languagesStore.retrieve();
  }
}
