import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GamesService {
  constructor(private httpClient: HttpClient) {}
}
