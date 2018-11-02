import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '../../../../modules/ui/ui.module';

import { ProfileEditMenuComponent } from './components/profile-edit-menu/profile-edit-menu.component';
import { ProfileEditViewComponent } from './components/profile-edit-view/profile-edit-view.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileEditRoutesModule } from './profile-edit-routes.module';
import { ProfileEditService } from './services/profile-edit.service';
import { ProfileEditEffects } from './store/profile-edit.effects';
import { profileEditReducer } from './store/profile-edit.reducer';
import { ProfileEditStore } from './store/profile-edit.store';
import { ProfileModule } from '../../../../modules/profile/profile.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ProfileEditRoutesModule,
    CommonModule,
    UiModule,
    ProfileModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('profileEditState', profileEditReducer),
    EffectsModule.forFeature([ProfileEditEffects])
  ],

  declarations: [ProfileEditComponent, ProfileEditViewComponent, ProfileEditMenuComponent],
  providers: [ProfileEditService, ProfileEditStore]
})
export class ProfileEditModule {}
