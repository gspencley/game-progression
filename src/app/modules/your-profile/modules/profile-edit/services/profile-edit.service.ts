import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../../types/profile.interface';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class ProfileEditService {
  constructor(private httpClient: HttpClient) {
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.httpClient.put<Profile>(`${environment.APIEndpoint}/profile`, profile);
  }
}
