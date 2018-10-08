import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import {AppRoutes} from './app.routes';
import {AppStore} from './store/app.store';
import {HeaderModule} from './modules/header/header.module';
import {FooterModule} from './modules/footer/footer.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppReducer} from './store/app.reducer';
import {NavigationModule} from './modules/navigation/navigation.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,

        BrowserModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ HttpClient ]
            }
        }),

        AppRoutes,

        HeaderModule,
        NavigationModule,
        FooterModule,

        StoreModule.forRoot(AppReducer),
        EffectsModule.forRoot([])
    ],
    providers: [ AppStore ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
