import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ActivatedRouteSnapshot,Router} from '@angular/router';
import { FormControl,FormGroupDirective,Validators,NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading:boolean =false;
  constructor(private _router:Router, private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  login(f){
    this.isLoading = true;
    const email = f.username;
    const password = f.password;
    localStorage.setItem('isLoggedIn', 'true');
    // this._auth.signIn(email,password);
    setTimeout(()=>{
    this.snackBar.open(`Welcome ${f.username}`,'',{
      duration:1000 ,
    });
    this._router.navigate(['dashboard/home']);
    },3000);
  }
}
