import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  

  constructor(public accountService :  AccountService, private route :Router
    ,private toastservice : ToastrService) { }

  ngOnInit(): void {

  }


  Login(){
    this.accountService.Login(this.model).subscribe(response=>{
      this.route.navigateByUrl("/members")
    },error =>{
      this.toastservice.error(error.error)
    })
  }

  Logout(){
    this.accountService.Logout();
    this.route.navigateByUrl("/")
  }

 
}
