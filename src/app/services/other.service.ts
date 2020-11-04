import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(
    private _http: HttpClient,
  ) {
  }

  postRequest(params: any, body?: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(environment.api + params, body, { headers });
  }

  getRequest(params: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(environment.api + params, { headers });
  }

  postToken(params: any, token?: string, body?: any,): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this._http.post(environment.api + params, body, { headers });
  }

  putToken(params: any, token?: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this._http.get(environment.api + params, { headers });
  }

}
