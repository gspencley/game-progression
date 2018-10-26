import { Component, OnInit } from '@angular/core';
import { LanguageStore } from '../../store/language.store';
import { ProfileStore } from '../../../your-profile/store/profile.store';

@Component({
  selector: 'ks-select-language',
  templateUrl: './select-language.component.html'
})
export class SelectLanguageComponent implements OnInit {
  constructor(public languageStore: LanguageStore, public profileStore: ProfileStore) {
  }

  ngOnInit(): void {
    this.languageStore.loadLanguages();
  }
}
