import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public configUrl = 'https://secure-fortress-85993.herokuapp.com/tweets';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl)
                        .pipe(map(data => data));
  }

}
