import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  tweetListURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public configUrl = '../../assets/config.json';
  
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
