import { Component } from '@angular/core';

import { ProfileStore } from '../../../../../../modules/profile/store/profile.store';


@Component({
  selector: 'ks-profile-details',
  templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent {
  constructor(
    public profileStore: ProfileStore
  ) {}
}
