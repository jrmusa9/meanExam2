import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {QandAService} from './../qand-a.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  session = this._QandAService.session


  question = {
    question:'',
    description:'',
    _userId:''
  }

  constructor(
    private _QandAService: QandAService,
    private _router: Router
  ) { }

  newQuestion(){
    this.question._userId = this.session
    this._QandAService.createQuestion(this.question) 
    .then(data => {
      console.log('BACK AT CREATE, and getting question', data)
      // this._pollService.questions = data;
      this._router.navigateByUrl(`dashboard`)
    })
    .catch(err => {
      console.log(err)
    })

    
  }

  goBack(){
    this._router.navigateByUrl(`/dashboard`)
  }

  ngOnInit() {
    if(this._QandAService.session == null){
      this._router.navigateByUrl('/')
    }
  }
}
