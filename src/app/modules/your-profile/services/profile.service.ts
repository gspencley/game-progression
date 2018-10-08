import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {take} from 'rxjs/operators';

@Injectable()
export class ProfileService {
    constructor(private httpClient: HttpClient) {
    }

    getProfile() {
        return this.httpClient.get(
            `${environment.APIEndpoint}/profile`
        ).pipe(take(1));
    }
}
