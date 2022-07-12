import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userID: string = "";
  password: string = "";

  autenticato: boolean = true;

  errorMsg: string = "Spiacente, la user Id e/o la password sono errati!";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userID);

    if(this.userID=="Loris" && this.password=="123_Stella"){
      this.route.navigate(['welcome', this.userID]);

      this.autenticato = true;
    } else {
      this.autenticato = false;
    }

}
}
