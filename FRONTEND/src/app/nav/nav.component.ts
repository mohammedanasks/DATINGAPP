import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../AppServicess/account.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model :any ={}
  

  constructor(public accountService :  AccountService) { }

  ngOnInit(): void {

  }


  Login(){
    this.accountService.Login(this.model).subscribe(response=>{
      console.log(response)
    },error =>{
      console.log(error)
    })
  }

  Logout(){
    this.accountService.Logout();
  }

 
}
