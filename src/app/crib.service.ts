import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CribService {

  constructor(private http: HttpClient) { }

  getCrib(id?: any):Observable<any> {
    if(id) {
      return this.http.get(`${environment.apiUrl}/cribs/` + id);
    } else {
      return this.http.get(`${environment.apiUrl}/cribs`);
    }
  }

  removeCrib(id: Number):Observable<any> {
    return this.http.delete(`${environment.apiUrl}/cribs/` + id);
  }

  addCrib(cribObj: any):Observable<any> {
    return this.http.post(`${environment.apiUrl}/cribs`, cribObj);
  }

  editCrib(cribObj: any):Observable<any> {
    return this.http.put(`${environment.apiUrl}/cribs/` + cribObj.id, cribObj);
  }
}
