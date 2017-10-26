webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>QUESTION</h3>\n<p>DETAIL</p><br><br>\n\n<h1>{{question.question}}</h1>\n<h1>{{question.detail}}</h1>\n\n<form (submit) = 'newAnswer()'>\n    Your Answer:<br><textarea name=\"\" name=\"answer\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]='answer.answer'></textarea><br>\n    Details:<br><textarea name=\"\" name=\"detail\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]='answer.detail'></textarea><br>\n    <input type=\"Submit\" value=\"Create Poll\">\n  </form>\n  <button (click)='cancel()'>Cancel</button>"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qand_a_service__ = __webpack_require__("../../../../../src/app/qand-a.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerComponent = (function () {
    function AnswerComponent(_QandAService, _router) {
        this._QandAService = _QandAService;
        this._router = _router;
        this.session = this._QandAService.session;
        this.question = this._QandAService.oneQuestion;
        this.answer = {
            answer: '',
            detail: '',
            _userId: '',
            _questionId: ''
        };
    }
    AnswerComponent.prototype.newAnswer = function () {
        var _this = this;
        this.answer._userId = this.session;
        this.answer._questionId = this.question._id;
        this._QandAService.createAnswer(this.answer)
            .then(function (data) {
            console.log('BACK AT answer, and getting answer', data);
            _this._router.navigateByUrl("dashboard");
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AnswerComponent.prototype.cancel = function () {
        this._router.navigateByUrl("/dashboard");
    };
    AnswerComponent.prototype.ngOnInit = function () {
        console.log('at answer, question =>', this.question, this.session);
        if (this._QandAService.session == null) {
            this._router.navigateByUrl('/');
        }
    };
    return AnswerComponent;
}());
AnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-answer',
        template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AnswerComponent);

var _a, _b;
//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__create_create_component__["a" /* CreateComponent */] },
    { path: 'question/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */] },
    { path: 'question/:id/new_answer', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__answer_answer_component__["a" /* AnswerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qand_a_service__ = __webpack_require__("../../../../../src/app/qand-a.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__["a" /* AnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__qand_a_service__["a" /* QandAService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>New Question</h3><br><br>\n<form (submit) = 'newQuestion()'>\n    Question:<br><textarea name=\"\" name=\"question\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]='question.question'></textarea><br>\n    Description (optional):<br><textarea name=\"\" name=\"description\" id=\"\" cols=\"30\" rows=\"10\" [(ngModel)]='question.description'></textarea><br>\n    <input type=\"Submit\" value=\"Create Poll\">\n  </form>\n  <button (click)='goBack()' >Cancel</button>\n<br>"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qand_a_service__ = __webpack_require__("../../../../../src/app/qand-a.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = (function () {
    function CreateComponent(_QandAService, _router) {
        this._QandAService = _QandAService;
        this._router = _router;
        this.session = this._QandAService.session;
        this.question = {
            question: '',
            description: '',
            _userId: ''
        };
    }
    CreateComponent.prototype.newQuestion = function () {
        var _this = this;
        this.question._userId = this.session;
        this._QandAService.createQuestion(this.question)
            .then(function (data) {
            console.log('BACK AT CREATE, and getting question', data);
            // this._pollService.questions = data;
            _this._router.navigateByUrl("dashboard");
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    CreateComponent.prototype.goBack = function () {
        this._router.navigateByUrl("/dashboard");
    };
    CreateComponent.prototype.ngOnInit = function () {
        if (this._QandAService.session == null) {
            this._router.navigateByUrl('/');
        }
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateComponent);

var _a, _b;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Hi {{NAME}}</h3>\n<a [routerLink]=\"['/new_question']\" *ngFor='let x of session'>Add a new question</a>\n<a (click)='logOut()'>Log out</a>\n<table>\n  <tr>\n    <th>Question</th>\n    <th></th>\n    <th>Answers</th>\n    <th>Action</th>\n  </tr>\n  <tr  *ngFor='let i of questions' >\n    <td>{{i.question}}<td>\n    <td>{{i._answersId }}<td>\n    <td>\n      <button (click)='getOneQuestion(i._id)'> Show </button>\n      <button (click)='goToAnswer(i._id)'> Answer  </button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__qand_a_service__ = __webpack_require__("../../../../../src/app/qand-a.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_QandAService, _router) {
        this._QandAService = _QandAService;
        this._router = _router;
        this.session = [this._QandAService.session];
    }
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
    DashboardComponent.prototype.getAllQuestions = function () {
        var _this = this;
        this._QandAService.getQuestions()
            .then(function (data) {
            console.log('BACK AT DASHBOARD', data);
            _this._QandAService.questions = data;
            _this.questions = _this._QandAService.questions;
        })
            .catch(function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.getOneQuestion = function (questionId) {
        var _this = this;
        console.log('hola', questionId);
        this._QandAService.getOneQuestion(questionId)
            .then(function (data) {
            _this._QandAService.oneQuestion = data;
            _this._router.navigateByUrl('/question/' + questionId);
        })
            .catch(function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.goToAnswer = function (questionId, answerId) {
        var _this = this;
        this._QandAService.getOneQuestion(questionId)
            .then(function (data) {
            _this._QandAService.answer = data;
            _this._router.navigateByUrl('/question/' + questionId + '/new_answer');
        })
            .catch(function (err) { return console.log(err); });
    };
    DashboardComponent.prototype.logOut = function () {
        this._QandAService.session = null;
        this._router.navigateByUrl('/');
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._QandAService.session == null) {
            this._router.navigateByUrl('/');
        }
        this.getAllQuestions();
        this._QandAService.getAllAnswers()
            .then(function (data) {
            _this._QandAService.allAnswers = data;
        })
            .catch(function (err) { return console.log(err); });
        this._QandAService.getAllUsers()
            .then(function (data) {
            _this._QandAService.allUsers = data;
        })
            .catch(function (err) { return console.log(err); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__qand_a_service__["a" /* QandAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__qand_a_service__["a" /* QandAService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n<form (submit) = 'createUser()'>\n  Your Name: <input type=\"text\" name=\"name\" required minlength=\"3\" [(ngModel)]='user.name' #login='ngModel'>\n  <input type=\"Submit\" value=\"Login\">\n  <span *ngIf='!login.valid && login.dirty'>Name must be 3 characters min</span>\n</form> "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qand_a_service__ = __webpack_require__("../../../../../src/app/qand-a.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_QandAService, _router) {
        this._QandAService = _QandAService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
    }
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        console.log('from login form', this.user);
        this._QandAService.createUser(this.user)
            .then(function (data) {
            _this._QandAService.session = data._id;
            _this._router.navigateByUrl("/dashboard");
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/qand-a.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QandAService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QandAService = (function () {
    function QandAService(_http) {
        this._http = _http;
    }
    //RECEIVES USER FROM LOGIN COMPONENT
    //SENDS REQUEST TO SERVER AND RETURNS DATA TO LOGIN COMPONENT
    QandAService.prototype.createUser = function (user) {
        console.log('at service Create User', user);
        return this._http.post('/users', user)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    QandAService.prototype.createQuestion = function (question) {
        console.log('at service, question', question);
        return this._http.post('/question', question)
            .map(function (response) { return console.log('back from server w questoin', response.json()); })
            .toPromise();
    };
    QandAService.prototype.createAnswer = function (answer) {
        console.log('at service, answer', answer);
        return this._http.post('/answer', answer)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    QandAService.prototype.getQuestions = function () {
        return this._http.get('/getQuestions')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    QandAService.prototype.getOneQuestion = function (questionId) {
        return this._http.get('/getOneQuestion/' + questionId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    QandAService.prototype.getOneAnswer = function (answerId) {
        return this._http.get('/getOneAnswer/' + answerId)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    QandAService.prototype.getAllUsers = function () {
        return this._http.get('/getAllUsers')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    QandAService.prototype.getAllAnswers = function () {
        return this._http.get('/getAllAnswers')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return QandAService;
}());
QandAService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QandAService);

var _a;
//# sourceMappingURL=qand-a.service.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='backHome()'>Home</a>\n<a (click)='logOut()'>Log out</a>\n\n<h3>{{question.question}}</h3>\n<h5>{{question.description}}</h5><span></span>\n\n<div>\n\n</div>\n\n\n\n<button [routerLink]='[\"/dashboard\"]'>Back</button>"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qand_a_service__ = __webpack_require__("../../../../../src/app/qand-a.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = (function () {
    function QuestionComponent(_QandAService, _router) {
        this._QandAService = _QandAService;
        this._router = _router;
        this.session = this._QandAService.session;
        this.question = this._QandAService.oneQuestion;
    }
    QuestionComponent.prototype.goBack = function () {
        this._router.navigateByUrl("/dashboard");
    };
    QuestionComponent.prototype.ngOnInit = function () {
        console.log('this is question at Question', this.question);
        this.answer = this._QandAService.answer;
        console.log('one answer', this._QandAService.answer);
        this.allUsers = this._QandAService.allUsers;
        if (this._QandAService.session == null) {
            this._router.navigateByUrl('/');
        }
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__qand_a_service__["a" /* QandAService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], QuestionComponent);

var _a, _b;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name) {
        if (name === void 0) { name = ''; }
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map