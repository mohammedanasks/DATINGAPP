import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Registermode = false;
  users:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.Getusers()
  }

  Register(){
    this.Registermode=!this.Registermode;
  }

  Getusers(){
    this.http.get("https://localhost:5001/api/Users").subscribe(respons=>{
      this.users=respons
    }) 
  }

  abroteregister(event:boolean){
    this.Registermode=event;
  }
}
