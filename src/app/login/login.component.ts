declare var google:any;

import { Component, OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '61336823906-r13v01jnorokhr1h3me2u005g1f94n45.apps.googleusercontent.com',
      callback: (resp: any)=> this.handleLogin(resp),
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 300
    })
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleLogin(response:any){
      if(response){
        //decode token here
        const payLoad=this.decodeToken(response.credential);
        //store in session navigate to browse page
        sessionStorage.setItem("loggedUser",JSON.stringify(payLoad));
        this.router.navigate(['browse'])
      }
  }

}
