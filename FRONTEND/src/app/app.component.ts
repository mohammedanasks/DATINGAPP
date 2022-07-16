import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './AppServicess/account.service';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CLIENT';
  users : any;

  constructor(private http : HttpClient,private accountservice  : AccountService){

  } 

 
  SetCurrentUser(){
      const user:User=JSON.parse(localStorage.getItem("user"));
      this.accountservice.SetCurrentUser(user);
  }







  ngOnInit(){
    this.SetCurrentUser()
  }
  
}
