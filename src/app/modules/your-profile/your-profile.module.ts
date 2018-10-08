import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { YourProfileComponent } from './components/your-profile/your-profile.component';
import { CommonModule } from '@angular/common';
import { ProfileStore } from './store/profile.store';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './store/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';
import { ProfileService } from './services/profile.service';
import { ProfileDetailsModule } from './modules/profile-details/profile-details.module';
import { YourProfileRoutesModule } from './your-profile-routes.module';

@NgModule({
  imports: [
    YourProfileRoutesModule,

    TranslateModule.forChild(),
    CommonModule,

    ProfileDetailsModule,

    StoreModule.forFeature('profileState', profileReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  declarations: [YourProfileComponent],
  providers: [ProfileStore, ProfileService],
})
export class YourProfileModule {
}
