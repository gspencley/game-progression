import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Language } from '../../types/language';

@Component({
  selector: 'ks-select-language-view',
  templateUrl: './select-language-view.component.html',
  styleUrls: ['./select-language-view.styles.scss']
})
export class SelectLanguageViewComponent implements OnChanges {
  @Input()
  language: Language;

  @Output()
  switchLanguage = new EventEmitter<Language>();

  isEnglish: boolean;
  isFrench: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    this.isEnglish = this.language  === Language.EN;
    this.isFrench = this.language   === Language.FR;
  }

  change(lang: Language) {
    this.switchLanguage.emit(lang);
  }
}
