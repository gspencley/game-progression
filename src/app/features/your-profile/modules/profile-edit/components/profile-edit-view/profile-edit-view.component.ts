import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Language } from '../../../../../../modules/languages/types/language/language.interface';
import { Profile } from '../../../../../../modules/profile/types/profile/profile.interface';
import { ProfileSaveState } from '../../types/profile-save-state/profile-save-state.enum';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ks-profile-edit-view',
  templateUrl: './profile-edit-view.component.html',
  styleUrls: ['./profile-edit-view.component.scss']
})
export class ProfileEditViewComponent implements OnInit, OnChanges {
  @Input()
  public saveState: ProfileSaveState;

  @Input()
  public languages: Language[];

  @Input()
  public profile: Profile;

  @Input()
  public error: HttpErrorResponse;

  @Output()
  public saveProfile = new EventEmitter<Profile>();

  @Output()
  public cancel = new EventEmitter<boolean>();

  public id           = new FormControl('');
  public firstName    = new FormControl('');
  public lastName     = new FormControl('');
  public languageId   = new FormControl('');
  public image        = new FormControl('');
  public averageNumberOfHoursPerDay = new FormControl('');

  public formGroup: FormGroup;

  public isSaving: boolean;
  public hasError: boolean;
  public savedSuccess: boolean;

  constructor(public translate: TranslateService) {}

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      languageId: this.languageId,
      averageNumberOfHoursPerDay: this.averageNumberOfHoursPerDay,
      image: this.image
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.updateFormValues();
    this.updateSaveStateBooleans();
  }

  public getLanguagesAsOptions() {
    return this.languages.map((language: Language) => ({
      text: language.name,
      value: language.id
    }));
  }

  public onCancel() {
    this.cancel.emit(true);
  }

  public saveChanges() {
    this.saveProfile.emit(this.formGroup.value);
  }

  /*
   * Helpers
   */

  private updateFormValues() {
    this.id.setValue(this.profile.id);
    this.firstName.setValue(this.profile.firstName);
    this.lastName.setValue(this.profile.lastName);
    this.languageId.setValue(this.profile.language.id);
    this.image.setValue(this.profile.image);
    this.averageNumberOfHoursPerDay.setValue(this.profile.averageNumberOfHoursPerDay);
  }

  private updateSaveStateBooleans() {
    this.isSaving = this.saveState === ProfileSaveState.WAITING;
    this.hasError = this.saveState === ProfileSaveState.ERROR;
    this.savedSuccess = this.saveState === ProfileSaveState.SUCCESS;
  }
}
