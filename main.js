(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _authService_authGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../authService/authGuard */ "./src/authService/authGuard.ts");







var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_authService_authGuard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"], canActivate: [_authService_authGuard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: ':home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: ':home/:value/:filtertype', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_authService_authGuard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
        ] },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
    { path: 'notfound', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"], data: { errorMessage: 'Not found' } }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/auto-scroll-directive */ "./src/app/directives/auto-scroll-directive.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _authService_authGuard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../authService/authGuard */ "./src/authService/authGuard.ts");
/* harmony import */ var _hiringtrack_hiringtrack_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hiringtrack/hiringtrack.component */ "./src/app/hiringtrack/hiringtrack.component.ts");
/* harmony import */ var _candidatetrack_candidatetrack_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./candidatetrack/candidatetrack.component */ "./src/app/candidatetrack/candidatetrack.component.ts");
/* harmony import */ var _interviewertrack_interviewertrack_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interviewertrack/interviewertrack.component */ "./src/app/interviewertrack/interviewertrack.component.ts");
/* harmony import */ var _newcandidate_newcandidate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./newcandidate/newcandidate.component */ "./src/app/newcandidate/newcandidate.component.ts");
/* harmony import */ var _existingcandidate_existingcandidate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./existingcandidate/existingcandidate.component */ "./src/app/existingcandidate/existingcandidate.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/candidate.service */ "./src/app/services/candidate.service.ts");
/* harmony import */ var _pipes_skillset_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/skillset.pipe */ "./src/app/pipes/skillset.pipe.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedBackComponent"],
                _directives_auto_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["AutoScrollDirective"],
                _hiringtrack_hiringtrack_component__WEBPACK_IMPORTED_MODULE_15__["HiringTrackComponent"],
                _candidatetrack_candidatetrack_component__WEBPACK_IMPORTED_MODULE_16__["CandidateTrackComponent"],
                _interviewertrack_interviewertrack_component__WEBPACK_IMPORTED_MODULE_17__["InterviewerTrackComponent"],
                _newcandidate_newcandidate_component__WEBPACK_IMPORTED_MODULE_18__["NewCandidateComponent"],
                _existingcandidate_existingcandidate_component__WEBPACK_IMPORTED_MODULE_19__["ExistingCandidateComponent"],
                _pipes_skillset_pipe__WEBPACK_IMPORTED_MODULE_22__["SkillSetPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MyOwnCustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].production ? _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__["ServiceWorkerModule"].register('ngsw-worker.js') : []
            ],
            providers: [_authService_authGuard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_candidate_service__WEBPACK_IMPORTED_MODULE_21__["CandidateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/candidatetrack/candidatetrack.component.css":
/*!*************************************************************!*\
  !*** ./src/app/candidatetrack/candidatetrack.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width:700px){\r\n    mat-card-content{\r\n        margin-top:6%;\r\n    }\r\n}\r\n.rating {\r\n    unicode-bidi: bidi-override;\r\n    direction: rtl;\r\n  }\r\nmat-icon:hover{\r\n  color:#86bc25;\r\n  }\r\nmat-icon:hover::after{\r\n    color:#86bc25;\r\n    }\r\n.mat-icon-star{\r\n    color:#86bc25;\r\n  }"

/***/ }),

/***/ "./src/app/candidatetrack/candidatetrack.component.html":
/*!**************************************************************!*\
  !*** ./src/app/candidatetrack/candidatetrack.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n        <mat-card-header>\r\n            Feedback Form\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 col-lg-3 col-xs-1\">\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-10\">\r\n                <div class=\"example-container\">\r\n                  <form class=\"example-container\" #f=\"ngForm\" (ngSubmit)=\"submitCandidate(f.value)\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Candidate Name\" required \r\n                      id=\"candidateName\" name=\"candidate.name\" [(ngModel)]=\"candidate.name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Job Id\" required\r\n                        id=\"jobId\" name=\"jobId\" ScrollDirective  [(ngModel)]=\"jobId\">\r\n                      </mat-form-field>\r\n                    <mat-form-field>\r\n                      <textarea matInput placeholder=\"Feedback\" id=\"feedbackId\"\r\n                      name=\"feedbackId\"\r\n                      [(ngModel)]=\"feedbackId\"></textarea>\r\n                    </mat-form-field>\r\n                  \r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Entity\" [(ngModel)]=\"candidate.entity\" \r\n                      name=\"candidate.entity\" id=\"entityId\">\r\n                        <mat-option value=\"XYZ\">XYZ</mat-option>\r\n                        <mat-option value=\"XYZ2\">XYZ2</mat-option>\r\n                        <mat-option value=\"XYZ3\">XYZ3</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Interview Level\" [(ngModel)]=\"candidate.level\" \r\n                        name=\"candidate.level\" id=\"entityId\">\r\n                          <mat-option value=\"Versant\">Versant</mat-option>\r\n                          <mat-option value=\"Level1\">Level1</mat-option>\r\n                          <mat-option value=\"Level2\">Level2</mat-option>\r\n                          <mat-option value=\"Level3\">Level3</mat-option>\r\n                          <mat-option value=\"Level4\">Level4</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    <ng-select [items]=\"skills\"\r\n                   bindLabel=\"name\"\r\n                   bindValue=\"name\"\r\n                   name=\"selectedSkills\"\r\n                   [addTag]=\"addCustomSkill\"\r\n                   [multiple]=\"true\"\r\n                   [(ngModel)] =\"selectedSkills\"\r\n                   placeholder=\"Select skills\">\r\n                    </ng-select>                    \r\n\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Location\" [(ngModel)]=\"candidate.location\"\r\n                        name=\"candidate.location\" id=\"locationId\">\r\n                          <mat-option value=\"Hyderabad\"> Hyderabad</mat-option>\r\n                          <mat-option value=\"Mumbai\">Mumbai</mat-option>\r\n                          <mat-option value=\"Delhi\">Delhi</mat-option>\r\n                          <mat-option value=\"Bangalore\">Bangalore</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    <p>Rating</p>\r\n                    <div class=\"rating-icon\">\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar == 1 || selectedStar == 2 || selectedStar ==3 || selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 1;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar == 2 || selectedStar ==3 || selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 2;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar ==3 || selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 3;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 4;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':selectedStar == 5}\" (click)=\"selectedStar = 5;starSelected = false;\">star</mat-icon>\r\n                  </div><br/><br/>\r\n                  <button mat-raised-button color=\"primary\" \r\n                   id=\"feedback-button\"\r\n                  [disabled]=\"!f.valid\"\r\n                  style=\"color:black;\">Submit</button>\r\n                </form></div>\r\n                </div>\r\n            <div class=\"col-md-3 col-lg-3 col-xs-1\">\r\n              \r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>"

/***/ }),

/***/ "./src/app/candidatetrack/candidatetrack.component.ts":
/*!************************************************************!*\
  !*** ./src/app/candidatetrack/candidatetrack.component.ts ***!
  \************************************************************/
/*! exports provided: CandidateTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateTrackComponent", function() { return CandidateTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidateTrackComponent = /** @class */ (function () {
    function CandidateTrackComponent(snackBar) {
        this.snackBar = snackBar;
        this.skills = [
            { id: 1, name: 'JAVA' },
            { id: 2, name: 'C' },
            { id: 3, name: 'CPP' },
            { id: 4, name: 'JAVASCRIPT' },
            { id: 5, name: 'BIGDATA' },
            { id: 6, name: 'RPA' },
            { id: 7, name: 'CSS' },
            { id: 8, name: 'HTML' },
            { id: 9, name: 'FRONTENDDEV' },
            { id: 10, name: 'C#' },
            { id: 11, name: 'DOT NET' },
            { id: 12, name: 'UIPATH' },
            { id: 13, name: 'UX/UI' },
            { id: 14, name: 'Excel' },
            { id: 15, name: 'PDF' },
            { id: 16, name: 'Selenium' },
            { id: 17, name: 'Cloud' },
            { id: 18, name: 'AI' },
        ];
    }
    CandidateTrackComponent.prototype.ngOnInit = function () {
    };
    CandidateTrackComponent.prototype.submitCandidate = function (f) {
        this.snackBar.open("Success!", '', {
            duration: 1000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('candidate'),
        __metadata("design:type", Object)
    ], CandidateTrackComponent.prototype, "candidate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedstar'),
        __metadata("design:type", Object)
    ], CandidateTrackComponent.prototype, "selectedStar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedskills'),
        __metadata("design:type", Object)
    ], CandidateTrackComponent.prototype, "selectedSkills", void 0);
    CandidateTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidatetrack',
            template: __webpack_require__(/*! ./candidatetrack.component.html */ "./src/app/candidatetrack/candidatetrack.component.html"),
            styles: [__webpack_require__(/*! ./candidatetrack.component.css */ "./src/app/candidatetrack/candidatetrack.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], CandidateTrackComponent);
    return CandidateTrackComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  color:red;\r\n}\r\n\r\nmat-tab{\r\n  width:50%;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.icons{\r\n  flex:0.1;\r\n  outline: none;\r\n}\r\n\r\nmat-icon{\r\n  font-size:40px;\r\n  color:black;\r\n  cursor: pointer;\r\n}\r\n\r\nmat-form-field{\r\n  padding-left: 2%;\r\n  color: black;\r\n}\r\n\r\n.log-off{\r\n  cursor: pointer;\r\n}\r\n\r\nspan{\r\n  color: black;\r\n}\r\n\r\n@media only screen and (max-width:960px){\r\n  mat-icon{\r\n    font-size:25px;\r\n    color: black;\r\n  }\r\n  mat-form-field{\r\n    display: none;\r\n   color: black;\r\n    \r\n  }\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span id=\"title\"></span>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span [routerLink]=\"['home']\"  title=\"home\" class=\"icons\"><mat-icon>home</mat-icon></span>\n    <span (click)=\"feedback()\" title=\"Feedback\" class=\"icons\"><mat-icon>create</mat-icon></span>\n    <mat-form-field>\n        <mat-select [(value)]=\"selected\">\n          <mat-option>None</mat-option>\n          <mat-option value=\"entity\">Entity</mat-option>\n          <mat-option value=\"name\">Name</mat-option>\n          <mat-option value=\"skills\">skills</mat-option>\n          <mat-option value=\"level\">level</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"example-form-field\">\n        <input matInput type=\"text\" placeholder=\"\" [(ngModel)]=\"value\">\n        <button mat-button  matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"search(value,selected)\">\n          <mat-icon>search</mat-icon>\n        </button>\n      </mat-form-field>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span (click)=\"logoff()\" title=\"logout\" class=\"icons\"   style=\"float:right;\"><mat-icon>power_settings_new</mat-icon></span>\n  </mat-toolbar>\n<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/candidate.service */ "./src/app/services/candidate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, activateroute, _custSer) {
        this.route = route;
        this.activateroute = activateroute;
        this._custSer = _custSer;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.login = function () {
        alert('asfasfasf');
    };
    DashboardComponent.prototype.feedback = function () {
        this._custSer.navigateCandidate({ sno: 0, level: 'Level0', isExisting: false });
        this.route.navigate(['feedback']);
    };
    DashboardComponent.prototype.logoff = function () {
        localStorage.removeItem('isLoggedIn');
        this.route.navigate(['login']);
    };
    DashboardComponent.prototype.dashboard = function () {
        this.route.navigate(['subdashboard']);
    };
    DashboardComponent.prototype.search = function (value, selected) {
        this.route.navigate(['/dashboard/home', value, selected]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_candidate_service__WEBPACK_IMPORTED_MODULE_2__["CandidateService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/datalayer/candidates.ts":
/*!*****************************************!*\
  !*** ./src/app/datalayer/candidates.ts ***!
  \*****************************************/
/*! exports provided: candidateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "candidateList", function() { return candidateList; });
var candidateList = [
    {
        sno: 1,
        name: 'Rama Krishna',
        skills: 'java,sql,css',
        level: "Level1",
        rejectedLevel: "Level3",
        entity: 'XYZ',
        location: 'Hyderabad',
        latitude: 17.387140,
        longitude: 78.491684,
        hiringeventData: '02/02/2018'
    },
    {
        sno: 2,
        name: 'Sam',
        skills: 'java,sql,testing',
        level: "Level1",
        rejectedLevel: "None",
        entity: 'XYZ',
        location: 'Hyderabad',
        latitude: 17.387140,
        longitude: 78.491684,
        hiringeventData: '03/02/2018'
    },
    {
        sno: 3,
        name: 'Catherine',
        skills: 'java,sq,selenium',
        level: "Level2",
        rejectedLevel: "Level3",
        entity: 'XYZ',
        location: 'Hyderabad',
        latitude: 17.387140,
        longitude: 78.491684,
        hiringeventData: '04/02/2018'
    },
    {
        sno: 4,
        name: 'Jonathan',
        skills: 'javascript,sql',
        level: "Level1",
        rejectedLevel: "Level3",
        entity: 'XYZ',
        location: 'Hyderabad',
        latitude: 17.387140,
        longitude: 78.491684,
        hiringeventData: '02/02/2018'
    },
    {
        sno: 5,
        name: 'Krish',
        skills: 'dot net,sql',
        level: "Level4",
        rejectedLevel: "None",
        entity: 'XYZ',
        location: 'Mumbai',
        latitude: 19.07283,
        longitude: 72.88261,
        hiringeventData: '02/02/2018'
    },
    { sno: 6, name: 'Sid', skills: 'salesforce,sql', level: "Level1", rejectedLevel: "Level3", entity: 'XYZ', location: 'Mumbai', latitude: 19.07283, longitude: 72.88261, hiringeventData: '02/02/2018' },
    { sno: 7, name: 'Rao', skills: 'datascript,sql', level: "Level2", rejectedLevel: "Level3", entity: 'XYZ', location: 'Delhi', latitude: 28.7041, longitude: 77.1025, hiringeventData: '02/02/2018' },
    { sno: 8, name: 'Raj', skills: 'c++,java,sql', level: "Level3", rejectedLevel: "None", entity: 'XYZ', location: 'Bangalore', latitude: 12.9716, longitude: 77.5946, hiringeventData: '02/02/2018' },
    { sno: 9, name: 'Sow', skills: 'java,sql', level: "Level1", rejectedLevel: "None", entity: 'XYZ', location: 'Mumbai', latitude: 19.07283, longitude: 72.88261, hiringeventData: '02/02/2018' },
    { sno: 10, name: 'Kris', skills: 'java,sql', level: "Level2", rejectedLevel: "Level3", entity: 'XYZ', location: 'Bangalore', latitude: 12.9716, longitude: 77.5946, hiringeventData: '02/02/2018' },
    { sno: 11, name: 'Eman', skills: 'java,sql', level: "Level1", rejectedLevel: "None", entity: 'XYZ', location: 'Mumbai', latitude: 19.07283, longitude: 72.88261, hiringeventData: '02/02/2018' },
    { sno: 12, name: 'James', skills: 'java,sql', level: "Level2", rejectedLevel: "Level3", entity: 'XYZ', location: 'Mumbai', latitude: 19.07283, longitude: 72.88261, hiringeventData: '02/02/2018' },
    { sno: 13, name: 'Raq', skills: 'java,sql', level: "Level3", rejectedLevel: "None", entity: 'XYZ', location: 'Bangalore', latitude: 12.9716, longitude: 77.5946, hiringeventData: '02/02/2018' },
    { sno: 14, name: 'Lal', skills: 'java,sql', level: "Level4", rejectedLevel: "None", entity: 'XYZ', location: 'Mumbai', latitude: 19.07283, longitude: 72.88261, hiringeventData: '02/02/2018' },
    { sno: 15, name: 'Manav', skills: 'java,sql', level: "None", rejectedLevel: "None", entity: 'XYZ', location: 'Delhi', latitude: 28.7041, longitude: 77.1025, hiringeventData: '02/02/2018' },
    { sno: 16, name: 'Nih', skills: 'java,sql', level: "None", rejectedLevel: "None", entity: 'XYZ', location: 'Pune', latitude: 28.7041, longitude: 77.1025, hiringeventData: '02/02/2018' },
    { sno: 17, name: 'Varun', skills: 'java,sql', level: "Level1", rejectedLevel: "Level3", entity: 'XYZ', location: 'Bangalore', latitude: 12.9716, longitude: 77.5946, hiringeventData: '02/02/2018' }
];


/***/ }),

/***/ "./src/app/datalayer/levels.ts":
/*!*************************************!*\
  !*** ./src/app/datalayer/levels.ts ***!
  \*************************************/
/*! exports provided: Levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels", function() { return Levels; });
var Levels;
(function (Levels) {
    Levels[Levels["Level0"] = 20] = "Level0";
    Levels[Levels["Level1"] = 40] = "Level1";
    Levels[Levels["Level2"] = 60] = "Level2";
    Levels[Levels["Level3"] = 61] = "Level3";
    Levels[Levels["Level4"] = 80] = "Level4";
    Levels[Levels["None"] = 0] = "None";
})(Levels || (Levels = {}));


/***/ }),

/***/ "./src/app/directives/auto-scroll-directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/auto-scroll-directive.ts ***!
  \*****************************************************/
/*! exports provided: AutoScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScrollDirective", function() { return AutoScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoScrollDirective = /** @class */ (function () {
    function AutoScrollDirective(_e1, r) {
        this._e1 = _e1;
        this.r = r;
        var height = this._e1.nativeElement.scrollHeight;
    }
    AutoScrollDirective.prototype.ngOnInit = function () {
        // Use renderer to render the emelemt with styles
    };
    AutoScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[autoScrollDirective]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], AutoScrollDirective);
    return AutoScrollDirective;
}());



/***/ }),

/***/ "./src/app/existingcandidate/existingcandidate.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/existingcandidate/existingcandidate.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-default>.panel-heading{\r\n  color:white;\r\n  background-color:#86bc25;\r\n  border:none;\r\n}\r\n.panel-default {\r\n  border-color: #86bc25;\r\n}\r\n.mat-icon-star{\r\n  color:#86bc25;\r\n}"

/***/ }),

/***/ "./src/app/existingcandidate/existingcandidate.component.html":
/*!********************************************************************!*\
  !*** ./src/app/existingcandidate/existingcandidate.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"existing-candidate container\" style=\"padding-top:5%;\">\n    <div class=\"row\" style=\"overflow-y:none;\">\n      <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-11 offset-xs-1\" \n      *ngFor=\"let item of existingFeedback\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\"><b>{{item.level}}</b></div>\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                  <p><b>Feedback:</b></p>\n                  <p><b>JobId:</b></p>\n                  <p><b>InterviewerName:</b></p>\n                  <p><b>rating:</b></p>\n                  \n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                  <p>{{item.feedback}}</p>\n                  <p>{{item.jobId}}</p>\n                  <p>{{item.interviewerName}}</p>\n                  <div class=\"rating-icon\">\n                      <mat-icon [ngClass]=\"{'mat-icon-star':(item.rating == 1 || item.rating == 2 || item.rating ==3 || item.rating == 4 || item.rating == 5)}\">star</mat-icon>\n                      <mat-icon [ngClass]=\"{'mat-icon-star':(item.rating == 2 || item.rating ==3 || item.rating == 4 || item.rating == 5)}\">star</mat-icon>\n                      <mat-icon [ngClass]=\"{'mat-icon-star':(item.rating ==3 || item.rating == 4 || item.rating == 5)}\">star</mat-icon>\n                      <mat-icon [ngClass]=\"{'mat-icon-star':(item.rating == 4 || item.rating == 5)}\">star</mat-icon>\n                      <mat-icon [ngClass]=\"{'mat-icon-star':item.rating == 5}\">star</mat-icon>\n                    </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/existingcandidate/existingcandidate.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/existingcandidate/existingcandidate.component.ts ***!
  \******************************************************************/
/*! exports provided: ExistingCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingCandidateComponent", function() { return ExistingCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExistingCandidateComponent = /** @class */ (function () {
    function ExistingCandidateComponent() {
    }
    ExistingCandidateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('existingfeedback'),
        __metadata("design:type", Object)
    ], ExistingCandidateComponent.prototype, "existingFeedback", void 0);
    ExistingCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-existingcandidate',
            template: __webpack_require__(/*! ./existingcandidate.component.html */ "./src/app/existingcandidate/existingcandidate.component.html"),
            styles: [__webpack_require__(/*! ./existingcandidate.component.css */ "./src/app/existingcandidate/existingcandidate.component.css")]
        })
    ], ExistingCandidateComponent);
    return ExistingCandidateComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n mat-card-header{\r\n  font-size: 20px;\r\n  font-family: unset;\r\n  color:#86bc25;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.selected-stage{\r\n  overflow-x: hidden;\r\n  margin-top: 10%;\r\n  margin-bottom: 2%;\r\n  \r\n}\r\n\r\n.selected-stage mat-icon{\r\n  font-size:125px;\r\n  }\r\n\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width:900px){\r\n  mat-card-header{\r\n    padding-bottom: 0px;\r\n  }\r\n  .selected-stage .row{\r\n    margin:0 2%;\r\n  }\r\n  .selected-stage mat-icon{\r\n    font-size:75px;\r\n    }\r\n}\r\n\r\n.stage-names span{\r\n  margin-left: 20%;\r\n  color:white;\r\n}\r\n\r\n.circle-stage{\r\n  border-radius: 50%;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    padding: 33%;\r\n    background: #000;\r\n}\r\n\r\nmat-icon{\r\n  font-size:6px;\r\n}\r\n\r\n.rating-icon mat-icon{\r\n  font-size:18px;\r\n}\r\n\r\n.highlight{\r\n color: #86bc25;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n  background-color:   #86bc25EB!important;  \r\n}\r\n\r\n::ng-deep .mat-progress-bar-buffer {\r\n  background: #424242!important;\r\n}\r\n\r\n::ng-deep .mat-progress-bar {\r\n  border-radius: 2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group  mat-stretch-tabs=\"always\" [selectedIndex]=\"selectedTab\">\n    <mat-tab label=\"Candidate Hiring Track\">\n    <app-hiringtrack [selectedstage]=\"selectedStage\"></app-hiringtrack>\n    </mat-tab>\n    <mat-tab label=\"Candidate Details\">\n      <app-candidatetrack\n       *ngIf=\"!newCandidate && !!candidate\"\n       [candidate]=\"candidate\"\n       [selectedstar]=\"selectedStar\"\n       [selectedskills]=\"selectedSkills\">\n      </app-candidatetrack>\n      <app-newcandidate\n       *ngIf=\"newCandidate\">\n      </app-newcandidate>\n    </mat-tab>\n    <mat-tab label=\"Interviewer Details\">\n      <app-interviewertrack></app-interviewertrack>\n    </mat-tab>\n    <mat-tab label=\"Candidate Feedback\" [disabled]=\"!existingCandidate\"> \n        <app-existingcandidate [existingfeedback]=\"existingFeedback\"></app-existingcandidate>\n    </mat-tab>\n  </mat-tab-group>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackComponent", function() { return FeedBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _datalayer_levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datalayer/levels */ "./src/app/datalayer/levels.ts");
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/candidate.service */ "./src/app/services/candidate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedBackComponent = /** @class */ (function () {
    function FeedBackComponent(_route, route, _candService) {
        this._route = _route;
        this.route = route;
        this._candService = _candService;
        this.selectedTab = 0;
        this.selectedSkills = new Array();
        this.starSelected = false;
        this.newCandidate = false;
        this.isFeedbackSubmitted = false;
        this.selectedStage = 0;
        this.maxStage = 80;
        this.existingCandidate = false;
        this.addCustomSkill = function (term) { return ({ id: term, name: term }); };
    }
    FeedBackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackSubscription = this._candService.currentMessage.subscribe(function (data) {
            if (!!data.sno && data.isExisting) {
                _this.existingCandidate = true;
                if (!!data.level) {
                    _this.maxStage = _datalayer_levels__WEBPACK_IMPORTED_MODULE_4__["Levels"][data.level];
                }
                _this.getCandidateDetails(data.sno);
                _this.getCandidateFeedback(data.sno);
            }
            else {
                _this.newCandidate = true;
                _this.existingCandidate = false;
                _this.selectedStage = 100;
            }
        });
        var stageInit = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(500);
        this.intervalSubscription = stageInit.subscribe(function () {
            if (_this.selectedStage >= _this.maxStage) {
            }
            else {
                _this.selectedStage += 20;
            }
        });
    };
    FeedBackComponent.prototype.ngOnDestroy = function () {
        this.intervalSubscription.unsubscribe();
        this.feedbackSubscription.unsubscribe();
    };
    FeedBackComponent.prototype.checkValidity = function (f) {
        return true;
    };
    FeedBackComponent.prototype.getCandidateDetails = function (userId) {
        var _this = this;
        this._candService.getCandidates().subscribe(function (data) {
            _this.candidateLists = data;
            _this.candidate = _this.candidateLists.filter(function (x) { return x.sno == userId; })[0];
            _this.selectedSkills = _this.candidate.skills.split(',');
        });
    };
    FeedBackComponent.prototype.getCandidateFeedback = function (userId) {
        var _this = this;
        this._candService.getFeedback().subscribe(function (data) {
            _this.feedbackLists = data;
            _this.existingFeedback = _this.feedbackLists.filter(function (x) { return x.sno == userId; });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], FeedBackComponent.prototype, "form", void 0);
    FeedBackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_candidate_service__WEBPACK_IMPORTED_MODULE_5__["CandidateService"]])
    ], FeedBackComponent);
    return FeedBackComponent;
}());



/***/ }),

/***/ "./src/app/hiringtrack/hiringtrack.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hiringtrack/hiringtrack.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n mat-card-header{\r\n    font-size: 20px;\r\n    font-family: unset;\r\n    color:#86bc25;\r\n    padding-bottom: 25px;\r\n  }\r\n  \r\n  .selected-stage{\r\n    overflow-x: hidden;\r\n    margin-top: 10%;\r\n    margin-bottom: 2%;\r\n    \r\n  }\r\n  \r\n  .selected-stage mat-icon{\r\n    font-size:125px;\r\n    }\r\n  \r\n  .example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .rating {\r\n    unicode-bidi: bidi-override;\r\n    direction: rtl;\r\n  }\r\n  \r\n  mat-icon:hover{\r\n  color:#86bc25;\r\n  }\r\n  \r\n  mat-icon:hover::after{\r\n    color:#86bc25;\r\n    }\r\n  \r\n  .mat-icon-star{\r\n    color:#86bc25;\r\n  }\r\n  \r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  @media screen and (max-width:900px){\r\n    mat-card-header{\r\n      padding-bottom: 0px;\r\n    }\r\n    .selected-stage .row{\r\n      margin:0 2%;\r\n    }\r\n    .selected-stage mat-icon{\r\n      font-size:75px;\r\n      }\r\n  }\r\n  \r\n  .stage-names span{\r\n    margin-left: 20%;\r\n    color:white;\r\n  }\r\n  \r\n  .circle-stage{\r\n    border-radius: 50%;\r\n      font-size: 20px;\r\n      color: #fff;\r\n      padding: 33%;\r\n      background: #000;\r\n  }\r\n  \r\n  mat-icon{\r\n    font-size:6px;\r\n  }\r\n  \r\n  .rating-icon mat-icon{\r\n    font-size:18px;\r\n  }\r\n  \r\n  .highlight{\r\n   color: #86bc25;\r\n  }\r\n  \r\n  ::ng-deep .mat-progress-bar-fill::after {\r\n    background-color:   #86bc25EB!important;  \r\n  }\r\n  \r\n  ::ng-deep .mat-progress-bar-buffer {\r\n    background: #424242!important;\r\n  }\r\n  \r\n  ::ng-deep .mat-progress-bar {\r\n    border-radius: 2px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/hiringtrack/hiringtrack.component.html":
/*!********************************************************!*\
  !*** ./src/app/hiringtrack/hiringtrack.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <div class=\"selected-stage\">\r\n          <div class=\"row stage-names\">\r\n              <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                </div>\r\n                <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                  <span>Level0</span>\r\n                </div>\r\n                <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                    <span>Level1</span>\r\n                </div>\r\n                <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                    <span>Level2</span>\r\n                </div>\r\n                <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                    <span>Level3</span>\r\n                  </div>\r\n                  <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                  </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n            </div>\r\n            <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                <mat-icon\r\n                [ngClass]=\"{'highlight':(selectedStage == 20 || selectedStage == 40|| selectedStage == 60 || selectedStage == 80)}\">label</mat-icon>\r\n              </div>\r\n              <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                  <mat-icon\r\n                  [ngClass]=\"{'highlight':(selectedStage ==40 || selectedStage ==60 || selectedStage == 80)}\"\r\n                  >label</mat-icon>\r\n              </div>\r\n              <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                  <mat-icon\r\n                  [ngClass] =\"{'highlight': (selectedStage ==60 || selectedStage == 80)} \">label</mat-icon>\r\n              </div>\r\n            <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n                <mat-icon \r\n                [ngClass] =\"{'highlight': (selectedStage ==80)} \">label</mat-icon>\r\n            </div>\r\n              <div class=\"col-md-2 col-lg-2 col-xs-2\">\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <span *ngIf=\"selectedStage < 100\">\r\n        <mat-progress-bar mode=\"determinate\" [value]=\"selectedStage\" [color]=\"warn\"></mat-progress-bar>\r\n      </span>"

/***/ }),

/***/ "./src/app/hiringtrack/hiringtrack.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hiringtrack/hiringtrack.component.ts ***!
  \******************************************************/
/*! exports provided: HiringTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringTrackComponent", function() { return HiringTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiringTrackComponent = /** @class */ (function () {
    function HiringTrackComponent() {
    }
    HiringTrackComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('selectedstage'),
        __metadata("design:type", Object)
    ], HiringTrackComponent.prototype, "selectedStage", void 0);
    HiringTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hiringtrack',
            template: __webpack_require__(/*! ./hiringtrack.component.html */ "./src/app/hiringtrack/hiringtrack.component.html"),
            styles: [__webpack_require__(/*! ./hiringtrack.component.css */ "./src/app/hiringtrack/hiringtrack.component.css")]
        })
    ], HiringTrackComponent);
    return HiringTrackComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  width: 100%;\r\n  height: 50%;\r\n  overflow-x:hidden;\r\n}\r\ntable th{\r\n  font-weight: bold;\r\n}\r\n.mat-header-row{\r\n  background:black;\r\n}\r\n.mat-header-row th{\r\n  color:#86bc25;\r\n}\r\n.mat-row:hover{\r\n  background:black;\r\n  cursor: pointer;\r\n}\r\n.candidate-header{\r\n  margin-left:27%;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 14px;\r\n  margin-bottom: 2%;\r\n}\r\n.example-container {\r\n  height: 100%;\r\n  overflow-y:scroll;\r\n}\r\n@media only screen and (max-width:680px){\r\n  .rejected-level{\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div autoScrollDirective>\n    <div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n            <ng-container matColumnDef=\"sno\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>S.No</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.sno}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Candidate Name</th>\n                    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"skills\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Skills</th>\n                    <td mat-cell *matCellDef=\"let element\">{{element.skills | skillfilter}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"level\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Current Level</th>\n                    <td mat-cell *matCellDef=\"let element\">{{element.level}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"entity\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Entity</th>\n                    <td mat-cell *matCellDef=\"let element\">{{element.entity}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"InterviewDate\">\n                        <th class=\"rejected-level\" mat-header-cell *matHeaderCellDef mat-sort-header>InterviewDate</th>\n                        <td class=\"rejected-level\" mat-cell *matCellDef=\"let element\">{{element.hiringeventData}}</td>\n                </ng-container>\n           \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"existingCandidate(row)\"></tr>\n    </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalayer/candidates */ "./src/app/datalayer/candidates.ts");
/* harmony import */ var _services_candidate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/candidate.service */ "./src/app/services/candidate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, activateroute, _custSer) {
        var _this = this;
        this.route = route;
        this.activateroute = activateroute;
        this._custSer = _custSer;
        this.displayedColumns = ['sno', 'name', 'skills', 'level', 'entity', 'InterviewDate'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"]);
        this.date = Date.now();
        if (!!this.activateroute) {
            this.activateroute.params.subscribe(function (params) {
                _this.searchValue = params.value;
                _this.filterType = params.filtertype;
                if (!!_this.searchValue && !!_this.filterType) {
                    if (_this.searchValue.length > 0 && _this.filterType.length > 0) {
                        _this.filterCandidates(_this.searchValue, _this.filterType);
                    }
                }
            });
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    HomeComponent.prototype.login = function () {
        alert('asfasfasf');
    };
    HomeComponent.prototype.logoff = function () {
        this.route.navigate(['login']);
    };
    HomeComponent.prototype.home = function () {
        this.route.navigate(['home']);
    };
    HomeComponent.prototype.existingCandidate = function (row) {
        this._custSer.navigateCandidate({ sno: row.sno, level: row.level, isExisting: true });
        this.route.navigate(['/dashboard/feedback']);
    };
    HomeComponent.prototype.filterCandidates = function (searchValue, filterType) {
        if (filterType == undefined || filterType.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"]);
            return _datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"];
        }
        else {
            var s = void 0;
            switch (filterType) {
                case 'name':
                    s = _datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"].filter(function (obj) { return obj.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1; });
                    break;
                case 'entity':
                    s = _datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"].filter(function (obj) { return obj.entity.toLowerCase().indexOf(searchValue.toLowerCase()) > -1; });
                    break;
                case 'skills':
                    s = _datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"].filter(function (obj) { return obj.skills.toLowerCase().indexOf(searchValue.toLowerCase()) > -1; });
                    break;
                case 'level':
                    s = _datalayer_candidates__WEBPACK_IMPORTED_MODULE_3__["candidateList"].filter(function (obj) { return obj.level.toLowerCase().indexOf(searchValue.toLowerCase()) > -1; });
                    break;
            }
            if (s.length == 0) {
            }
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](s);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], HomeComponent.prototype, "sort", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_candidate_service__WEBPACK_IMPORTED_MODULE_4__["CandidateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interviewertrack/interviewertrack.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/interviewertrack/interviewertrack.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interviewertrack/interviewertrack.component.html":
/*!******************************************************************!*\
  !*** ./src/app/interviewertrack/interviewertrack.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n        <mat-card-header>\r\n            Details\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 col-lg-3 col-xs-1\">\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-10\">\r\n                <div class=\"example-container\">\r\n                  <form class=\"example-container\" #i=\"ngForm\" (ngSubmit)=\"submitInterviewer(i)\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Interviewer Name\" required \r\n                      id=\"interviewerName\" name=\"name\" [(ngModel)]=\"name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Job Id\" required\r\n                        id=\"jobId\" name=\"jobId\"   [(ngModel)]=\"jobId\">\r\n                      </mat-form-field>\r\n                    \r\n                     <mat-form-field>\r\n                            <input matInput placeholder=\"Designation\" required\r\n                            id=\"designation\" name=\"desgination\"   \r\n                            [(ngModel)]=\"desgination\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Entity\" [(ngModel)]=\"interviewerEntity\" \r\n                      name=\"interviewerEntity\" id=\"interviewerEntity\">\r\n                        <mat-option value=\"XYZ\">XYZ</mat-option>\r\n                        <mat-option value=\"XYZ2\">XYZ2</mat-option>\r\n                        <mat-option value=\"XYZ3\">XYZ3</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                                      \r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Location\" [(ngModel)]=\"location\"\r\n                        name=\"location\" id=\"locationId\">\r\n                          <mat-option value=\"Hyderabad\"> Hyderabad</mat-option>\r\n                          <mat-option value=\"Mumbai\">Mumbai</mat-option>\r\n                          <mat-option value=\"Delhi\">Delhi</mat-option>\r\n                          <mat-option value=\"Bangalore\">Bangalore</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                   <br/><br/>\r\n                  <button mat-raised-button color=\"primary\" \r\n                   id=\"feedback-button\"\r\n                  [disabled]=\"!i.valid\"\r\n                  style=\"color:black;\">Submit</button>\r\n                </form></div>\r\n                </div>\r\n            <div class=\"col-md-3 col-lg-3 col-xs-1\">\r\n              \r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>"

/***/ }),

/***/ "./src/app/interviewertrack/interviewertrack.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/interviewertrack/interviewertrack.component.ts ***!
  \****************************************************************/
/*! exports provided: InterviewerTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewerTrackComponent", function() { return InterviewerTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterviewerTrackComponent = /** @class */ (function () {
    function InterviewerTrackComponent(snackBar) {
        this.snackBar = snackBar;
    }
    InterviewerTrackComponent.prototype.ngOnInit = function () {
    };
    InterviewerTrackComponent.prototype.submitInterviewer = function (f) {
        this.snackBar.open("Success!", '', {
            duration: 1000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('i'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], InterviewerTrackComponent.prototype, "iForm", void 0);
    InterviewerTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interviewertrack',
            template: __webpack_require__(/*! ./interviewertrack.component.html */ "./src/app/interviewertrack/interviewertrack.component.html"),
            styles: [__webpack_require__(/*! ./interviewertrack.component.css */ "./src/app/interviewertrack/interviewertrack.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], InterviewerTrackComponent);
    return InterviewerTrackComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  mat-card {\r\n    max-width: 500px;\r\n    margin: 2em auto;\r\n    text-align: center;\r\n    background: #211f1f;\r\n  }\r\n  span{\r\n      color: black;\r\n  }\r\n  mat-card-header{\r\n    margin-left: 38%;\r\n    font-size: 20px;\r\n    font-family: unset;\r\n    color:#86bc25;\r\n    padding-bottom: 25px;\r\n  }\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  mat-form-field{\r\n      margin-top:5%;\r\n  }\r\n  .signin-content {\r\n    padding: 60px 1rem;\r\n  }\r\n  .full-width-input {\r\n    width: 100%;\r\n  }\r\n  #login-button{\r\n      width: 50%;\r\n      margin-top: 10%;\r\n  }\r\n  #login-button:disabled{\r\n    background:#5f6b48;\r\n  }\r\n  ::ng-deep .mat-progress-bar-fill::after {\r\n    background-color:   #86bc25EB!important;  \r\n  }\r\n  ::ng-deep .mat-progress-bar-buffer {\r\n    background: #424242!important;\r\n  }\r\n  ::ng-deep .mat-progress-bar {\r\n    border-radius: 2px;\r\n  }\r\n \r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span id=\"title\"></span>\n    <span class=\"example-fill-remaining-space\"></span>\n  </mat-toolbar>\n<div *ngIf=\"isLoading\">\n<mat-progress-bar mode=\"indeterminate\" [color]=\"warn\"></mat-progress-bar></div>\n<div class=\"signin-content\">\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    Login \n  </mat-card-header>\n  <mat-card-content>\n      <div class=\"example-container\">\n        <form class=\"example-form\" #f=\"ngForm\" (ngSubmit)=\"login(f.value)\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Username\" \n                            id=\"username\" name=\"username\"\n                            required ngModel #username = \"ngModel\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n              <input type=\"password\" matInput  placeholder=\"Password\"\n                                               id=\"password\" name=\"password\"\n                                               required ngModel #password=\"ngModel\">\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\" \n           id=\"login-button\"\n           [disabled]=\"!f.valid\"\n           style=\"color:black;\">Login</button>\n        </form>\n        </div>\n  </mat-card-content>\n\n</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, snackBar) {
        this._router = _router;
        this.snackBar = snackBar;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (f) {
        var _this = this;
        this.isLoading = true;
        var email = f.username;
        var password = f.password;
        localStorage.setItem('isLoggedIn', 'true');
        // this._auth.signIn(email,password);
        setTimeout(function () {
            _this.snackBar.open("Welcome " + f.username, '', {
                duration: 1000,
            });
            _this._router.navigate(['dashboard/home']);
        }, 3000);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MyOwnCustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOwnCustomMaterialModule", function() { return MyOwnCustomMaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyOwnCustomMaterialModule = /** @class */ (function () {
    function MyOwnCustomMaterialModule() {
    }
    MyOwnCustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"]
            ],
        })
    ], MyOwnCustomMaterialModule);
    return MyOwnCustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/newcandidate/newcandidate.component.css":
/*!*********************************************************!*\
  !*** ./src/app/newcandidate/newcandidate.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newcandidate/newcandidate.component.html":
/*!**********************************************************!*\
  !*** ./src/app/newcandidate/newcandidate.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n        <mat-card-header>\r\n            Feedback Form\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 col-lg-3 col-xs-3\">\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6 col-xs-6\">\r\n                <div class=\"example-container\">\r\n                  <form class=\"example-container\" #f=\"ngForm\" (ngSubmit)=\"submitCandidate(f.value)\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Candidate Name\" required \r\n                      id=\"candidateName\" name=\"name\" [(ngModel)]=\"name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Job Id\" required\r\n                        id=\"jobId\" name=\"jobId\" ScrollDirective  [(ngModel)]=\"jobId\">\r\n                      </mat-form-field>\r\n                    <mat-form-field>\r\n                      <textarea matInput placeholder=\"Feedback\" id=\"feedbackId\"\r\n                      name=\"feedbackId\"\r\n                      [(ngModel)]=\"feedbackId\"></textarea>\r\n                    </mat-form-field>\r\n                  \r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Entity\" [(ngModel)]=\"entity\" \r\n                      name=\"entity\" id=\"entityId\">\r\n                        <mat-option value=\"XYZ\">XYZ</mat-option>\r\n                        <mat-option value=\"XYZ2\">XYZ2</mat-option>\r\n                        <mat-option value=\"XYZ3\">XYZ3</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Interview Level\" [(ngModel)]=\"level\" \r\n                        name=\"level\" id=\"entityId\">\r\n                          <mat-option value=\"Versant\">Versant</mat-option>\r\n                          <mat-option value=\"Level1\">Level1</mat-option>\r\n                          <mat-option value=\"Level2\">Level2</mat-option>\r\n                          <mat-option value=\"Level3\">Level3</mat-option>\r\n                          <mat-option value=\"Level4\">Level4</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    <ng-select [items]=\"skills\"\r\n                   bindLabel=\"name\"\r\n                   bindValue=\"name\"\r\n                   name=\"newskills\"\r\n                   [addTag]=\"addCustomSkill\"\r\n                   [multiple]=\"true\"\r\n                   [(ngModel)] =\"newskills\"\r\n                   placeholder=\"Select skills\">\r\n                    </ng-select>                    \r\n\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Location\" [(ngModel)]=\"location\"\r\n                        name=\"location\" id=\"locationId\">\r\n                          <mat-option value=\"Hyderabad\"> Hyderabad</mat-option>\r\n                          <mat-option value=\"Mumbai\">Mumbai</mat-option>\r\n                          <mat-option value=\"Delhi\">Delhi</mat-option>\r\n                          <mat-option value=\"Bangalore\">Bangalore</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    <p>Rating</p>\r\n                    <div class=\"rating-icon\">\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar == 1 || selectedStar == 2 || selectedStar ==3 || selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 1;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar == 2 || selectedStar ==3 || selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 2;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar ==3 || selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 3;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':(selectedStar == 4 || selectedStar == 5)}\" (click)=\"selectedStar = 4;\">star</mat-icon>\r\n                    <mat-icon [ngClass]=\"{'mat-icon-star':selectedStar == 5}\" (click)=\"selectedStar = 5;starSelected = false;\">star</mat-icon>\r\n                  </div><br/><br/>\r\n                  <button mat-raised-button color=\"primary\" \r\n                   id=\"feedback-button\"\r\n                  [disabled]=\"!f.valid\"\r\n                  style=\"color:black;\">Submit</button>\r\n                </form></div>\r\n                </div>\r\n            <div class=\"col-md-3 col-lg-3 col-xs-3\">\r\n              \r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>"

/***/ }),

/***/ "./src/app/newcandidate/newcandidate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/newcandidate/newcandidate.component.ts ***!
  \********************************************************/
/*! exports provided: NewCandidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCandidateComponent", function() { return NewCandidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewCandidateComponent = /** @class */ (function () {
    function NewCandidateComponent(snackBar) {
        this.snackBar = snackBar;
        this.skills = [
            { id: 1, name: 'JAVA' },
            { id: 2, name: 'C' },
            { id: 3, name: 'CPP' },
            { id: 4, name: 'JAVASCRIPT' },
            { id: 5, name: 'BIGDATA' },
            { id: 6, name: 'RPA' },
            { id: 7, name: 'CSS' },
            { id: 8, name: 'HTML' },
            { id: 9, name: 'FRONTENDDEV' },
            { id: 10, name: 'C#' },
            { id: 11, name: 'DOT NET' },
            { id: 12, name: 'UIPATH' },
            { id: 13, name: 'UX/UI' },
            { id: 14, name: 'Excel' },
            { id: 15, name: 'PDF' },
            { id: 16, name: 'Selenium' },
            { id: 17, name: 'Cloud' },
            { id: 18, name: 'AI' },
        ];
    }
    NewCandidateComponent.prototype.ngOnInit = function () {
    };
    NewCandidateComponent.prototype.submitCandidate = function (f) {
        this.snackBar.open("Updated Details!", '', {
            duration: 1000,
        });
    };
    NewCandidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newcandidate',
            template: __webpack_require__(/*! ./newcandidate.component.html */ "./src/app/newcandidate/newcandidate.component.html"),
            styles: [__webpack_require__(/*! ./newcandidate.component.css */ "./src/app/newcandidate/newcandidate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], NewCandidateComponent);
    return NewCandidateComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/skillset.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/skillset.pipe.ts ***!
  \****************************************/
/*! exports provided: SkillSetPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillSetPipe", function() { return SkillSetPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SkillSetPipe = /** @class */ (function () {
    function SkillSetPipe() {
    }
    SkillSetPipe.prototype.transform = function (value, length) {
        return value;
    };
    SkillSetPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'skillfilter'
        })
    ], SkillSetPipe);
    return SkillSetPipe;
}());



/***/ }),

/***/ "./src/app/services/candidate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/candidate.service.ts ***!
  \***********************************************/
/*! exports provided: CandidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateService", function() { return CandidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CandidateService = /** @class */ (function () {
    function CandidateService(_http) {
        this._http = _http;
        this.messageBus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ sno: 0, level: 'Level0', isExisting: false });
        this.currentMessage = this.messageBus.asObservable();
    }
    CandidateService.prototype.getCandidates = function () {
        return this._http.get('/assets/candidates.json');
    };
    CandidateService.prototype.getFeedback = function () {
        return this._http.get('/assets/feedbackLists.json');
    };
    CandidateService.prototype.navigateCandidate = function (data) {
        this.messageBus.next(data);
    };
    CandidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CandidateService);
    return CandidateService;
}());



/***/ }),

/***/ "./src/authService/authGuard.ts":
/*!**************************************!*\
  !*** ./src/authService/authGuard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(_route) {
        this._route = _route;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLoggedIn')) {
            return true;
        }
        else {
            this._route.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\DeloitteParking\Angular 2\Angular5\blitz\blitz-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map