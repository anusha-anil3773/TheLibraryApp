import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  constructor(
    public _auth:AuthService,
    private _router:Router){

}
  loggedUser()
{
  this._router.navigate(['/add'])
}
}
