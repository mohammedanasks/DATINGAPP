import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public validationerror :string []=[] 

  private BaseUARL="https://localhost:5001/api/" ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public Get404Error(){
    this.http.get(this.BaseUARL+"bugg/not-found").subscribe(respons=>{
      console.log(respons);
    },error=>{
      console.log(error);
    })
  }

  public Get500Error(){
    this.http.get(this.BaseUARL+"bugg/server-error").subscribe(respons=>{
      console.log(respons);
    },error=>{
      console.log(error);
    })
  }

  public Get401Error(){
    this.http.get(this.BaseUARL+"bugg/auth").subscribe(respons=>{
      console.log(respons);
    },error=>{
      console.log(error);
    })
  }

  public Get400Error(){
    this.http.get(this.BaseUARL+"bugg/bad-request").subscribe(respons=>{
      console.log(respons);
    },error=>{
      console.log(error);
    })
  }

  public Get404ValidationError(){
    this.http.get(this.BaseUARL+"accout/register",{}).subscribe(respons=>{
      console.log(respons);
    },error=>{
      this.validationerror=error;
    })
  }

}
