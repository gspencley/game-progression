import { Component, OnInit } from '@angular/core';
import { ProfileStore } from '../../../../store/profile.store';

@Component({
  selector: 'ks-profile-details',
  templateUrl: './profile-details.component.html'
})
export class ProfileDetailsComponent implements OnInit {
  constructor(public profileStore: ProfileStore) {
  }

  ngOnInit(): void {
    this.profileStore.initializeProfile();
  }
}
