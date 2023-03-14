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
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXQVteVX7_HYErkRtdK84tS9b5olHxfok',
  authDomain: 'novikovstudio-4c512.firebaseapp.com',
  projectId: 'novikovstudio-4c512',
  storageBucket: 'novikovstudio-4c512.appspot.com',
  messagingSenderId: '20614670915',
  appId: '1:20614670915:web:d73dd029597b6499bfc2f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
