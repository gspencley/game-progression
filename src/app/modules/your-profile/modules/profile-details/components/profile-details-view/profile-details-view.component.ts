import { Component, Input } from '@angular/core';
import { Profile } from '../../../../types/profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ks-profile-details-display',
  templateUrl: './profile-details-view.component.html',
  styleUrls: ['./profile-details-view.scss']
})
export class ProfileDetailsViewComponent {
  @Input()
  profile: Profile;

  constructor(public translate: TranslateService) {
  }
}