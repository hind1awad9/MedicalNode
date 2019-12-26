(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container\" style=\"margin-top: 30px;width: 50%;\">\n  <h1 style=\"text-align: center;\">add form</h1>\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n  <button (click)=\"close()\" style=\"width: 12%;border: none;background: transparent;\"> <span class=\"close\">&times;</span></button> \n    <p style=\"text-align: center;\">{{message}}</p>\n  </div>\n\n</div>\n<form [formGroup]=\"dataForm\">\n    <div class=\"form-group\">\n      <label > name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n    \n    </div>\n    <div class=\"form-group\">\n        <label > originalPrice</label>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"originalPrice\">\n      \n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\"> sellingPrice</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"sellingPrice\" >\n       \n      </div>\n      <div class=\"form-group\">\n        <label > code</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"code\" >\n        \n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-4\">\n          <label >peice</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"peice\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputState\">box</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"box\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputZip\">packet</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"packet\" >\n        </div>\n      </div>\n     \n    \n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addProduct()\">Submit</button>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-products/all-products.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-products/all-products.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 20px;\">\n    <div id=\"myModal\" class=\"modal\">\n\n        <!-- Modal content -->\n        <div class=\"modal-content\">\n        <button (click)=\"close()\" style=\"width: 12%;border: none;background: transparent;\"> <span class=\"close\">&times;</span></button> \n          <p style=\"text-align: center;\">{{message}}</p>\n        </div>\n      \n      </div>\n    <table class=\"table table-striped\"  id=\"print-section\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">code</th>\n            <th scope=\"col\">name</th>\n            <th scope=\"col\">unit</th>\n            <th scope=\"col\">originalPrice</th>\n            <th scope=\"col\">sellingPrice</th>\n          <th></th>\n          </tr>\n        </thead>\n        <tbody >\n          <tr *ngFor=\"let x of data;let i=index\">\n            <th >{{i}}</th>\n            <td>{{x.code}}</td>\n            <td>{{x.name}}</td>\n            <td>{{x.inStock.peice}}</td>\n            <td>{{x.originalPrice}}</td>\n            <td>{{x.sellingPrice}}</td>\n            <td>\n                <button (click)=\" onClick(x._id)\"  class=\"btn btn-primary\" style=\"margin-right: 20px;\">update</button> \n                <button (click)=\"remove(x._id)\"  class=\"btn btn-primary\">remove</button> \n            </td>\n          </tr>\n          \n          \n        </tbody>\n      \n      </table>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card text-center\" >\r\n    <div class=\"card-header\">\r\n      <ul class=\"nav nav-tabs card-header-tabs\">\r\n        <li class=\"nav-item\">\r\n            <button routerLink=\"\" class=\"nav-link active\" >add</button>   \r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button routerLink=\"/allProducts\" class=\"nav-link\" >all</button>   \r\n      </li>\r\n        <li class=\"nav-item\">\r\n       <button routerLink=\"/bills\" class=\"nav-link\" >bills</button>   \r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <button routerLink=\"/print\" class=\"nav-link\" >print</button>   \r\n           </li>\r\n        \r\n      </ul>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/bills.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bills/bills.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"form\" style=\"margin-top: 30px;\">\n  <!-- <input type=\"checkbox\" formControlName=\"published\"> Published -->\n  <div style=\"margin-left: 350px;\">\n\n    <!-- <h2>Credentials</h2> -->\n    <button (click)=\"addCreds()\" style=\"margin-bottom: 30px;\">Add</button>\n\n    <div formArrayName=\"productInvoice\" *ngFor=\"let creds of form.controls.productInvoice?.value; let i = index\">\n      <!-- <ng-container [formGroupName]=\"i\"> -->\n        <div id=\"{{i}}\">\n        <div class=\"form-row\" [formGroupName]=\"i\" >\n          <div class=\"form-group col-md-2\">\n            <label >name</label>\n            <select  class=\"form-control\" formControlName=\"product\" (change)=\"test($event)\">\n              <option selected *ngFor=\"let x of data;\" [value]=\"x._id\">{{x.name}}</option>\n             \n            </select>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputState\">productUnit</label>\n            <input type=\"text\" class=\"form-control\" disabled  formControlName=\"productUnit\" value=\"peice\" placeholder=\"peice\">\n          </div>\n          <div class=\"form-group col-md-2\">\n            <label for=\"inputZip\">quantity</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"quantity\" >\n          </div>\n          <div class=\"form-group col-md-2\">\n              <label for=\"inputZip\">taxVat</label>\n              <input type=\"text\" class=\"form-control\"  formControlName=\"taxVat\" >\n            </div>\n            <div class=\"form-group col-md-2\">\n             \n            <button type=\"submit\" class=\"btn btn-primary\"  style=\"margin-top: 29px;\" (click)=\"delete(i)\"   >X</button>\n          </div>\n\n      </div>\n    </div>\n      <!-- </ng-container> -->\n    </div>\n    <button (click)=\"save()\">save</button>\n  </div>\n</form>\n\n<!-- <div class=\"container\" style=\"margin-top: 30px;\">\n<input value=\"1\" #number type=\"number\" style=\"display: none;\">\n<form [formGroup]=\"dataForm\" *ngFor=\"let i of forms;let inx=index\" >\n\n<div class=\"form-row\" id=\"{{inx}}\">\n    <div class=\"form-group col-md-2\">\n      <label >name</label>\n      <select  class=\"form-control\" formControlName=\"_id\" id=\"{{inx}}\" (change)=\"test($event)\">\n        <option selected *ngFor=\"let i of data;\" [value]=\"i._id\"  >{{i.name}}</option>\n       \n      </select>\n    </div>\n    <div class=\"form-group col-md-2\">\n      <label for=\"inputState\">productUnit</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputCity\"  formControlName=\"productUnit\">\n    </div>\n    <div class=\"form-group col-md-2\">\n      <label for=\"inputZip\">quantity</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"quantity\" >\n    </div>\n    <div class=\"form-group col-md-2\">\n        <label for=\"inputZip\">taxVat</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"taxVat\" >\n      </div>\n      <div class=\"form-group col-md-2\">\n       \n      <button type=\"submit\" class=\"btn btn-primary\"  style=\"margin-top: 29px;\" (click)=\"delete(inx)\" id=\"{{i._id}}\"  *ngIf=\"i > 1\">X</button>\n    </div>\n</div>\n\n \n</form>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"number.value = 2\"  (click)=\"add()\">Add</button>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"addBills()\">Submit</button>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/print-one/print-one.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/print-one/print-one.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 20px;\">\n    <table class=\"table table-striped\" >\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">code</th>\n            <th scope=\"col\">name</th>\n            <th scope=\"col\">unit</th>\n            <th scope=\"col\">taxVat</th>\n            <th scope=\"col\">total</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody >\n          <tr *ngFor=\"let y of data?.Invoices;let i=index\">\n            <th >{{i}}</th>\n            <td>{{y.product.code}}</td>\n            <td>{{y.product.name}}</td>\n            <td>{{y.quantity}}</td>\n            <td>{{y.taxVat}}</td>\n            <td>{{y.totalPrice}}</td>\n            <td></td>\n          </tr>\n          <tr>\n              <th></th>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n           <td>{{data?.invoiceTotalPrice}}</td> \n          </tr>\n        \n        </tbody>\n      \n      </table>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/print/print.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/print/print.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 20px;\">\n<table class=\"table table-striped\" *ngFor=\"let x of data;let z=index\" id=\"print-section\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">code</th>\n        <th scope=\"col\">name</th>\n        <th scope=\"col\">unit</th>\n        <th scope=\"col\">taxVat</th>\n        <th scope=\"col\">total</th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody >\n      <tr *ngFor=\"let y of x.Invoices;let i=index\">\n        <th >{{i}}</th>\n        <td>{{y.product.code}}</td>\n        <td>{{y.product.name}}</td>\n        <td>{{y.quantity}}</td>\n        <td>{{y.taxVat}}</td>\n        <td>{{y.totalPrice}}</td>\n        <td></td>\n      </tr>\n      <tr>\n          <th></th>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n       <td>{{x.invoiceTotalPrice}}</td> \n      </tr>\n      <button (click)=\"onClick(x._id)\"  class=\"btn btn-primary\">print</button> \n    </tbody>\n  \n  </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 30px;width: 50%;\">\n    <h1 style=\"text-align: center;\">update form</h1>\n  <!-- The Modal -->\n  <div id=\"myModal\" class=\"modal\">\n  \n    <!-- Modal content -->\n    <div class=\"modal-content\">\n    <button (click)=\"close()\" style=\"width: 12%;border: none;background: transparent;\"> <span class=\"close\">&times;</span></button> \n      <p style=\"text-align: center;\">{{message}}</p>\n    </div>\n  \n  </div>\n  <form [formGroup]=\"dataForm\">\n      <div class=\"form-group\">\n        <label > name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" value=\"{{data?.name}}\">\n      \n      </div>\n      <div class=\"form-group\">\n          <label > originalPrice</label>\n          <input type=\"text\"  class=\"form-control\" formControlName=\"originalPrice\" value=\"{{data?.originalPrice}}\">\n        \n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\"> sellingPrice</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"sellingPrice\" value=\"{{data?.sellingPrice}}\">\n         \n        </div>\n        <div class=\"form-group\">\n          <label > code</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"code\" value=\"{{data?.code}}\">\n          \n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label >peice</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"peice\" value=\"{{data?.inStock?.peice}}\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputState\">box</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"box\" value=\"{{data?.inStock?.box}}\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputZip\">packet</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\" formControlName=\"packet\" value=\"{{data?.inStock?.packet}}\" >\n          </div>\n        </div>\n       \n      \n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"update(data?._id)\">Submit</button>\n    </form>\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The Modal (background) */\r\n.modal {\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 36%;\r\n    top: 30%;\r\n    width: 26%;\r\n    height: 100%;\r\n    overflow: auto;\r\n   \r\n  }\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n/* The Close Button */\r\n.close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n.close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n.card-body\r\n  {\r\n    text-align: left;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    background-color: azure;\r\n    margin-top: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjOztFQUVoQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0VBQ2xFO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0FBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMzYlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB3aWR0aDogMjYlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2FyZC1ib2R5XHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AddProductComponent = class AddProductComponent {
    constructor(_http, _formBuilder) {
        this._http = _http;
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.dataForm = this._formBuilder.group({
            name: [''],
            originalPrice: [''],
            sellingPrice: [''],
            peice: [''],
            box: [''],
            packet: [''],
            code: ['']
        });
    }
    addProduct() {
        this._http.post('http://localhost/api/product/add', this.dataForm.value).subscribe((res) => {
            if (res.success) {
                console.log('res', res);
                this.message = res.message;
                document.getElementById("myModal").style.display = "block";
            }
            else {
                this.message = 'false';
                document.getElementById("myModal").style.display = "block";
            }
        });
        console.log('done');
    }
    close() {
        document.getElementById("myModal").style.display = "none";
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")).default]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/all-products/all-products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/all-products/all-products.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The Modal (background) */\r\n.modal {\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 36%;\r\n    top: 30%;\r\n    width: 26%;\r\n    height: 100%;\r\n    overflow: auto;\r\n   \r\n  }\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n/* The Close Button */\r\n.close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n.close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n.card-body\r\n  {\r\n    text-align: left;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    background-color: azure;\r\n    margin-top: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7O0VBRWhCO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztJQUNwRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7RUFDbEU7QUFFQSxxQkFBcUI7QUFDckI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFFQTs7SUFFRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDM2JTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgd2lkdGg6IDI2JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNhcmQtYm9keVxyXG4gIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/all-products/all-products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/all-products/all-products.component.ts ***!
  \********************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AllProductsComponent = class AllProductsComponent {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.data = [];
    }
    ngOnInit() {
        this._http.get('http://localhost/api/product').subscribe((res) => {
            if (res.success) {
                console.log('res', res);
                this.data = res.message;
                console.log('res', this.data);
            }
            else {
                console.log('res', res);
                // this.message = 'false';
                // document.getElementById("myModal").style.display = "block";
            }
        });
    }
    remove(id) {
        this._http.delete(`http://localhost/api/product/remove/${id}`).subscribe((res) => {
            if (res.success) {
                console.log('res', res);
                this.data = this.data.filter((item) => {
                    return item._id != id;
                });
                this.message = res.message;
                document.getElementById("myModal").style.display = "block";
                // console.log('res', this.data);
            }
            else {
                console.log('res', res);
                this.message = 'false';
                document.getElementById("myModal").style.display = "block";
            }
        });
    }
    onClick(billID) {
        this._router.navigate(['/updateProduct', billID]);
    }
    close() {
        document.getElementById("myModal").style.display = "none";
    }
};
AllProductsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AllProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-products/all-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-products.component.css */ "./src/app/all-products/all-products.component.css")).default]
    })
], AllProductsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bills/bills.component */ "./src/app/bills/bills.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _print_one_print_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print-one/print-one.component */ "./src/app/print-one/print-one.component.ts");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-products/all-products.component */ "./src/app/all-products/all-products.component.ts");
/* harmony import */ var _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-product/update-product.component */ "./src/app/update-product/update-product.component.ts");










const routes = [
    { path: '', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"] },
    { path: 'bills', component: _bills_bills_component__WEBPACK_IMPORTED_MODULE_5__["BillsComponent"] },
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_6__["PrintComponent"] },
    { path: 'allProducts', component: _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_8__["AllProductsComponent"] },
    { path: 'print/:id', component: _print_one_print_one_component__WEBPACK_IMPORTED_MODULE_7__["PrintOneComponent"] },
    { path: 'updateProduct/:id', component: _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_9__["UpdateProductComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'medicalInvoice';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bills/bills.component */ "./src/app/bills/bills.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");
/* harmony import */ var _print_one_print_one_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./print-one/print-one.component */ "./src/app/print-one/print-one.component.ts");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-products/all-products.component */ "./src/app/all-products/all-products.component.ts");
/* harmony import */ var _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-product/update-product.component */ "./src/app/update-product/update-product.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
            _bills_bills_component__WEBPACK_IMPORTED_MODULE_8__["BillsComponent"],
            _print_print_component__WEBPACK_IMPORTED_MODULE_9__["PrintComponent"],
            _print_one_print_one_component__WEBPACK_IMPORTED_MODULE_11__["PrintOneComponent"],
            _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_12__["AllProductsComponent"],
            _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_13__["UpdateProductComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bills/bills.component.css":
/*!*******************************************!*\
  !*** ./src/app/bills/bills.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxzL2JpbGxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/bills/bills.component.ts":
/*!******************************************!*\
  !*** ./src/app/bills/bills.component.ts ***!
  \******************************************/
/*! exports provided: BillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsComponent", function() { return BillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let BillsComponent = class BillsComponent {
    constructor(_http, _formBuilder) {
        this._http = _http;
        this._formBuilder = _formBuilder;
        this.data = [];
        this.details = [];
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            productInvoice: this._formBuilder.array([]),
        });
        this._http.get('http://localhost/api/product').subscribe((res) => {
            if (res.success) {
                console.log('res', res.message);
                this.data = res.message;
                console.log('res', this.data);
                //   this.message = res.message;
                //  document.getElementById("myModal").style.display = "block";
            }
            else {
                console.log('res', res);
                // this.message = 'false';
                // document.getElementById("myModal").style.display = "block";
            }
        });
        console.log('done');
        // dynamicForm(selectedTarget, plusSelector, minusSelector, options)
    }
    test(event) {
        this.value = event.target.value;
        console.log('value', event.target.value);
    }
    delete(i) {
        console.log('this.form', this.form.value.productInvoice);
        this.form.value.productInvoice = this.form.value.productInvoice.filter((item, index) => {
            //  console.log('this.details', index, 'kkk', item.id)
            if (i == index) {
                console.log('this.details: ', i, 'index: ', index);
                const control = this.form.controls['productInvoice'];
                control.removeAt(i);
                //return this.form.value.productInvoice.splice(index, 1)
            }
        });
    }
    addCreds() {
        const creds = this.form.controls.productInvoice;
        creds.push(this._formBuilder.group({
            product: '',
            productUnit: '',
            quantity: '',
            taxVat: '',
        }));
        // console.log('creds',creds);
    }
    save() {
        console.log(' this.details', this.form.value);
        this._http.post('http://localhost/api/invoice/add', this.form.value).subscribe((response) => {
            if (response.success) {
                this.form.value.productInvoice = [];
                console.log('response', response);
            }
        });
    }
};
BillsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
BillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/bills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bills.component.css */ "./src/app/bills/bills.component.css")).default]
    })
], BillsComponent);



/***/ }),

/***/ "./src/app/print-one/print-one.component.css":
/*!***************************************************!*\
  !*** ./src/app/print-one/print-one.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50LW9uZS9wcmludC1vbmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/print-one/print-one.component.ts":
/*!**************************************************!*\
  !*** ./src/app/print-one/print-one.component.ts ***!
  \**************************************************/
/*! exports provided: PrintOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintOneComponent", function() { return PrintOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PrintOneComponent = class PrintOneComponent {
    constructor(_http, route) {
        this._http = _http;
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log('lklkll', params.get('id'));
            const id = params.get('id');
            console.log(id);
            this._http.get(`http://localhost/api/invoice/details/${id}`).subscribe((res) => {
                if (res.success) {
                    console.log('res', res);
                    this.data = res.message;
                    console.log('res', this.data.Invoices);
                }
                else {
                    console.log('res', res);
                    // this.message = 'false';
                    // document.getElementById("myModal").style.display = "block";
                }
            });
        });
    }
};
PrintOneComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PrintOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-print-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./print-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/print-one/print-one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./print-one.component.css */ "./src/app/print-one/print-one.component.css")).default]
    })
], PrintOneComponent);



/***/ }),

/***/ "./src/app/print/print.component.css":
/*!*******************************************!*\
  !*** ./src/app/print/print.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50L3ByaW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PrintComponent = class PrintComponent {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.x = true;
        this.data = [];
    }
    ngOnInit() {
        this._http.get('http://localhost/api/invoice').subscribe((res) => {
            if (res.success) {
                console.log('res', res);
                this.data = res.message;
                console.log('res', this.data);
            }
            else {
                console.log('res', res);
                // this.message = 'false';
                // document.getElementById("myModal").style.display = "block";
            }
        });
    }
    onClick(billID) {
        this._router.navigate(['/print', billID]);
        this.x == false;
    }
};
PrintComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-print',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/print/print.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./print.component.css */ "./src/app/print/print.component.css")).default]
    })
], PrintComponent);



/***/ }),

/***/ "./src/app/update-product/update-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-product/update-product.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The Modal (background) */\r\n.modal {\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 36%;\r\n    top: 30%;\r\n    width: 26%;\r\n    height: 100%;\r\n    overflow: auto;\r\n   \r\n  }\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto; /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n  }\r\n/* The Close Button */\r\n.close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n.close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n.card-body\r\n  {\r\n    text-align: left;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    background-color: azure;\r\n    margin-top: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXByb2R1Y3QvdXBkYXRlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjOztFQUVoQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0VBQ2xFO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0FBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wcm9kdWN0L3VwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMzYlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB3aWR0aDogMjYlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2FyZC1ib2R5XHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/update-product/update-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-product/update-product.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductComponent", function() { return UpdateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let UpdateProductComponent = class UpdateProductComponent {
    constructor(_http, route, _formBuilder) {
        this._http = _http;
        this.route = route;
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.dataForm = this._formBuilder.group({
            name: [''],
            originalPrice: [''],
            sellingPrice: [''],
            peice: [''],
            box: [''],
            packet: [''],
            code: ['']
        });
        this.route.paramMap.subscribe(params => {
            console.log('lklkll', params.get('id'));
            const id = params.get('id');
            console.log(id);
            this._http.get(`http://localhost/api/product/details/${id}`).subscribe((res) => {
                if (res.success) {
                    console.log('res', res);
                    this.data = res.message;
                    // console.log('res', this.data.Invoices);
                }
                else {
                    console.log('res', res);
                    // this.message = 'false';
                    // document.getElementById("myModal").style.display = "block";
                }
            });
        });
    }
    clean(obj) {
        let objectCopy = Object.assign({}, obj);
        for (var propName in objectCopy) {
            if (objectCopy[propName] === null || objectCopy[propName] === undefined || objectCopy[propName] === '') {
                delete objectCopy[propName];
            }
        }
        return objectCopy;
    }
    update(id) {
        let object = {
            name: this.dataForm.get('name').value,
            code: this.dataForm.get('code').value,
            sellingPrice: this.dataForm.get('sellingPrice').value,
            originalPrice: this.dataForm.get('originalPrice').value,
            peice: this.dataForm.get('peice').value
        };
        let final = this.clean(object);
        this._http.put(`http://localhost/api/product/edit/${id}`, final).subscribe((res) => {
            if (res.success) {
                console.log('res', res);
                this.message = res.message;
                document.getElementById("myModal").style.display = "block";
                // console.log('res', this.data);
            }
            else {
                console.log('res', res);
                this.message = 'false';
                document.getElementById("myModal").style.display = "block";
            }
        });
    }
    close() {
        document.getElementById("myModal").style.display = "none";
    }
};
UpdateProductComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
UpdateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-product/update-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-product.component.css */ "./src/app/update-product/update-product.component.css")).default]
    })
], UpdateProductComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\medicalInvoice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);