import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platform } from '../types/platform/platform.interface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PlatformsService {
  constructor(private httpClient: HttpClient) {}

  public getPlatforms(): Observable<Platform[]> {
    return this.httpClient.get<Platform[]>(`${environment.APIEndpoint}/platforms`);
  }
}
