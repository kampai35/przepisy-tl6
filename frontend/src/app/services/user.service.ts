import { Iuser } from '../interfaces/iuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserService {
  baseURL = "http://024f-91-246-72-14.ngrok.io";

  constructor(private http: HttpClient) { }

  public login(user: Iuser):Observable<Iuser>{
    return this.http.post<{data: Iuser}>(this.baseURL+'/users/token', {data: user})
    .pipe(
      map((response) => response.data),
      tap((response: Iuser) => {
        //zamienia obiekty na jsonowy stringi
        localStorage.setItem('user', JSON.stringify(response));
      }),
      //catchError()
      );
  }

  public register(user: Iuser):Observable<Iuser>{
    return this.http.post<{data: Iuser}>(this.baseURL+'/users', {data: user})
    .pipe(
      map((response) => response.data)
    )
  }



}
