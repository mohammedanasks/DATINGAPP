import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CLIENT';
  users : any;

  constructor(private http : HttpClient){

  } 

  GetUser(){
    this.http.get("https://localhost:5001/api/Users").subscribe(respons=>{
      this.users=respons
    },error =>{
      console.log(error)
    });
    

  }
  
  ngOnInit(){
    this.GetUser()
  }
  
}


