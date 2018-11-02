import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { LanguagesModule } from '../languages/languages.module';
import { ProfileModule } from '../profile/profile.module';
import { UiModule } from '../ui/ui.module';

import { SelectLanguageViewComponent } from './components/select-language-view/select-language-view.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UiModule,
    ProfileModule,
    LanguagesModule,
    TranslateModule.forChild(),
  ],

  declarations: [SelectLanguageComponent, SelectLanguageViewComponent],
  exports: [SelectLanguageComponent]
})
export class SelectLanguageModule {}
