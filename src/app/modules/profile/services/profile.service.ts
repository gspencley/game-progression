import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { LanguagesStore } from '../../languages/store/languages.store';
import { ProfileResponse } from '../types/profile-response/profile-response.interface';
import { transformProfileResponse } from '../types/profile/profile.functions';
import { Profile } from '../types/profile/profile.interface';
import { Language } from '../../languages/types/language/language.interface';


@Injectable()
export class ProfileService {
  constructor(private httpClient: HttpClient, private languagesStore: LanguagesStore) {}

  public getProfile(languages: Language[]): Observable<Profile> {
    return this.httpClient.get<ProfileResponse>(`${environment.APIEndpoint}/profile`).pipe(
          map((response: ProfileResponse) => transformProfileResponse(response, languages)
      )
    );
  }
}
