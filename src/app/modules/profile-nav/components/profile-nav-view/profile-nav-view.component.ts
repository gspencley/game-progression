import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Profile } from '../../../your-profile/types/profile';

@Component({
  selector: 'ks-profile-nav-view',
  templateUrl: './profile-nav-view.component.html',
  styleUrls: ['./profile-nav-view.component.scss']
})
export class ProfileNavViewComponent implements OnChanges {
  @Input()
  profile: Profile;

  image = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.profile && this.profile.image.length) {
      this.image = `assets/${this.profile.image}`;
    }
  }
}
