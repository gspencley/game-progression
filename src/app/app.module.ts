import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { AppRoutes } from './app.routes';
import { AppStore } from './store/app.store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CommonModule } from '@angular/common';
import { ProfileNavModule } from './modules/profile-nav/profile-nav.module';
import { SelectLanguageModule } from './modules/select-language/select-language.module';
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
    NavMenuComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,

    AppRoutes,
    ProfileNavModule,
    SelectLanguageModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([])
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
