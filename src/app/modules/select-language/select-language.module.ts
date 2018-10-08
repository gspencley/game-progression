import {NgModule} from '@angular/core';
import {LanguageStore} from './store/language.store';
import {TranslateModule} from '@ngx-translate/core';
import {StoreModule} from '@ngrx/store';
import {languageReducer} from './store/languageReducer';
import {EffectsModule} from '@ngrx/effects';
import {LanguageEffects} from './store/language.effects';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {SelectLanguageViewComponent} from './components/select-language-view/select-language-view.component';
import {SelectLanguageComponent} from './components/select-language/select-language.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,

        TranslateModule.forChild(),

        StoreModule.forFeature('languageState', languageReducer),
        EffectsModule.forFeature([LanguageEffects])
    ],

    declarations: [
        SelectLanguageComponent,
        SelectLanguageViewComponent
    ],
    providers: [ LanguageStore ],
    exports: [ SelectLanguageComponent ]
})
export class SelectLanguageModule {}