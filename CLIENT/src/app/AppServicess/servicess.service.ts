import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servicess{

  private BaseURL="https://localhost:5001/api/Users";

  constructor(private http:HttpClient) { }

  public getusers():Observable<any>{

    return this.http.get(this.BaseURL)
  }
}
