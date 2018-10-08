import { Component } from '@angular/core';
import { LanguageStore } from '../../store/language.store';

@Component({
  selector: 'ks-select-language',
  templateUrl: './select-language.component.html'
})
export class SelectLanguageComponent {
  constructor(public languageStore: LanguageStore) {
  }
}
