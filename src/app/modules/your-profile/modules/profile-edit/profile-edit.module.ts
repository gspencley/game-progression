import { NgModule } from '@angular/core';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { CommonModule } from '@angular/common';
import { ProfileEditRoutesModule } from './profile-edit-routes.module';


@NgModule({
  imports: [
    ProfileEditRoutesModule,
    CommonModule
  ],

  declarations: [ProfileEditComponent]
})
export class ProfileEditModule {
}
