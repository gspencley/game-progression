import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';
import { ProfileDto } from '../../../../../modules/profile/types/profile-dto/profile-dto.interface';
import { Profile } from '../../../../../modules/profile/types/profile/profile.interface';
import { ProfileService } from '../../../../../modules/profile/services/profile.service';

@Injectable()
export class ProfileEditService {
  constructor(
    private httpClient: HttpClient,
    private profileService: ProfileService
  ) {}

  public updateProfile(profile: ProfileDto): Observable<Profile> {
    return this.profileService.transformProfileDtoResponseToProfile(
      this.httpClient.put<ProfileDto>(`${environment.APIEndpoint}/profile`, profile)
    );
  }
}
