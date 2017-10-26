import { Component, OnInit } from '@angular/core';
import {QandAService} from './../qand-a.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _QandAService: QandAService,
    private _router: Router
  ) { }
  
  session = [this._QandAService.session]
  questions;
  allUsers;




  // getAllUsers(){
  //   this._pollService.getAllUsers()
  //   .then(data => {
  //     this.allUsers = data
  //     console.log("finally!",this.allUsers)
  //   })
  //   .catch(err => console.log(err));
  // }

  // destroy(question){
  //   console.log('sent to destroy', question)
  //   this._pollService.delete(question)
  //   .then(data => {
  //     this.getAllQuestions()
  //   })
  //   .catch(err => console.log(err));
  // }

  getAllQuestions(){
    this._QandAService.getQuestions()
    .then(data => {
      console.log('BACK AT DASHBOARD', data)
      this._QandAService.questions = data
      this.questions = this._QandAService.questions
    })
    .catch(err => console.log(err));
  }

  getOneQuestion(questionId){
    console.log('hola', questionId)
    this._QandAService.getOneQuestion(questionId)
    .then(data => {
      this._QandAService.oneQuestion = data
      this._router.navigateByUrl('/question/'+questionId)
    })
    .catch(err => console.log(err));
  }
  
  goToAnswer(questionId, answerId){

    this._QandAService.getOneQuestion(questionId)
    .then(data => {
      this._QandAService.answer = data
      this._router.navigateByUrl('/question/'+questionId+'/new_answer')
    })
    .catch(err => console.log(err));
  }
    
  
  logOut(){
    this._QandAService.session = null
    this._router.navigateByUrl('/')
  }
  
  ngOnInit() {
    if(this._QandAService.session == null){
      this._router.navigateByUrl('/')
    }
    this.getAllQuestions()

    this._QandAService.getAllAnswers()
    .then(data => {
      this._QandAService.allAnswers = data
    })
    .catch(err => console.log(err));

    this._QandAService.getAllUsers()
    .then(data => {
      this._QandAService.allUsers = data
    })
    .catch(err => console.log(err));
  }
}