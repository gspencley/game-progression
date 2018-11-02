import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Language } from '../../../../../../modules/languages/types/language/language.interface';
import { Profile } from '../../../../../../modules/profile/types/profile/profile.interface';

@Component({
  selector: 'ks-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: ['./profile-edit-view.component.scss']
})
export class ProfileEditViewComponent implements OnInit, OnChanges {
  @Input()
  public languages: Language[];

  @Input()
  public profile: Profile;

  @Output()
  public saveProfile = new EventEmitter<Profile>();

  public firstName = new FormControl('');
  public lastName = new FormControl('');
  public languageId = new FormControl('');
  public averageNumberOfHoursPerDay = new FormControl('');
  public image = new FormControl('');

  public formGroup: FormGroup;

  constructor(public translate: TranslateService) {}

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      languageId: this.languageId,
      averageNumberOfHoursPerDay: this.averageNumberOfHoursPerDay,
      image: this.image
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.firstName.setValue(this.profile.firstName);
    this.lastName.setValue(this.profile.lastName);
    this.languageId.setValue(this.profile.language.id);
    this.averageNumberOfHoursPerDay.setValue(this.profile.averageNumberOfHoursPerDay);
    this.image.setValue(this.profile.image);
  }

  public getLanguagesAsOptions() {
    return this.languages.map((language: Language) => ({
      text: language.name,
      value: language.id
    }));
  }

  public saveChanges() {
    this.saveProfile.emit(this.formGroup.value);
  }
}
