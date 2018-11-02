import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Profile } from '../../../profile/types/profile/profile.interface';

@Component({
  selector: 'ks-profile-nav-view',
  templateUrl: './profile-nav-view.component.html',
  styleUrls: ['./profile-nav-view.component.scss']
})
export class ProfileNavViewComponent implements OnChanges {
  @Input()
  public profile: Profile;

  public image = '';

  constructor(public translate: TranslateService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.profile && this.profile.image.length) {
      this.image = `assets/${this.profile.image}`;
    }
  }
}
