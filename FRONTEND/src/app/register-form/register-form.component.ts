import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { AccountService } from '../AppServicess/account.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  model:any={};
  @Output() CancelRegister=new EventEmitter()

  constructor(private service:AccountService,private toastservice :ToastrService) { }

  ngOnInit(): void {
  }

  Register(){
    this.service.Register(this.model).subscribe(response=>{
      this.Cancel()
    },error=>{
      this.toastservice.error(error.error)
    })
  }

  Cancel(){
    this.CancelRegister.emit(false);
  }

}
