import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {QandAService} from './../qand-a.service'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  session = this._QandAService.session
  question = this._QandAService.oneQuestion
  answer;
  allUsers;


  constructor(
    private _QandAService: QandAService,
    private _router: Router
  ) { }


  goBack(){
    this._router.navigateByUrl(`/dashboard`)
  }

  ngOnInit() {
    console.log('this is question at Question', this.question)
    this.answer = this._QandAService.answer
    console.log('one answer', this._QandAService.answer)
    this.allUsers = this._QandAService.allUsers
    if(this._QandAService.session == null){
      this._router.navigateByUrl('/')
    }
  }
}
  