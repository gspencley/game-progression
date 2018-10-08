import { Component, OnInit } from '@angular/core';
import { ProfileStore } from '../../../your-profile/store/profile.store';
import { NavigationStore } from '../../../../store/navigation/navigation.store';

@Component({
  selector: 'ks-profile-nav',
  templateUrl: './profile-nav.component.html'
})
export class ProfileNavComponent implements OnInit {
  constructor(public navigationStore: NavigationStore, public profileStore: ProfileStore) {
  }

  ngOnInit(): void {
    this.profileStore.loadProfile();
  }

  click() {
    this.navigationStore.navigate('/your-profile/details');
  }
}
