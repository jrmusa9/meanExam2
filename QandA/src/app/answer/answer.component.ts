import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {QandAService} from './../qand-a.service'


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

session = this._QandAService.session
question = this._QandAService.oneQuestion


  answer = {
    answer:'',
    detail:'',
    _userId:'',
    _questionId:''
  }

  constructor(
    private _QandAService: QandAService,
    private _router: Router
  ) { }

  
  
  newAnswer(){
    this.answer._userId = this.session
    this.answer._questionId = this.question._id
    this._QandAService.createAnswer(this.answer) 
    .then(data => {
      console.log('BACK AT answer, and getting answer', data)
      this._router.navigateByUrl(`dashboard`)
    })
    .catch(err => {
      console.log(err)
    })
  }


  cancel(){
    this._router.navigateByUrl(`/dashboard`)
  }

  ngOnInit() {
    console.log('at answer, question =>', this.question, this.session)
    if(this._QandAService.session == null){
      this._router.navigateByUrl('/')
    }
  }
}
