import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtherService {
  public token: string;
  public identity: any;

  constructor(
    private _http: HttpClient,
  ) {
  }

  postRequest(params: any, body?: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(environment.api + params, JSON.stringify(body), { headers });
  }

  getRequest(params: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(environment.api + params, { headers });
  }

  getRequestToken(params:any, token?:string) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`);
    return this._http.get(environment.api + params, { headers });
  }

  postToken(params: any, token?: string, body?: any,): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this._http.post(environment.api + params, JSON.stringify(body), { headers });
  }

  putToken(params: any, token?: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this._http.get(environment.api + params, { headers });
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != null) {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

}
