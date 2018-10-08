import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProfileService {
  constructor(private httpClient: HttpClient) {
  }

  getProfile() {
    return this.httpClient.get(`${environment.APIEndpoint}/profile`);
  }
}
