import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutes } from './app.routes';
import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesDbModule } from './modules/games-db/games-db.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { PlatformsModule } from './modules/platforms/platforms.module';
import { ProfileNavModule } from './modules/profile-nav/profile-nav.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SelectLanguageModule } from './modules/select-language/select-language.module';
import { UiModule } from './modules/ui/ui.module';
import { AppEffects } from './store/app.effects';
import { AppStore } from './store/app.store';
import { rootReducer } from './store/root-reducer';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    NavMenuComponent,
    MainContentComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,

    LanguagesModule,
    ProfileModule,

    AppRoutes,
    ProfileNavModule,
    SelectLanguageModule,
    UiModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AppEffects]),
    ProfileModule,
    LanguagesModule,
    PlatformsModule,
    GamesDbModule
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
