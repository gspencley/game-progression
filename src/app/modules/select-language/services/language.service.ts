import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class LanguageService {
  constructor(private httpClient: HttpClient) {
  }

  getLanguages() {
    return this.httpClient.get(`${environment.APIEndpoint}/languages`);
  }
}
