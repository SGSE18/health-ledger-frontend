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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .hl-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  .hl-is-mobile .hl-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n\n  .hl-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n  }\n\n  .hl-is-mobile .hl-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }\n\n  .hl-toolbar-filler{\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n  .hl-toolbar-icon{\n       margin-right:10px;\n  }\n\n  .mat-drawer-content {\n    padding: 15px;\n  }\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hl-container\">\n\n  <mat-toolbar color=\"primary\" class=\"hl-toolbar\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\" *ngIf=\"this.state.user?.type == 'Patient'\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <span>Health Ledger</span>\n\n    <span class=\"hl-toolbar-filler\"></span>\n\n    <mat-icon class=\"hl-toolbar-icon\" *ngIf=this.state.user>account_circle</mat-icon>\n    <span>\n      {{(this.state.user?.name.length>12)? (this.state.user?.name | slice:0:12)+'..':(this.state.user?.name) }}\n    </span>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=this.state.user>\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"logout()\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span>Ausloggen</span>\n      </button>\n    </mat-menu>\n\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"hl-sidenav-container\">\n    <mat-sidenav #sidenav mode=\"over\" [(opened)]=\"opened\" (click)=\"sidenav.close()\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"./patient-overview\">\n          <mat-icon class=\"hl-toolbar-icon\">folder</mat-icon>Krankenakte</a>\n        <a mat-list-item routerLink=\"./access-requests\">\n          <mat-icon class=\"hl-toolbar-icon\">notifications</mat-icon>Einsichtsanfragen</a>\n        <a mat-list-item routerLink=\"./qr-code\">\n          <mat-icon class=\"hl-toolbar-icon\">gradient</mat-icon>QR-Code</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n\n</div>"

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
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/permission.guard */ "./src/app/guards/permission.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(state) {
        this.state = state;
        this.title = 'app';
        this.name = '';
    }
    Object.defineProperty(AppComponent.prototype, "IsPatient", {
        get: function () {
            return this.state.user.type == "Patient";
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.permissionSmartRecipe = function () {
        return this.itemIsAviableForUser('smart-recipe-overview');
    };
    AppComponent.prototype.permissionDiagnostic = function () {
        return this.itemIsAviableForUser('diagnostics');
    };
    AppComponent.prototype.permissionPatientOverview = function () {
        return this.itemIsAviableForUser('patient-overview');
    };
    AppComponent.prototype.permissionHealthRecordUser = function () {
        return this.itemIsAviableForUser('health-record-user');
    };
    AppComponent.prototype.permissionEmployeeOverview = function () {
        return this.itemIsAviableForUser('employee-overview');
    };
    AppComponent.prototype.permissionAccessRequest = function () {
        return this.itemIsAviableForUser('access-requests');
    };
    AppComponent.prototype.permissionSickNote = function () {
        return this.itemIsAviableForUser('sick-note-overview');
    };
    AppComponent.prototype.permissionQrCode = function () {
        return this.itemIsAviableForUser('qr-code');
    };
    AppComponent.prototype.permissionQrCodeScanner = function () {
        return this.itemIsAviableForUser('qr-code-scanner');
    };
    AppComponent.prototype.permissionLogin = function () {
        if (this.state.user == undefined) {
            return true;
        }
        else {
            if (_guards_permission_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionGuard"].permissions[this.state.user.type.toLowerCase()].includes('smart-recipe-overview'))
                return true;
        }
        return false;
    };
    AppComponent.prototype.itemIsAviableForUser = function (sideBarItem) {
        if (this.state.user == undefined) {
            return false;
        }
        else {
            if (_guards_permission_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionGuard"].permissions[this.state.user.type.toLowerCase()].includes(sideBarItem))
                return true;
        }
        return false;
    };
    AppComponent.prototype.logout = function () {
        this.state.invalidate();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_0__["StateService"]])
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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/esm5/zxing-ngx-scanner.js");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/patient-overview/patient-overview.component */ "./src/app/views/patient-overview/patient-overview.component.ts");
/* harmony import */ var _views_patient_treatment_patient_treatment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/patient-treatment/patient-treatment.component */ "./src/app/views/patient-treatment/patient-treatment.component.ts");
/* harmony import */ var _views_access_request_access_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/access-request/access-request.component */ "./src/app/views/access-request/access-request.component.ts");
/* harmony import */ var _views_access_request_details_user_access_request_details_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/access-request-details-user/access-request-details-user.component */ "./src/app/views/access-request-details-user/access-request-details-user.component.ts");
/* harmony import */ var _views_access_request_details_access_request_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/access-request-details/access-request-details.component */ "./src/app/views/access-request-details/access-request-details.component.ts");
/* harmony import */ var _views_access_request_result_access_request_result_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/access-request-result/access-request-result.component */ "./src/app/views/access-request-result/access-request-result.component.ts");
/* harmony import */ var _views_access_request_result_treatment_access_request_result_treatment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/access-request-result-treatment/access-request-result-treatment.component */ "./src/app/views/access-request-result-treatment/access-request-result-treatment.component.ts");
/* harmony import */ var _views_access_request_treatment_editor_access_request_treatment_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/access-request-treatment-editor/access-request-treatment-editor.component */ "./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.ts");
/* harmony import */ var _views_treatment_list_treatment_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/treatment-list/treatment-list.component */ "./src/app/views/treatment-list/treatment-list.component.ts");
/* harmony import */ var _views_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/treatment/treatment.component */ "./src/app/views/treatment/treatment.component.ts");
/* harmony import */ var _views_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/qr-code/qr-code.component */ "./src/app/views/qr-code/qr-code.component.ts");
/* harmony import */ var _views_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/qr-code-scanner/qr-code-scanner.component */ "./src/app/views/qr-code-scanner/qr-code-scanner.component.ts");
/* harmony import */ var _interceptors_http_header_proxy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interceptors/http-header-proxy */ "./src/app/interceptors/http-header-proxy.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/permission.guard */ "./src/app/guards/permission.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    {
        path: '', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]], canActivateChild: [_guards_permission_guard__WEBPACK_IMPORTED_MODULE_26__["PermissionGuard"]], children: [
            { path: 'patient-overview', component: _views_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_12__["PatientOverviewComponent"] },
            { path: 'patient-treatment/:id', component: _views_patient_treatment_patient_treatment_component__WEBPACK_IMPORTED_MODULE_13__["PatientTreatmentComponent"] },
            { path: 'access-requests', component: _views_access_request_access_request_component__WEBPACK_IMPORTED_MODULE_14__["AccessRequestComponent"] },
            { path: 'access-request-details-user/:id', component: _views_access_request_details_user_access_request_details_user_component__WEBPACK_IMPORTED_MODULE_15__["AccessRequestDetailsUserComponent"] },
            { path: 'access-request-details/:key/:name', component: _views_access_request_details_access_request_details_component__WEBPACK_IMPORTED_MODULE_16__["AccessRequestDetailsComponent"] },
            { path: 'access-request-result/:id', component: _views_access_request_result_access_request_result_component__WEBPACK_IMPORTED_MODULE_17__["AccessRequestResultComponent"] },
            { path: 'access-request-result-treatment/:request/:treatment', component: _views_access_request_result_treatment_access_request_result_treatment_component__WEBPACK_IMPORTED_MODULE_18__["AccessRequestResultTreatmentComponent"] },
            { path: 'access-request-treatment-editor/:id', component: _views_access_request_treatment_editor_access_request_treatment_editor_component__WEBPACK_IMPORTED_MODULE_19__["AccessRequestTreatmentEditorComponent"] },
            { path: 'qr-code', component: _views_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_22__["QrCodeComponent"] },
            { path: 'qr-code-scanner', component: _views_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_23__["QrCodeScannerComponent"] }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _views_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_12__["PatientOverviewComponent"],
                _views_patient_treatment_patient_treatment_component__WEBPACK_IMPORTED_MODULE_13__["PatientTreatmentComponent"],
                _views_access_request_access_request_component__WEBPACK_IMPORTED_MODULE_14__["AccessRequestComponent"],
                _views_access_request_details_user_access_request_details_user_component__WEBPACK_IMPORTED_MODULE_15__["AccessRequestDetailsUserComponent"],
                _views_access_request_details_access_request_details_component__WEBPACK_IMPORTED_MODULE_16__["AccessRequestDetailsComponent"],
                _views_access_request_result_access_request_result_component__WEBPACK_IMPORTED_MODULE_17__["AccessRequestResultComponent"],
                _views_access_request_result_treatment_access_request_result_treatment_component__WEBPACK_IMPORTED_MODULE_18__["AccessRequestResultTreatmentComponent"],
                _views_access_request_treatment_editor_access_request_treatment_editor_component__WEBPACK_IMPORTED_MODULE_19__["AccessRequestTreatmentEditorComponent"],
                _views_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_22__["QrCodeComponent"],
                _views_qr_code_scanner_qr_code_scanner_component__WEBPACK_IMPORTED_MODULE_23__["QrCodeScannerComponent"],
                _views_treatment_list_treatment_list_component__WEBPACK_IMPORTED_MODULE_20__["TreatmentListComponent"],
                _views_treatment_treatment_component__WEBPACK_IMPORTED_MODULE_21__["TreatmentComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRCodeModule"],
                _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_10__["ZXingScannerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            exports: [],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_http_header_proxy__WEBPACK_IMPORTED_MODULE_24__["HttpHeaderProxy"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AuthGuard(stateService, router) {
        this.stateService = stateService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.stateService.user) {
            console.log("Not logged in!");
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/permission.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/permission.guard.ts ***!
  \********************************************/
/*! exports provided: PermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return PermissionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(stateService, router) {
        this.stateService = stateService;
        this.router = router;
    }
    PermissionGuard_1 = PermissionGuard;
    PermissionGuard.prototype.canActivateChild = function (next, state) {
        if (this.stateService.user) {
            if (PermissionGuard_1.permissions[this.stateService.user.type.toLowerCase()].includes(state.url.split('/')[1])) {
                return true;
            }
            else {
                console.log("Role \"" + this.stateService.user.type + "\" is not authorized to access this view! Redirecting...");
                this.router.navigate(['/login']);
                return false;
            }
        }
        return false;
    };
    PermissionGuard.permissions = {
        patient: ['patient-overview', 'patient-treatment', 'access-requests', 'access-request-details-user', 'access-request-result', 'access-request-result-treatment', 'qr-code'],
        arzt: ['access-requests', 'access-request-result', 'access-request-details', 'access-request-treatment-editor', 'access-request-result-treatment', 'qr-code-scanner'],
        versicherung: ['access-requests', 'access-request-result', 'access-request-details', 'access-request-result-treatment', 'qr-code-scanner'],
        apotheke: ['access-requests', 'access-request-result', 'access-request-details', 'access-request-result-treatment', 'qr-code-scanner'],
        arbeitgeber: ['access-requests', 'access-request-result', 'access-request-details', 'access-request-result-treatment', 'qr-code-scanner']
    };
    PermissionGuard = PermissionGuard_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PermissionGuard);
    return PermissionGuard;
    var PermissionGuard_1;
}());



/***/ }),

/***/ "./src/app/interceptors/http-header-proxy.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/http-header-proxy.ts ***!
  \***************************************************/
/*! exports provided: HttpHeaderProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderProxy", function() { return HttpHeaderProxy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpHeaderProxy = /** @class */ (function () {
    function HttpHeaderProxy(stateService, storageService) {
        this.stateService = stateService;
        this.storageService = storageService;
    }
    HttpHeaderProxy.prototype.intercept = function (req, next) {
        var _this = this;
        var authReq = undefined;
        var cert = this.storageService.getItem("FabricCert");
        if (cert) {
            var pubkey = this.storageService.getItem("L2PublicKey");
            pubkey = pubkey.replace(/\n/g, "\\n");
            var crypto_1 = "{ \"fabricCert\":" + cert + ", \"pubKey\":\"" + pubkey + "\" }";
            crypto_1 = btoa(crypto_1);
            authReq = req.clone({ headers: req.headers.set("Crypto", crypto_1) });
        }
        else {
            authReq = req.clone({ headers: req.headers });
        }
        return next.handle(authReq).catch(function (error, caught) {
            if (error.status === 401) {
                _this.stateService.invalidate();
            }
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
        });
    };
    HttpHeaderProxy = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], HttpHeaderProxy);
    return HttpHeaderProxy;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mat-progress-buttons */ "./node_modules/mat-progress-buttons/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                mat_progress_buttons__WEBPACK_IMPORTED_MODULE_1__["MatProgressButtons"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], useValue: 'de-DE' }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/attestation.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/attestation.model.ts ***!
  \*********************************************/
/*! exports provided: Attestation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attestation", function() { return Attestation; });
var Attestation = /** @class */ (function () {
    function Attestation() {
    }
    return Attestation;
}());



/***/ }),

/***/ "./src/app/models/diagnose.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/diagnose.model.ts ***!
  \******************************************/
/*! exports provided: Diagnose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnose", function() { return Diagnose; });
var Diagnose = /** @class */ (function () {
    function Diagnose() {
    }
    return Diagnose;
}());



/***/ }),

/***/ "./src/app/models/prescription.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/prescription.model.ts ***!
  \**********************************************/
/*! exports provided: Prescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prescription", function() { return Prescription; });
var Prescription = /** @class */ (function () {
    function Prescription() {
    }
    return Prescription;
}());



/***/ }),

/***/ "./src/app/models/request.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/request.model.ts ***!
  \*****************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var Request = /** @class */ (function () {
    function Request() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.date = new Date();
    }
    return Request;
}());



/***/ }),

/***/ "./src/app/models/treatment.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/treatment.model.ts ***!
  \*******************************************/
/*! exports provided: Treatment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Treatment", function() { return Treatment; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var Treatment = /** @class */ (function () {
    function Treatment() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.date = new Date();
    }
    return Treatment;
}());



/***/ }),

/***/ "./src/app/services/crypto.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/crypto.service.ts ***!
  \********************************************/
/*! exports provided: CryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoService", function() { return CryptoService; });
/* harmony import */ var _rsamodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rsamodule */ "./src/app/services/rsamodule.ts");
/* harmony import */ var _key_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-generator */ "./src/app/services/key-generator.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CryptoService = /** @class */ (function () {
    function CryptoService() {
        this.rsaMod = new _rsamodule__WEBPACK_IMPORTED_MODULE_0__["RSAModule"]();
        this.keyGenerator = new _key_generator__WEBPACK_IMPORTED_MODULE_1__["KeyGenerator"]();
    }
    CryptoService.prototype.encryptData = function (obj, pubkey) {
        if (!pubkey || 0 === pubkey.length) {
            throw Error("No Key provided!");
        }
        if (!obj) {
            throw Error("No Object provided!");
        }
        this.rsaMod.encryptData(obj, pubkey);
    };
    CryptoService.prototype.decryptData = function (obj, privkey) {
        if (!privkey || 0 === privkey.length) {
            throw Error("No Private Key provided!");
        }
        if (!obj) {
            throw Error("No Object provided!");
        }
        this.rsaMod.decryptData(obj, privkey);
    };
    /*
    * Generates a properly formatted RSA Keypair for the level 2 encryption.
    * Returns a list containig both keys. First element is private key, second is public.
    */
    CryptoService.prototype.generateKeyPair = function () {
        return this.keyGenerator.generateKeyPair();
    };
    CryptoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CryptoService);
    return CryptoService;
}());



/***/ }),

/***/ "./src/app/services/key-generator.ts":
/*!*******************************************!*\
  !*** ./src/app/services/key-generator.ts ***!
  \*******************************************/
/*! exports provided: KeyGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyGenerator", function() { return KeyGenerator; });
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsencrypt */ "./node_modules/jsencrypt/bin/jsencrypt.js");
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsencrypt__WEBPACK_IMPORTED_MODULE_0__);

var KeyGenerator = /** @class */ (function () {
    function KeyGenerator() {
    }
    KeyGenerator.prototype.generateKeyPair = function () {
        var jscrypto = new jsencrypt__WEBPACK_IMPORTED_MODULE_0__["JSEncrypt"]();
        var privatekey = jscrypto.getPrivateKey();
        var publickey = jscrypto.getPublicKey();
        return [privatekey, publickey];
    };
    return KeyGenerator;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(http, stateService) {
        this.http = http;
        this.stateService = stateService;
        this.col = "request";
    }
    RequestService.prototype.get = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col)
            .map(function (res) { return res; });
    };
    RequestService.prototype.post = function (pubKey, request) {
        var reciever = Object.assign({}, request);
        var sender = Object.assign({}, request);
        reciever.publicKey = this.stateService.user.publicKey;
        reciever.name = this.stateService.user.name;
        var req1 = this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col, { publicKey: sender.publicKey, request: reciever });
        var req2 = this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col, { publicKey: reciever.publicKey, request: sender });
        return req1.concatMap(function (res) { return req2; }).map(function (res) { return true; });
    };
    RequestService.prototype.put = function (pubKey, requestId, result) {
        var reciever = Object.assign({}, result);
        var sender = Object.assign({}, result);
        var req1 = this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col, { publicKey: pubKey, requestId: requestId, result: reciever });
        var req2 = this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col, { publicKey: this.stateService.user.publicKey, requestId: requestId, result: sender });
        return req1.concatMap(function (res) { return req2; }).map(function (res) { return true; });
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/rsamodule.ts":
/*!***************************************!*\
  !*** ./src/app/services/rsamodule.ts ***!
  \***************************************/
/*! exports provided: RSAModule, encObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RSAModule", function() { return RSAModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encObj", function() { return encObj; });
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsencrypt */ "./node_modules/jsencrypt/bin/jsencrypt.js");
/* harmony import */ var jsencrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsencrypt__WEBPACK_IMPORTED_MODULE_0__);

var RSAModule = /** @class */ (function () {
    function RSAModule() {
    }
    RSAModule.prototype.encryptData = function (obj, pubkey) {
        if (!pubkey || 0 === pubkey.length) {
            throw Error("No Key provided!");
        }
        if (!obj) {
            throw Error("No Object provided!");
        }
        var jscrypto = new jsencrypt__WEBPACK_IMPORTED_MODULE_0__["JSEncrypt"]();
        jscrypto.setPublicKey(pubkey);
        this.recursiveCrypt(obj, jscrypto);
    };
    RSAModule.prototype.decryptData = function (obj, privkey) {
        if (!privkey || 0 === privkey.length) {
            throw Error("No Private Key provided!");
        }
        if (!obj) {
            throw Error("No Object provided!");
        }
        var jscrypto = new jsencrypt__WEBPACK_IMPORTED_MODULE_0__["JSEncrypt"]();
        jscrypto.setPrivateKey(privkey);
        this.recursiveCrypt(obj, jscrypto, true);
    };
    /**
    * recursiveCrypt - Recursively encrypts or decrypts all attribute
    * fields of an object and its nested members. Ignores members starten with an underscore (eg. "_id").
    * Attribute types are stored in a helper object which replaces the original field value.
    * Simple types are restored upon decryption.
    *
    * @param  {Object} obj The object to be decrypted/encrypted
    * @param  {JSEncrypt} jsencrypt_instance An instance of JSEncrypt with initialized key.
    * @param  {boolean} decryptFlag=false  Flag to determine encryption (default) or decryption
    */
    RSAModule.prototype.recursiveCrypt = function (obj, jsencrypt_instance, decryptFlag) {
        if (decryptFlag === void 0) { decryptFlag = false; }
        for (var property in obj) {
            if (!property.toString().startsWith("_") && (obj[property] != null)) {
                if (obj.hasOwnProperty(property)) {
                    if (typeof obj[property] == "object" && !(obj[property] instanceof encObj)) {
                        // recursively call the function for all members which are non-primitive
                        // and not the helper object replacing an original value
                        this.recursiveCrypt(obj[property], jsencrypt_instance, decryptFlag);
                    }
                    else {
                        // in case of a primitive type or helper object
                        if (decryptFlag == false) {
                            var dtype = typeof (obj[property]); // save the value type for later reconstruction
                            var val = jsencrypt_instance.encrypt(String(obj[property])); // encrypt the value
                            // replace the value with a helper object containing its type and encrypted string
                            obj[property] = new encObj(val, dtype);
                        }
                        else {
                            // decrypt the value string
                            obj[property].val = jsencrypt_instance.decrypt(obj[property].val);
                            // restore its original type
                            obj[property] = this.reconstructType(obj[property]);
                        }
                    }
                }
            }
        }
    };
    /**
    * reconstructType - Helper function to restore the original type of an encObj.
    *
    * @param  {encObj} _encObj Decrypted encObj instance
    * @return {number, boolean, string} _encObj.val casted to _encObj.dtype
    */
    RSAModule.prototype.reconstructType = function (_encObj) {
        var castedObj = null;
        switch (_encObj.dtype) {
            case "number":
                castedObj = Number(_encObj.val);
                break;
            case "boolean":
                castedObj = (_encObj.val == "true");
                break;
            default:
                castedObj = _encObj.val;
        }
        return castedObj;
    };
    return RSAModule;
}());

/**
* Helper object to replace field values with their
* encrypted string representation and their original type
*/
var encObj = /** @class */ (function () {
    function encObj(val, dtype) {
        this.val = val;
        this.dtype = dtype;
    }
    return encObj;
}());



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _crypto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crypto.service */ "./src/app/services/crypto.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StateService = /** @class */ (function () {
    function StateService(router, storage, userService, cryptoService) {
        this.router = router;
        this.storage = storage;
        this.userService = userService;
        this.cryptoService = cryptoService;
    }
    StateService_1 = StateService;
    /*
    * Removes the User Fabric Certificate from Storage Service which constitutes a logout of the current user.
    */
    StateService.prototype.invalidate = function () {
        if (this.storage.getItem("FabricCert")) {
            this.storage.removeItem("FabricCert");
        }
        if (this.storage.getItem("L2PublicKey")) {
            this.storage.removeItem("L2PublicKey");
        }
        if (this.storage.getItem("L2PrivateKey")) {
            this.storage.removeItem("L2PrivateKey");
        }
        this.user = undefined;
        console.log('Fabric Certificate was invalidated and L2-Keys removed! Logging out...');
        this.router.navigate(['/login']);
    };
    /*
    * Login by providing a valid Fabric User Certificate.
    * Generates and stores an L2 encryption key pair if no keys are found.
    */
    StateService.prototype.login = function (cert) {
        var _this = this;
        if (!cert || 0 === cert.length) {
            console.log("No Certificate provided to stateService.login()!");
            return;
        }
        //alway creates new keys on login
        var keys = this.cryptoService.generateKeyPair();
        this.storage.setItem("FabricCert", cert);
        this.storage.setItem("L2PrivateKey", keys[0]);
        this.storage.setItem("L2PublicKey", keys[1]);
        this.userService.post().subscribe(function (user) {
            _this.user = user;
            console.log("Logged in! Welcome, " + _this.user.name + "!");
            _this.router.navigate([StateService_1.default_pages[_this.user.type.toLowerCase()]]);
        }, function (err) { return console.log(err); });
    };
    /*
    * To be called on load. Authorizes user from stored certificate.
    */
    StateService.prototype.autoLoginFromStorage = function () {
        var _this = this;
        if (this.storage.getItem("FabricCert") && this.storage.getItem("L2PublicKey")) {
            this.userService.get().subscribe(function (user) {
                _this.user = user;
                console.log("Logged in! Welcome, " + _this.user.name + "!");
                _this.router.navigate([StateService_1.default_pages[_this.user.type.toLowerCase()]]);
            }, function (err) { return console.log(err); });
        }
    };
    StateService.default_pages = { patient: '/patient-overview',
        arzt: '/access-requests',
        versicherung: '/access-requests',
        apotheke: '/access-requests',
        arbeitgeber: '/access-requests' };
    StateService = StateService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _crypto_service__WEBPACK_IMPORTED_MODULE_3__["CryptoService"]])
    ], StateService);
    return StateService;
    var StateService_1;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
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

/**
 * Wrapper service for crud operations on the local Storage
 */
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    /**
     * Clears the whole localStorage for the application
     */
    StorageService.prototype.clear = function () {
        localStorage.clear();
    };
    /**
     * Gets an item with the given key from the localStorage
     * @param key The key to get the value from the localStorage
     * @return {any} The value for the given key if exists, otherwise null
     */
    StorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    /**
     * Gets the literal key on the given index in the localStorage
     * @param index The index in the localStorage to retrieve the literal key for
     * @return {string} The literal key for the given index
     */
    StorageService.prototype.key = function (index) {
        return localStorage.key(index);
    };
    /**
     * Removes an item with the given key from the localStorage
     * @param key The key of the item to remove
     */
    StorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    /**
     * Sets an item for the given key in the localStorage
     * @param key The key of the item to set
     * @param value The value of the item to in the localStorage
     */
    StorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/treatment.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/treatment.service.ts ***!
  \***********************************************/
/*! exports provided: TreatmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentService", function() { return TreatmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreatmentService = /** @class */ (function () {
    function TreatmentService(http) {
        this.http = http;
        this.col = "treatment";
    }
    TreatmentService.prototype.get = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col)
            .map(function (res) { return res; });
    };
    TreatmentService.prototype.post = function (pub_key, treatment) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col, { publicKey: pub_key, treatment: treatment })
            .map(function (res) { return true; });
    };
    TreatmentService.prototype.postRedeem = function (pub_key, treatmentId) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col + "/redeem", { publicKey: pub_key, treatmentId: treatmentId })
            .map(function (res) { return true; });
    };
    TreatmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TreatmentService);
    return TreatmentService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.col = "user";
    }
    UserService.prototype.get = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col)
            .map(function (res) { return res; });
    };
    UserService.prototype.post = function () {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + this.col, {})
            .map(function (res) { return res; });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/access-request-details-user/access-request-details-user.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/access-request-details-user/access-request-details-user.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n    min-height: 18px;\n}"

/***/ }),

/***/ "./src/app/views/access-request-details-user/access-request-details-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/access-request-details-user/access-request-details-user.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\n    <spinner-button [options]=\"saveButtonOptions\" (click)=\"onSave()\"></spinner-button>\n    <spinner-button [options]=\"rejectButtonOptions\" (click)=\"decline()\"></spinner-button>\n    <button mat-raised-button routerLink=\"/access-requests\">Zurück</button>\n  </div>\n  <br>\n  <mat-form-field>\n    <input matInput placeholder=\"Anfrage von:\" [value]=\"request?.name\" readonly>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Einsicht ab:\" [value]=\"request?.since | date:'dd.MM.yyyy'\" readonly>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput placeholder=\"Kategorie\" [value]=\"request?.title === undefined ? 'Alles' : request?.title\" readonly>\n  </mat-form-field>\n  <h2 class=\"mat-h2\">Behandlungen</h2>\n  <table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Bezeichnung </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Behandlung\"> {{element.item.diagnose.title}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"diagnose\">\n      <th mat-header-cell *matHeaderCellDef> Diagnose </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Diagnose\">\n        <mat-checkbox [(ngModel)]=\"element.treatment\"></mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"recipe\">\n      <th mat-header-cell *matHeaderCellDef> Rezept </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Rezept\">\n        <mat-checkbox [(ngModel)]=\"element.recipe\"></mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"attestation\">\n      <th mat-header-cell *matHeaderCellDef> Arbeitsunfähigkeit </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Arbeitsunfähigkeit\">\n        <mat-checkbox [(ngModel)]=\"element.attestation\"></mat-checkbox>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"['title', 'diagnose', 'recipe', 'attestation']\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['title', 'diagnose', 'recipe', 'attestation'];\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/views/access-request-details-user/access-request-details-user.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/access-request-details-user/access-request-details-user.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AccessRequestDetailsUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestDetailsUserComponent", function() { return AccessRequestDetailsUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_treatment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/treatment.service */ "./src/app/services/treatment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccessRequestDetailsUserComponent = /** @class */ (function () {
    function AccessRequestDetailsUserComponent(requestService, treatmentService, route, router) {
        var _this = this;
        this.requestService = requestService;
        this.treatmentService = treatmentService;
        this.route = route;
        this.router = router;
        this.saveButtonOptions = {
            active: false,
            text: 'Annehmen',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent'
        };
        this.rejectButtonOptions = {
            active: false,
            text: 'Ablehnen',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'accent',
            spinnerColor: 'primary'
        };
        this.route.params.map(function (p) { return p.id; }).subscribe(function (id) {
            _this.treatmentService.get().subscribe(function (treatments) {
                _this.requestService.get().subscribe(function (requests) { return _this.refreshData(treatments, requests, id); });
            });
        });
    }
    AccessRequestDetailsUserComponent.prototype.refreshData = function (treatments, requests, id) {
        this.request = requests.find(function (r) { return r.id == id; });
        if (this.request == null)
            return;
        console.log(this.request);
        var items = new Array();
        for (var _i = 0, treatments_1 = treatments; _i < treatments_1.length; _i++) {
            var t = treatments_1[_i];
            items.push(new ListItem(this.request, t));
        }
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](items);
    };
    AccessRequestDetailsUserComponent.prototype.ngOnInit = function () {
    };
    AccessRequestDetailsUserComponent.prototype.onSave = function () {
        var _this = this;
        this.saveButtonOptions.active = true;
        this.saveButtonOptions.text = 'Annehmen...';
        var treatments = new Array();
        for (var _i = 0, _a = this.ds.data; _i < _a.length; _i++) {
            var item = _a[_i];
            var treatment = item.item;
            if (!item.treatment)
                treatment.diagnose = null;
            if (!item.attestation)
                treatment.attestation = null;
            if (!item.recipe)
                treatment.prescription = null;
            if (treatment.diagnose == null && treatment.attestation == null && treatment.prescription == null)
                continue;
            treatments.push(treatment);
        }
        var result = {
            rejected: false,
            reason: null,
            treatment: treatments,
        };
        this.requestService.put(this.request.publicKey, this.request.id, result).subscribe(function (res) {
            _this.router.navigate(['/access-requests']);
        });
    };
    AccessRequestDetailsUserComponent.prototype.decline = function () {
        var _this = this;
        this.rejectButtonOptions.active = true;
        this.rejectButtonOptions.text = 'Ablehnen...';
        var result = {
            rejected: true,
            reason: 'abgelehnt',
            treatment: null
        };
        this.requestService.put(this.request.publicKey, this.request.id, result).subscribe(function (res) {
            _this.rejectButtonOptions.active = false;
            _this.rejectButtonOptions.text = 'Ablehnen';
            _this.router.navigate(['/access-requests']);
        });
    };
    AccessRequestDetailsUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-details-user',
            template: __webpack_require__(/*! ./access-request-details-user.component.html */ "./src/app/views/access-request-details-user/access-request-details-user.component.html"),
            styles: [__webpack_require__(/*! ./access-request-details-user.component.css */ "./src/app/views/access-request-details-user/access-request-details-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"],
            _services_treatment_service__WEBPACK_IMPORTED_MODULE_4__["TreatmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccessRequestDetailsUserComponent);
    return AccessRequestDetailsUserComponent;
}());

var ListItem = /** @class */ (function () {
    function ListItem(request, treatment) {
        this.item = treatment;
        this.treatment = request.treatment;
        this.recipe = request.recipe;
        this.attestation = request.attestation;
    }
    return ListItem;
}());


/***/ }),

/***/ "./src/app/views/access-request-details/access-request-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/views/access-request-details/access-request-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/access-request-details/access-request-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/access-request-details/access-request-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\n      <spinner-button [options]=\"saveButtonOptions\" (click)=\"onSave()\"></spinner-button>\n      <button mat-raised-button color=\"accent\" routerLink=\"/access-requests\">Zurück</button>\n    </div>\n    <br>\n  <div fxLayout=\"row\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Anfrage von:\" [value]='stateService.user.name' readonly>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Anfrage an:\" [value]=\"request.name\" readonly>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker1\" (click)=\"picker1.open()\" placeholder=\"Einsicht ab:\" [(ngModel)]=\"request.since\" readonly>\n      <mat-datepicker #picker1></mat-datepicker>\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Kategorie\" [(value)]=\"request.title\" required>\n        <mat-option *ngFor=\"let item of details\" [value]=\"item.name\">\n          {{item.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\n      <mat-checkbox [(ngModel)]=\"request.treatment\">\n        Diagnose\n      </mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"request.recipe\">\n        Rezept\n      </mat-checkbox>\n      <mat-checkbox [(ngModel)]=\"request.attestation\">\n        Arbeitsunfähigkeit\n      </mat-checkbox>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/access-request-details/access-request-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/access-request-details/access-request-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AccessRequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestDetailsComponent", function() { return AccessRequestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _models_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/request.model */ "./src/app/models/request.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccessRequestDetailsComponent = /** @class */ (function () {
    function AccessRequestDetailsComponent(route, router, stateService, requestService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.stateService = stateService;
        this.requestService = requestService;
        this.details = [
            { name: 'Alles' },
            { name: 'Allergie' },
            { name: 'Akute Erkrankungen' },
            { name: 'Chronische Erkrankungen' },
            { name: 'Sonstiges' }
        ];
        this.saveButtonOptions = {
            active: false,
            text: 'Speichern',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent'
        };
        this.request = new _models_request_model__WEBPACK_IMPORTED_MODULE_4__["Request"]();
        this.route.params.map(function (p) { return p.key; }).subscribe(function (key) { return _this.request.publicKey = key; });
        this.route.params.map(function (p) { return p.name; }).subscribe(function (name) { return _this.request.name = name; });
    }
    AccessRequestDetailsComponent.prototype.ngOnInit = function () {
    };
    AccessRequestDetailsComponent.prototype.onCancel = function () {
        this.router.navigate(['./qr-code-scanner']);
    };
    AccessRequestDetailsComponent.prototype.onSave = function () {
        var _this = this;
        this.saveButtonOptions.active = true;
        this.saveButtonOptions.text = 'Speichere...';
        this.requestService.post(this.request.publicKey, this.request).subscribe(function (res) {
            _this.router.navigate(['./access-requests']);
        });
    };
    AccessRequestDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-details',
            template: __webpack_require__(/*! ./access-request-details.component.html */ "./src/app/views/access-request-details/access-request-details.component.html"),
            styles: [__webpack_require__(/*! ./access-request-details.component.css */ "./src/app/views/access-request-details/access-request-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], AccessRequestDetailsComponent);
    return AccessRequestDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/access-request-result-treatment/access-request-result-treatment.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/access-request-result-treatment/access-request-result-treatment.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/access-request-result-treatment/access-request-result-treatment.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/access-request-result-treatment/access-request-result-treatment.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <div fxFlex=\"70\" fxLayout=\"row\" fxLayoutAlign=\"start center\" >\n        <button mat-raised-button color=\"accent\" (click)=\"onClose()\">Zurück</button>\n      </div>\n      <div>\n        <spinner-button [options]=\"redeemButtonOptions\" (click)=\"redeem()\" *ngIf=\"isPharmacy\"></spinner-button>\n      </div>\n  </div>\n  <br/>\n\n  <app-treatment [treatment]=\"treatment\"></app-treatment>\n</div>\n"

/***/ }),

/***/ "./src/app/views/access-request-result-treatment/access-request-result-treatment.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/access-request-result-treatment/access-request-result-treatment.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AccessRequestResultTreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestResultTreatmentComponent", function() { return AccessRequestResultTreatmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_treatment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/treatment.service */ "./src/app/services/treatment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccessRequestResultTreatmentComponent = /** @class */ (function () {
    function AccessRequestResultTreatmentComponent(requestService, route, router, stateService, treatmentService, snackBar) {
        var _this = this;
        this.requestService = requestService;
        this.route = route;
        this.router = router;
        this.stateService = stateService;
        this.treatmentService = treatmentService;
        this.snackBar = snackBar;
        this.isPharmacy = false;
        this.redeemButtonOptions = {
            active: false,
            text: 'Einlösen',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent'
        };
        this.isPharmacy = stateService.user.type === 'Apotheke';
        this.route.params.map(function (p) { return p.request; }).subscribe(function (requestId) {
            _this.route.params.map(function (p) { return p.treatment; }).subscribe(function (treatmentId) {
                _this.requestService.get().subscribe(function (requests) {
                    _this.request = requests.find(function (r) { return r.id === requestId; });
                    _this.treatment = _this.request.Result.treatment.find(function (t) { return t.id === treatmentId; });
                    console.log(_this.treatment);
                });
            });
        });
    }
    AccessRequestResultTreatmentComponent.prototype.ngOnInit = function () {
    };
    AccessRequestResultTreatmentComponent.prototype.onClose = function () {
        this.router.navigate(['/access-request-result', this.request.id]);
    };
    AccessRequestResultTreatmentComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            verticalPosition: 'top'
        });
    };
    AccessRequestResultTreatmentComponent.prototype.redeem = function () {
        var _this = this;
        this.redeemButtonOptions.active = true;
        this.redeemButtonOptions.text = 'Löse ein...';
        this.treatmentService.postRedeem(this.request.publicKey, this.treatment.id).subscribe(function (rest) {
            _this.redeemButtonOptions.active = false;
            _this.redeemButtonOptions.text = 'Einlösen';
            _this.openSnackBar('Rezept erfolgreich eingelöst!', 'Okay');
        }, function (err) {
            _this.redeemButtonOptions.active = false;
            _this.redeemButtonOptions.text = 'Einlösen';
            _this.openSnackBar('Rezept wurde bereits eingelöst!', 'Okay');
        });
    };
    AccessRequestResultTreatmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-result-treatment',
            template: __webpack_require__(/*! ./access-request-result-treatment.component.html */ "./src/app/views/access-request-result-treatment/access-request-result-treatment.component.html"),
            styles: [__webpack_require__(/*! ./access-request-result-treatment.component.css */ "./src/app/views/access-request-result-treatment/access-request-result-treatment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _services_treatment_service__WEBPACK_IMPORTED_MODULE_4__["TreatmentService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AccessRequestResultTreatmentComponent);
    return AccessRequestResultTreatmentComponent;
}());



/***/ }),

/***/ "./src/app/views/access-request-result/access-request-result.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/access-request-result/access-request-result.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/access-request-result/access-request-result.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/access-request-result/access-request-result.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div fxFlex=\"70\" fxLayout=\"row\" fxLayoutAlign=\"start center\" >\n            <button mat-raised-button color=\"accent\" routerLink=\"/access-requests\">Zurück</button>\n        </div>\n        <div>\n          <button mat-raised-button color=\"primary\" (click)=\"onNewTreatment()\" *ngIf=\"isDoctor\">Neue Behandlung</button>\n          <button mat-raised-button (click)=\"showRequest()\" color=\"primary\" *ngIf=\"!isPatient\">Erneut anfragen</button>\n        </div>\n    </div>\n    <br>\n    <mat-form-field>\n        <input matInput placeholder=\"Anfrage von:\" [value]=\"request?.name\" readonly>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Einsicht ab:\" [value]=\"request?.since | date:'dd.MM.yyyy'\" readonly>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Kategorie\" [value]=\"request?.title === undefined ? 'Alles' : request?.title\" readonly>\n    </mat-form-field>\n    <h2 class=\"mat-h2\">Behandlungen</h2>\n    <app-treatment-list [treatments]=\"request?.Result.treatment\" (onSelected)=\"onSelected($event)\"></app-treatment-list>\n</div>\n"

/***/ }),

/***/ "./src/app/views/access-request-result/access-request-result.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/access-request-result/access-request-result.component.ts ***!
  \********************************************************************************/
/*! exports provided: AccessRequestResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestResultComponent", function() { return AccessRequestResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccessRequestResultComponent = /** @class */ (function () {
    function AccessRequestResultComponent(requestService, stateService, route, router) {
        var _this = this;
        this.requestService = requestService;
        this.stateService = stateService;
        this.route = route;
        this.router = router;
        this.isDoctor = false;
        this.isPatient = false;
        this.isDoctor = this.stateService.user.type == 'Arzt';
        this.isPatient = this.stateService.user.type == 'Patient';
        this.route.params.map(function (p) { return p.id; }).subscribe(function (id) {
            _this.requestService.get().subscribe(function (requests) {
                _this.request = requests.find(function (r) { return r.id == id; });
            });
        });
    }
    AccessRequestResultComponent.prototype.ngOnInit = function () {
    };
    AccessRequestResultComponent.prototype.onSelected = function (treatment) {
        this.router.navigate(['access-request-result-treatment', this.request.id, treatment.id]);
    };
    AccessRequestResultComponent.prototype.onNewTreatment = function () {
        this.router.navigate(['access-request-treatment-editor', this.request.id]);
    };
    AccessRequestResultComponent.prototype.showRequest = function () {
        this.router.navigate(['access-request-details', this.request.publicKey, this.request.name]);
    };
    AccessRequestResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-result',
            template: __webpack_require__(/*! ./access-request-result.component.html */ "./src/app/views/access-request-result/access-request-result.component.html"),
            styles: [__webpack_require__(/*! ./access-request-result.component.css */ "./src/app/views/access-request-result/access-request-result.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccessRequestResultComponent);
    return AccessRequestResultComponent;
}());



/***/ }),

/***/ "./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" >\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\n        <spinner-button [options]=\"saveButtonOptions\" (click)=\"onSave()\"></spinner-button>\n        <button mat-raised-button color=\"accent\" (click)=\"onCancel()\">Zurück</button>\n    </div>\n    <br>\n    <mat-card>\n        <mat-card-title>Diagnose</mat-card-title>\n        <mat-card-content>\n            <mat-form-field>\n                <input matInput placeholder=\"Bezeichnung\" [(ngModel)]=\"treatment?.diagnose.title\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Beschreibung\" [(ngModel)]=\"treatment?.diagnose.description\"></textarea>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-title>\n            <mat-checkbox [checked]=\"treatment?.prescription != null\" (change)=\"onPrescription($event)\"></mat-checkbox> Rezept\n        </mat-card-title>\n        <mat-card-content *ngIf=\"treatment?.prescription != null\">\n            <mat-form-field>\n                <input matInput placeholder=\"Wirkstoff\" [(ngModel)]=\"treatment?.prescription.drug\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput placeholder=\"Dosierung\" [(ngModel)]=\"treatment?.prescription.dosage\"/>\n            </mat-form-field>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Notiz\" [(ngModel)]=\"treatment?.prescription.note\"></textarea>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-title>\n            <mat-checkbox [checked]=\"treatment?.attestation != null\" (change)=\"onAttestation($event)\"></mat-checkbox> Arbeitsunfähigkeit\n        </mat-card-title>\n        <mat-card-content *ngIf=\"treatment?.attestation != null\">\n\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"picker1\" (click)=\"picker1.open()\" placeholder=\"Beginn\" [(ngModel)]=\"treatment?.attestation.from\" readonly />\n                <mat-datepicker #picker1></mat-datepicker>\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"picker2\" (click)=\"picker2.open()\" placeholder=\"Ende\" [(ngModel)]=\"treatment?.attestation.to\" readonly />\n                <mat-datepicker #picker2></mat-datepicker>\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            </mat-form-field>\n        </mat-card-content>\n    </mat-card>\n          \n</div>"

/***/ }),

/***/ "./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AccessRequestTreatmentEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestTreatmentEditorComponent", function() { return AccessRequestTreatmentEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_treatment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/treatment.model */ "./src/app/models/treatment.model.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _models_diagnose_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/diagnose.model */ "./src/app/models/diagnose.model.ts");
/* harmony import */ var _services_treatment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/treatment.service */ "./src/app/services/treatment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _models_prescription_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/prescription.model */ "./src/app/models/prescription.model.ts");
/* harmony import */ var _models_attestation_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/attestation.model */ "./src/app/models/attestation.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccessRequestTreatmentEditorComponent = /** @class */ (function () {
    function AccessRequestTreatmentEditorComponent(stateService, router, route, requestService, treatmentService) {
        var _this = this;
        this.stateService = stateService;
        this.router = router;
        this.route = route;
        this.requestService = requestService;
        this.treatmentService = treatmentService;
        this.saveButtonOptions = {
            active: false,
            text: 'Speichern',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent'
        };
        this.treatment = new _models_treatment_model__WEBPACK_IMPORTED_MODULE_1__["Treatment"]();
        this.treatment.doctor = stateService.user.name;
        this.treatment.diagnose = new _models_diagnose_model__WEBPACK_IMPORTED_MODULE_3__["Diagnose"]();
        this.route.params.map(function (p) { return p.id; }).subscribe(function (id) {
            _this.requestService.get().subscribe(function (requests) {
                _this.request = requests.find(function (r) { return r.id == id; });
            });
        });
    }
    AccessRequestTreatmentEditorComponent.prototype.ngOnInit = function () {
    };
    AccessRequestTreatmentEditorComponent.prototype.onPrescription = function (state) {
        if (state.checked == (this.treatment.prescription != null))
            return;
        this.treatment.prescription = state.checked ? new _models_prescription_model__WEBPACK_IMPORTED_MODULE_7__["Prescription"]() : null;
    };
    AccessRequestTreatmentEditorComponent.prototype.onAttestation = function (state) {
        if (state.checked == (this.treatment.attestation != null))
            return;
        this.treatment.attestation = state.checked ? new _models_attestation_model__WEBPACK_IMPORTED_MODULE_8__["Attestation"]() : null;
    };
    AccessRequestTreatmentEditorComponent.prototype.onSave = function () {
        var _this = this;
        this.saveButtonOptions.active = true;
        this.saveButtonOptions.text = 'Speichere...';
        this.treatmentService.post(this.request.publicKey, this.treatment).subscribe(function (rest) {
            _this.router.navigate(['/access-requests']);
        });
    };
    AccessRequestTreatmentEditorComponent.prototype.onCancel = function () {
        this.router.navigate(['/access-request-result', this.request.id]);
    };
    AccessRequestTreatmentEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request-treatment-editor',
            template: __webpack_require__(/*! ./access-request-treatment-editor.component.html */ "./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.html"),
            styles: [__webpack_require__(/*! ./access-request-treatment-editor.component.css */ "./src/app/views/access-request-treatment-editor/access-request-treatment-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"],
            _services_treatment_service__WEBPACK_IMPORTED_MODULE_4__["TreatmentService"]])
    ], AccessRequestTreatmentEditorComponent);
    return AccessRequestTreatmentEditorComponent;
}());



/***/ }),

/***/ "./src/app/views/access-request/access-request.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/access-request/access-request.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n    min-height: 18px;\n}"

/***/ }),

/***/ "./src/app/views/access-request/access-request.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/access-request/access-request.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <mat-form-field fxFlex=\"70\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <div>\n      <spinner-button [options]=\"reloadButtonOptions\" (click)=\"reloadData()\"></spinner-button>\n      <button mat-raised-button (click)=\"showScanner()\" color=\"primary\" *ngIf=\"!isPatient\">Anfrage erstellen</button>\n    </div>\n  </div>\n\n  <table mat-table [dataSource]=\"ds\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Datum </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Datum\"> {{element.date | date:'dd.MM.yyyy HH:mm'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Name\"> {{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Status\"> {{element.Result == null ? \"Offen\" : element.Result.rejected ? \"Abgelehnt\" : \"Freigegeben\"}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Aktionen </th>\n      <td mat-cell *matCellDef=\"let element\" data-label=\"Aktionen\">\n          <button mat-raised-button (click)=\"showResult(element)\" *ngIf=\"element.Result\" [disabled]=\"element.Result.rejected\"> Einsehen</button>\n          <button mat-raised-button (click)=\"accept(element)\" color=\"primary\" *ngIf=\"isPatient && !element.Result\"> Ansehen</button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"['date', 'name', 'status', 'actions']\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['date', 'name', 'status', 'actions'];\"></tr>\n  </table>\n<div>\n"

/***/ }),

/***/ "./src/app/views/access-request/access-request.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/access-request/access-request.component.ts ***!
  \******************************************************************/
/*! exports provided: AccessRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRequestComponent", function() { return AccessRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccessRequestComponent = /** @class */ (function () {
    function AccessRequestComponent(router, requestService, stateService) {
        this.router = router;
        this.requestService = requestService;
        this.stateService = stateService;
        this.isPatient = false;
        this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.reloadButtonOptions = {
            active: false,
            text: 'Aktualisieren',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'default',
            spinnerColor: 'accent'
        };
        this.isPatient = stateService.user.type === 'Patient';
    }
    AccessRequestComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    AccessRequestComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    AccessRequestComponent.prototype.reloadData = function () {
        var _this = this;
        this.reloadButtonOptions.active = true;
        this.reloadButtonOptions.text = 'Lade Daten...';
        this.requestService.get().subscribe(function (obs) {
            obs = obs.sort(function (a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
            _this.ds = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](obs);
            setTimeout(function () {
                _this.reloadButtonOptions.active = false;
                _this.reloadButtonOptions.text = 'Aktualisieren';
            }, 1000);
        });
    };
    AccessRequestComponent.prototype.showScanner = function () {
        this.router.navigate(['/qr-code-scanner']);
    };
    AccessRequestComponent.prototype.showResult = function (request) {
        this.router.navigate(['./access-request-result', request.id]);
    };
    AccessRequestComponent.prototype.accept = function (request) {
        this.router.navigate(['./access-request-details-user', request.id]);
    };
    AccessRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-request',
            template: __webpack_require__(/*! ./access-request.component.html */ "./src/app/views/access-request/access-request.component.html"),
            styles: [__webpack_require__(/*! ./access-request.component.css */ "./src/app/views/access-request/access-request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], AccessRequestComponent);
    return AccessRequestComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hl-spinner {\n    margin:20px auto;\n  }"

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <img src=\"assets/hl-logo.png\" style=\"margin:40px\">\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-subtitle>Wählen Sie zur Identifizierung das Health Ledger Zertifikat auf Ihrem Gerät aus</mat-card-subtitle>\n    <mat-card-content>\n      <button mat-raised-button color=\"accent\" (click)=\"fileInput.click()\">\n          <mat-icon>fingerprint</mat-icon>\n          <span>Zertifikat auswählen</span>\n          <input #fileInput type=\"file\" (change)=\"onChange($event)\" style=\"display:none;\" />\n      </button>\n      <mat-spinner *ngIf=showSpinner class=\"hl-spinner\"></mat-spinner>\n      \n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function LoginComponent(storageService, stateService) {
        this.storageService = storageService;
        this.stateService = stateService;
        this.showSpinner = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.storageService.getItem("FabricCert")) {
            this.showSpinner = true;
        }
        this.stateService.autoLoginFromStorage();
    };
    LoginComponent.prototype.onChange = function (event) {
        var _this = this;
        this.showSpinner = true;
        var file = event.srcElement.files;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.stateService.login(reader.result);
        };
        reader.readAsText(file[0], "UTF-8");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_0__["StorageService"], _services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/patient-overview/patient-overview.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/patient-overview/patient-overview.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/patient-overview/patient-overview.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/patient-overview/patient-overview.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <mat-form-field fxFlex=\"70\">\n            <input matInput (keyup)=\"treatmentList.filter = $event.target.value\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div>\n            <spinner-button [options]=\"reloadButtonOptions\" (click)=\"reloadData()\"></spinner-button>\n        </div>\n    </div>\n\n    <app-treatment-list #treatmentList [treatments]=\"treatments\" (onSelected)=\"onSelected($event)\"></app-treatment-list>\n<div>\n  "

/***/ }),

/***/ "./src/app/views/patient-overview/patient-overview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/patient-overview/patient-overview.component.ts ***!
  \**********************************************************************/
/*! exports provided: PatientOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientOverviewComponent", function() { return PatientOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_treatment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/treatment.service */ "./src/app/services/treatment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientOverviewComponent = /** @class */ (function () {
    function PatientOverviewComponent(treatmentService, router) {
        this.treatmentService = treatmentService;
        this.router = router;
        this.reloadButtonOptions = {
            active: false,
            text: 'Aktualisieren',
            spinnerSize: 18,
            raised: true,
            buttonColor: 'default',
            spinnerColor: 'accent'
        };
    }
    PatientOverviewComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    PatientOverviewComponent.prototype.reloadData = function () {
        var _this = this;
        this.reloadButtonOptions.active = true;
        this.reloadButtonOptions.text = 'Lade Daten...';
        this.treatmentService.get().subscribe(function (treatments) {
            _this.treatments = treatments;
            setTimeout(function () {
                _this.reloadButtonOptions.active = false;
                _this.reloadButtonOptions.text = 'Aktualisieren';
            }, 1000);
        });
    };
    PatientOverviewComponent.prototype.onSelected = function (treatment) {
        this.router.navigate(['patient-treatment', treatment.id]);
    };
    PatientOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-overview',
            template: __webpack_require__(/*! ./patient-overview.component.html */ "./src/app/views/patient-overview/patient-overview.component.html"),
            styles: [__webpack_require__(/*! ./patient-overview.component.css */ "./src/app/views/patient-overview/patient-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_treatment_service__WEBPACK_IMPORTED_MODULE_1__["TreatmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PatientOverviewComponent);
    return PatientOverviewComponent;
}());



/***/ }),

/***/ "./src/app/views/patient-treatment/patient-treatment.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/patient-treatment/patient-treatment.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/patient-treatment/patient-treatment.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/patient-treatment/patient-treatment.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" >\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" >\n        <button mat-raised-button color=\"accent\" routerLink=\"/patient-overview\">Zurück</button>\n    </div>\n    <br />\n    <app-treatment [treatment]=\"treatment\"></app-treatment>\n</div>"

/***/ }),

/***/ "./src/app/views/patient-treatment/patient-treatment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/patient-treatment/patient-treatment.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientTreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTreatmentComponent", function() { return PatientTreatmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_treatment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/treatment.service */ "./src/app/services/treatment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientTreatmentComponent = /** @class */ (function () {
    function PatientTreatmentComponent(route, treatmentService) {
        var _this = this;
        this.route = route;
        this.treatmentService = treatmentService;
        this.route.params.map(function (p) { return p.id; }).subscribe(function (id) {
            _this.treatmentService.get().subscribe(function (treatments) {
                _this.treatment = treatments.find(function (t) { return t.id == id; });
            });
        });
    }
    PatientTreatmentComponent.prototype.ngOnInit = function () {
    };
    PatientTreatmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-treatment',
            template: __webpack_require__(/*! ./patient-treatment.component.html */ "./src/app/views/patient-treatment/patient-treatment.component.html"),
            styles: [__webpack_require__(/*! ./patient-treatment.component.css */ "./src/app/views/patient-treatment/patient-treatment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_treatment_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentService"]])
    ], PatientTreatmentComponent);
    return PatientTreatmentComponent;
}());



/***/ }),

/***/ "./src/app/views/qr-code-scanner/qr-code-scanner.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/qr-code-scanner/qr-code-scanner.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scanner {\n  width: 500px;\n}\n"

/***/ }),

/***/ "./src/app/views/qr-code-scanner/qr-code-scanner.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/qr-code-scanner/qr-code-scanner.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"availableDevices\">\n  <select (change)=\"onDeviceSelectChange($event.target.value)\">\n    <!--<option value=\"\" [selected]=\"!selectedDevice\">No Device</option>-->\n    <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\" [selected]=\"selectedDevice && device.deviceId === selectedDevice.deviceId\">{{ device.label }}</option>\n  </select>\n</div>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n  <zxing-scanner #scanner fxFlex class=\"scanner\" start=\"true\" [device]=\"selectedDevice\" (scanSuccess)=\"handleQrCodeResult($event)\"></zxing-scanner>\n\n  <mat-card *ngIf=\"!hasCameras\">\n    <mat-card-title>Simulation</mat-card-title>\n    <mat-card-content>\n      <mat-form-field>\n          <textarea matInput placeholder=\"PublicKey\" [(ngModel)]=\"customKey\"></textarea>\n      </mat-form-field>\n      <button mat-raised-button (click)=\"onSimulation()\">Simulieren</button>\n    </mat-card-content>\n  </mat-card>\n<br/>\n  <button mat-raised-button (click)=\"onCancel()\">Abbrechen</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/qr-code-scanner/qr-code-scanner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/qr-code-scanner/qr-code-scanner.component.ts ***!
  \********************************************************************/
/*! exports provided: QrCodeScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeScannerComponent", function() { return QrCodeScannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrCodeScannerComponent = /** @class */ (function () {
    function QrCodeScannerComponent(router) {
        this.router = router;
        this.hasCameras = false;
    }
    QrCodeScannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scanner.camerasFound.subscribe(function (devices) {
            _this.hasCameras = true;
            console.log('Devices: ', devices);
            _this.availableDevices = devices;
            // selects the devices's back camera by default
            _this.scanner.changeDevice(devices[0]);
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (/back|rear|environment/gi.test(device.label)) {
                    _this.scanner.changeDevice(device);
                    _this.selectedDevice = device;
                    break;
                }
            }
        });
        this.scanner.camerasNotFound.subscribe(function (devices) {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });
        this.scanner.permissionResponse.subscribe(function (answer) {
            _this.hasPermission = answer;
        });
    };
    QrCodeScannerComponent.prototype.handleQrCodeResult = function (resultString) {
        console.log('Result: ', resultString);
        var obj = null;
        try {
            obj = JSON.parse(resultString);
        }
        catch (err) {
            console.log(err);
        }
        if (obj == null)
            return;
        this.router.navigate(['./access-request-details', obj.publicKey, obj.name]);
    };
    QrCodeScannerComponent.prototype.onCancel = function () {
        this.router.navigate(['./access-requests']);
    };
    QrCodeScannerComponent.prototype.onSimulation = function () {
        var obj = {
            publicKey: this.customKey,
            name: "Tester"
        };
        this.handleQrCodeResult(JSON.stringify(obj));
    };
    QrCodeScannerComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scanner'),
        __metadata("design:type", Object)
    ], QrCodeScannerComponent.prototype, "scanner", void 0);
    QrCodeScannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qr-code-scanner',
            template: __webpack_require__(/*! ./qr-code-scanner.component.html */ "./src/app/views/qr-code-scanner/qr-code-scanner.component.html"),
            styles: [__webpack_require__(/*! ./qr-code-scanner.component.css */ "./src/app/views/qr-code-scanner/qr-code-scanner.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QrCodeScannerComponent);
    return QrCodeScannerComponent;
}());



/***/ }),

/***/ "./src/app/views/qr-code/qr-code.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/qr-code/qr-code.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "qrcode {\n  border: 1px solid black;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nimg {\n  max-width: 500px !important;\n  max-height: 500px !important;\n}\n"

/***/ }),

/***/ "./src/app/views/qr-code/qr-code.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/qr-code/qr-code.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <qrcode [qrdata]=\"userData\" [size]=\"1000\" [level]=\"'L'\"></qrcode>\n  <br>\n  <mat-form-field>\n      <textarea matInput placeholder=\"PublicKey\" [value]=\"stateService.user.publicKey\"></textarea>\n  </mat-form-field>\n  <button mat-raised-button (click)=\"back()\">Zurück</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/qr-code/qr-code.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/qr-code/qr-code.component.ts ***!
  \****************************************************/
/*! exports provided: QrCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeComponent", function() { return QrCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrCodeComponent = /** @class */ (function () {
    function QrCodeComponent(router, stateService) {
        this.router = router;
        this.stateService = stateService;
        this.userData = null;
        this.userData = JSON.stringify({
            'publicKey': this.stateService.user.publicKey,
            'name': this.stateService.user.name
        });
    }
    QrCodeComponent.prototype.ngOnInit = function () {
    };
    QrCodeComponent.prototype.back = function () {
        this.router.navigate(['./login']);
    };
    QrCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qr-code',
            template: __webpack_require__(/*! ./qr-code.component.html */ "./src/app/views/qr-code/qr-code.component.html"),
            styles: [__webpack_require__(/*! ./qr-code.component.css */ "./src/app/views/qr-code/qr-code.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], QrCodeComponent);
    return QrCodeComponent;
}());



/***/ }),

/***/ "./src/app/views/treatment-list/treatment-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/treatment-list/treatment-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n    min-height: 18px;\n}"

/***/ }),

/***/ "./src/app/views/treatment-list/treatment-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/treatment-list/treatment-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"datasource\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"date\">\n    <th mat-header-cell *matHeaderCellDef> Datum </th>\n    <td mat-cell *matCellDef=\"let element\" data-label=\"Datum\"> {{element.date | date:'dd.MM.yyyy HH:mm'}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"doctor\">\n    <th mat-header-cell *matHeaderCellDef> Arzt </th>\n    <td mat-cell *matCellDef=\"let element\" data-label=\"Arzt\"> {{element.doctor}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Titel </th>\n    <td mat-cell *matCellDef=\"let element\" data-label=\"Titel\"> {{element.diagnose?.title}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Aktionen </th>\n    <td mat-cell *matCellDef=\"let element\" data-label=\"Aktionen\">\n      <button mat-raised-button (click)=\"onSelected.emit(element)\">Details</button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"['date', 'doctor', 'title', 'actions']\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['date', 'doctor', 'title', 'actions'];\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/views/treatment-list/treatment-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/treatment-list/treatment-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TreatmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentListComponent", function() { return TreatmentListComponent; });
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


var TreatmentListComponent = /** @class */ (function () {
    function TreatmentListComponent() {
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(TreatmentListComponent.prototype, "treatments", {
        set: function (treatments) {
            if (treatments == null)
                return;
            treatments = treatments.sort(function (a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
            this.datasource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](treatments);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreatmentListComponent.prototype, "filter", {
        set: function (filter) {
            filter = filter.trim(); // Remove whitespace
            filter = filter.toLowerCase(); // MatTableDataSource defaults to lowercase matches
            this.datasource.filter = filter;
        },
        enumerable: true,
        configurable: true
    });
    TreatmentListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], TreatmentListComponent.prototype, "treatments", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TreatmentListComponent.prototype, "filter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TreatmentListComponent.prototype, "onSelected", void 0);
    TreatmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treatment-list',
            template: __webpack_require__(/*! ./treatment-list.component.html */ "./src/app/views/treatment-list/treatment-list.component.html"),
            styles: [__webpack_require__(/*! ./treatment-list.component.css */ "./src/app/views/treatment-list/treatment-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatmentListComponent);
    return TreatmentListComponent;
}());



/***/ }),

/***/ "./src/app/views/treatment/treatment.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/treatment/treatment.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    margin-bottom:30px;\n}"

/***/ }),

/***/ "./src/app/views/treatment/treatment.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/treatment/treatment.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"treatment?.diagnose\">\n    <mat-card-title>Diagnose</mat-card-title>\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput placeholder=\"Bezeichnung\" [(ngModel)]=\"treatment?.diagnose.title\" readonly/>\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Beschreibung\" [(ngModel)]=\"treatment?.diagnose.description\" readonly></textarea>\n      </mat-form-field>\n    </mat-card-content>\n</mat-card>\n\n<mat-card *ngIf=\"treatment?.prescription\">\n    <mat-card-title>Rezept</mat-card-title>\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput placeholder=\"Wirkstoff\" [(ngModel)]=\"treatment?.prescription.drug\" readonly/>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Dosierung\" [(ngModel)]=\"treatment?.prescription.dosage\" readonly/>\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Notiz\" [(ngModel)]=\"treatment?.prescription.note\" readonly></textarea>\n      </mat-form-field>\n    </mat-card-content>\n</mat-card>\n\n<mat-card *ngIf=\"treatment?.attestation\">\n    <mat-card-title>Arbeitsunfähigkeit</mat-card-title>\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput placeholder=\"Beginn der Arbeitsunfähigkeit\" [value]=\"treatment?.attestation.from | date:'dd.MM.yyyy'\" readonly />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Ende der Arbeitsunfähigkeit\" [value]=\"treatment?.attestation?.to | date:'dd.MM.yyyy'\" readonly />\n      </mat-form-field>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/treatment/treatment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/treatment/treatment.component.ts ***!
  \********************************************************/
/*! exports provided: TreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentComponent", function() { return TreatmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_treatment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/treatment.model */ "./src/app/models/treatment.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreatmentComponent = /** @class */ (function () {
    function TreatmentComponent() {
    }
    TreatmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_treatment_model__WEBPACK_IMPORTED_MODULE_1__["Treatment"])
    ], TreatmentComponent.prototype, "treatment", void 0);
    TreatmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treatment',
            template: __webpack_require__(/*! ./treatment.component.html */ "./src/app/views/treatment/treatment.component.html"),
            styles: [__webpack_require__(/*! ./treatment.component.css */ "./src/app/views/treatment/treatment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatmentComponent);
    return TreatmentComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    host: "https://health-ledger.herokuapp.com/",
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /home/travis/build/SGSE18/health-ledger-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map