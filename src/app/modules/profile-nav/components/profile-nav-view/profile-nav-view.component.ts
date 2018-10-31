import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Profile } from '../../../your-profile/types/profile.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ks-profile-nav-view',
  templateUrl: './profile-nav-view.component.html',
  styleUrls: ['./profile-nav-view.component.scss']
})
export class ProfileNavViewComponent implements OnChanges {
  @Input()
  profile: Profile;

  image = '';

  constructor(public translate: TranslateService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.profile && this.profile.image.length) {
      this.image = `assets/${this.profile.image}`;
    }
  }
}
