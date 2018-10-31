import { NgModule } from '@angular/core';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CommonModule } from '@angular/common';
import { ProfileEditRoutesModule } from './profile-edit-routes.module';
import { UiModule } from '../../../ui/ui.module';
import { ProfileEditMenuComponent } from './components/profile-edit-menu/profile-edit-menu.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileEditViewComponent } from './components/profile-edit-view/profile-edit-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { profileEditReducer } from './store/profile-edit.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEditEffects } from './store/profile-edit.effects';
import { ProfileEditService } from './services/profile-edit.service';
import { ProfileEditStore } from './store/profile-edit.store';


@NgModule({
  imports: [
    ReactiveFormsModule,
    ProfileEditRoutesModule,
    CommonModule,
    UiModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('profileEditState', profileEditReducer),
    EffectsModule.forFeature([ProfileEditEffects])
  ],

  declarations: [
    ProfileEditComponent,
    ProfileEditViewComponent,
    ProfileEditMenuComponent
  ],
  providers: [
    ProfileEditService,
    ProfileEditStore
  ]
})
export class ProfileEditModule {
}
