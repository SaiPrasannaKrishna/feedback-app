import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private _route:Router){
        
    }
    canActivate():boolean | Observable<boolean> | Promise<boolean>
    {
        if(localStorage.getItem('isLoggedIn'))
        {
        return true;
        }
        else{
            this._route.navigate(['/login']);
        }
    }
}