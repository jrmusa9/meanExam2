import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {CreateComponent} from './create/create.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {AnswerComponent} from './answer/answer.component'
import {QuestionComponent} from './question/question.component'

const routes: Routes = [
  {path:'', pathMatch:'full', component:LoginComponent},
  {path:'dashboard', pathMatch:'full', component:DashboardComponent},
  {path:'new_question', pathMatch:'full', component:CreateComponent},
  {path:'question/:id', pathMatch:'full', component:QuestionComponent},
  {path:'question/:id/new_answer', pathMatch:'full', component:AnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
