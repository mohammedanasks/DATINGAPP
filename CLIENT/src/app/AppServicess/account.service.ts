import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private BaseURL="https://localhost:5001/api/";

  constructor(private http:HttpClient) { }

  public login(model:any){

    return this.http.post(this.BaseURL+"account/login",model)
  }
}
