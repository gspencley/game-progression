import { Component } from '@angular/core';

import { ProfileStore } from '../../../profile/store/profile.store';

@Component({
  selector: 'ks-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent {
  constructor(public profileStore: ProfileStore) {}
}
