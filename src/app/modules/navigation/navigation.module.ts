import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {navigationReducer} from './store/navigation.reducer';
import {EffectsModule} from '@ngrx/effects';
import {NavigationEffects} from './store/navigation.effects';
import {NavigationStore} from './store/navigation.store';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        TranslateModule.forChild(),
        RouterModule,
        CommonModule,

        StoreModule.forFeature('navigationState', navigationReducer),
        EffectsModule.forFeature([NavigationEffects])
    ],
    declarations: [ NavigationComponent, NavMenuComponent ],
    exports: [ NavigationComponent ],
    providers: [ NavigationStore ]
})
export class NavigationModule {}
