import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { LanguagesStore } from '../../languages/store/languages.store';
import { ProfileDto } from '../types/profile-dto/profile-dto.interface';
import { transformProfileDtoToProfile } from '../types/profile/profile.functions';
import { Profile } from '../types/profile/profile.interface';


@Injectable()
export class ProfileService {
  constructor(
    private httpClient: HttpClient,
    private languagesStore: LanguagesStore) {
  }

  public getProfile(): Observable<Profile> {
    return this.transformProfileDtoResponseToProfile(
      this.httpClient.get<ProfileDto>(`${environment.APIEndpoint}/profile`)
    );
  }

  public transformProfileDtoResponseToProfile(profileResponse: Observable<ProfileDto>) {
    return profileResponse.pipe(
      withLatestFrom(this.languagesStore.getLanguages()),
      map(([response, languages]) => transformProfileDtoToProfile(response, languages))
    );
  }
}
