import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../../../select-language/types/language.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from '../../../../types/profile.interface';

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

  @Output()
  saveProfile = new EventEmitter<Profile>();

  firstName = new FormControl('');
  lastName = new FormControl('');
  languageId = new FormControl('');
  averageNumberOfHoursPerDay = new FormControl('');
  image = new FormControl('');

  formGroup: FormGroup;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      languageId: this.languageId,
      averageNumberOfHoursPerDay: this.averageNumberOfHoursPerDay,
      image: this.image
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.firstName.setValue(this.profile.firstName);
    this.lastName.setValue(this.profile.lastName);
    this.languageId.setValue(this.profile.languageId);
    this.averageNumberOfHoursPerDay.setValue(this.profile.averageNumberOfHoursPerDay);
    this.image.setValue(this.profile.image);
  }

  getLanguagesAsOptions() {
    return this.languages.map((language: Language) =>
      ({ text: language.name, value: language.id }));
  }

  saveChanges() {
    this.saveProfile.emit(this.formGroup.value);
  }
}
