import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Language } from '../types/language/language.interface';
import { map } from 'rxjs/operators';
import { LanguageResponse } from '../types/language-response/language-response.interface';
import { transformLanguageResponseArrayToLanguageArray } from '../types/language/language.functions';

@Injectable()
export class LanguagesService {
  constructor(private httpClient: HttpClient) {}

  public retrieve(): Observable<Language[]> {
    return this.httpClient.get<LanguageResponse[]>(`${environment.APIEndpoint}/languages`).pipe(
      map((languages: LanguageResponse[]) => transformLanguageResponseArrayToLanguageArray(languages))
    );
  }
}
