import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlienForm } from './interfaces/alien-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportFormService {

  constructor(private httpClient: HttpClient) { }

  getForm(): Observable<AlienForm> {
    return this.httpClient.get('http://www.mocky.io/v2/59f7760a2f0000ab1d55864e') as Observable<AlienForm>;
  }
}
