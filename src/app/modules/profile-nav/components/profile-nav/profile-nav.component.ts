import { Component, OnInit } from '@angular/core';
import { ProfileStore } from '../../../your-profile/store/profile.store';

@Component({
  selector: 'ks-profile-nav',
  templateUrl: './profile-nav.component.html'
})
export class ProfileNavComponent implements OnInit {
  constructor(public profileStore: ProfileStore) {
  }

  ngOnInit(): void {
    this.profileStore.loadProfile();
  }
}
