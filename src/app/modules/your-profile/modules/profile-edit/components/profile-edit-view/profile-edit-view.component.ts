import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../../../select-language/types/language.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from '../../../../types/profile';

@Component({
  selector: 'ks-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: [ './profile-edit-view.component.scss' ]
})
export class ProfileEditViewComponent implements OnInit, OnChanges {
  @Input()
  languages: Language[];

  @Input()
  profile: Profile;

  firstName = new FormControl('');
  lastName = new FormControl('');
  language = new FormControl('');
  averageNumberOfHoursPerDay = new FormControl('');

  formGroup: FormGroup;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      language: this.language,
      averageHoursPerDay: this.averageNumberOfHoursPerDay
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.firstName.setValue(this.profile.firstName);
    this.lastName.setValue(this.profile.lastName);
    this.language.setValue(this.profile.languageId);
    this.averageNumberOfHoursPerDay.setValue(this.profile.averageNumberOfHoursPerDay);
  }

  getLanguagesAsOptions() {
    return this.languages.map((language: Language) =>
      ({ text: language.name, value: language.id }));
  }

  saveChanges() {
    console.log(this.formGroup.value);
  }
}
