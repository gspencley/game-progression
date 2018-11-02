import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Profile } from '../../../../../../modules/profile/types/profile/profile.interface';

@Component({
  selector: 'ks-profile-details-view',
  templateUrl: './profile-details-view.component.html',
  styleUrls: ['./profile-details-view.scss']
})
export class ProfileDetailsViewComponent {
  @Input()
  public profile: Profile;

  constructor(public translate: TranslateService) {}
}
