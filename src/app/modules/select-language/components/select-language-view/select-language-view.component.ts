import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Language} from '../../types/language';

@Component({
    selector: 'ks-select-language-view',
    templateUrl: './select-language-view.component.html',
    styleUrls: [ './select-language-view.styles.scss' ]
})
export class SelectLanguageViewComponent {
    @Input()
    language: Language;

    @Output()
    switchLanguage = new EventEmitter<Language>();

    isLanguage(lang) {
        return this.language === lang;
    }

    change(lang: Language) {
        this.switchLanguage.emit(lang);
    }
}
