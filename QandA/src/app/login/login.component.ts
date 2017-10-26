import { Component, OnInit } from '@angular/core';
import {User} from './../user'
import {QandAService} from './../qand-a.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user = new User();

  constructor(
    private _QandAService:QandAService,
    private _router:Router
  ) { }


  createUser(){
    console.log('from login form',this.user)
    this._QandAService.createUser(this.user)
    .then(data => {
      this._QandAService.session = data._id;
      this._router.navigateByUrl(`/dashboard`)
    })
    .catch(err => console.log(err));

  }


  ngOnInit() {
  }

}
