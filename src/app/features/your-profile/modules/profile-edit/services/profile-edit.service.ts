import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';
import { Profile } from '../../../../../modules/profile/types/profile/profile.interface';

@Injectable()
export class ProfileEditService {
  constructor(private httpClient: HttpClient) {}

  public updateProfile(profile: Profile): Observable<Profile> {
    return this.httpClient.put<Profile>(`${environment.APIEndpoint}/profile`, profile);
  }
}
