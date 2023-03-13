import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getCategories() {}

  getServices() {}

  getSpecialoffers() {}

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.log(`failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
