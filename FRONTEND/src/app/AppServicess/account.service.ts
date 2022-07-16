import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private BaseURL="https://localhost:5001/api/";

  constructor(private http:HttpClient) { }

  private CurrentUserSource=new ReplaySubject<User>(1);
  CurrentUser$=this.CurrentUserSource.asObservable();

  public Login(model:any){

    return this.http.post(this.BaseURL+"account/login",model).pipe
    (map((respons:User)=>{
        const user=respons
        if(user){
          localStorage.setItem("user",JSON.stringify(user))
          this.CurrentUserSource.next(user);
        }
    }))
  }

  SetCurrentUser(user : User){
    this.CurrentUserSource.next(user);
  }

  public Logout(){
    localStorage.removeItem("user")
    this.CurrentUserSource.next(null);
  }

  public Register(model:any){
    return this.http.post(this.BaseURL+"account/register",model).pipe
    (map((user:User)=>{
      if(user){
        localStorage.setItem("user",JSON.stringify(user))
        this.CurrentUserSource.next(user)
      }
    }))
  }
}
