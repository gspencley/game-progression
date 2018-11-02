import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Language } from '../types/language/language.interface';

@Injectable()
export class LanguagesService {
  constructor(private httpClient: HttpClient) {}

  public retrieve(): Observable<Language[]> {
    console.log('LanguagesServices.retrieve()');
    return this.httpClient.get<Language[]>(`${environment.APIEndpoint}/languages`);
  }
}
