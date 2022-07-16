import { Component, OnInit } from '@angular/core';
import { AccountService } from '../AppServicess/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model :any ={}
  LoginStatus :boolean

  constructor(private accountService :  AccountService) { }

  ngOnInit(): void {
  }

  Login(){
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response)
      this.LoginStatus=true
    },error =>{
      console.log(error)
    })
  }

  Logout(){
    this.LoginStatus=false
  }

}
