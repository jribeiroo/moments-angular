import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Moment } from 'src/app/Moment';

import { environment } from 'src/environments/environment';

import { Response } from '../Response';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> { //pega todos os dados
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  } 

  getMoment(id: number): Observable<Response<Moment>> { //pega os dados da Api (id)
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  } 

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl,formData);
  }

  removeMoment(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
