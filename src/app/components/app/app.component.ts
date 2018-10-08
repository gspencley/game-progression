import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../modules/select-language/types/language';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(translate: TranslateService) {
        translate.setDefaultLang(Language.EN);
    }
}

