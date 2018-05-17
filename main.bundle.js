webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fipe_api_service__ = __webpack_require__("./src/app/fipe-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__fipe_api_service__["a" /* FipeApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fipe-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FipeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FipeApiService = /** @class */ (function () {
    function FipeApiService(http) {
        this.http = http;
    }
    FipeApiService.prototype.getMarcas = function () {
        return this.http.get('http://fipeapi.appspot.com/api/1/carros/marcas.json');
    };
    FipeApiService.prototype.getModelo = function (id_marca) {
        return this.http.get('http://fipeapi.appspot.com/api/1/carros/veiculos/' + id_marca + '.json');
    };
    FipeApiService.prototype.getAno = function (id_marca, id_modelo) {
        //console.log('http://fipeapi.appspot.com/api/1/carros/veiculo/'+id_marca+'/'+id_modelo+'.json');
        return this.http.get('http://fipeapi.appspot.com/api/1/carros/veiculo/' + id_marca + '/' + id_modelo + '.json');
    };
    FipeApiService.prototype.getDados = function (id_marca, id_modelo, id_ano) {
        return this.http.get('http://fipeapi.appspot.com/api/1/carros/veiculo/' + id_marca + '/' + id_modelo + '/' + id_ano + '.json');
    };
    FipeApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FipeApiService);
    return FipeApiService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row titulo\">\n        <div class=\"col-lg-6 col-lg-offset-3\" >\n          <h1 class=\"text-center \">Consulta Tabela Fipe</h1>\n          \n          </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row dados\">\n      <div class=\"col-md-4\">\n        <label>SELECIONE A MARCA</label>\n        <select class=\"form-control\"  [(ngModel)]=\"marcaSelecionada\" (ngModelChange)=\"selectMarca($event)\" id=\"sel2\">\n          <option >--Selecione--</option>\n          <option *ngFor=\"let marca of marcas\" [ngValue]=\"marca\">\n            {{marca.name}}\n          </option>\n        </select>\n      </div>\n      \n      <div class=\"col-md-4\">\n        <label>SELECIONE O MODELO</label>\n        <select class=\"form-control\" [(ngModel)]=\"modeloSelecionado\" (ngModelChange)=\"selectModelo($event)\" id=\"sel2\">\n          <option >--Selecione--</option>\n          <option *ngFor=\"let modelo of modelos\" [ngValue]=\"modelo\">\n            {{modelo.name}}\n          </option>\n        </select>\n      </div>\n    \n      \n      <div class=\"col-md-4\">\n          <label>SELECIONE O ANO</label>\n          <select class=\"form-control\" [(ngModel)]=\"anoSelecionado\" (ngModelChange)=\"selectAno($event)\" id=\"sel2\">\n            <option >--Selecione--</option>\n            <option *ngFor=\"let ano of anos\" [ngValue]=\"ano\">\n              {{ano.name}}\n            </option>\n          </select>\n      </div>\n    </div>\n\n\n  \n    <div class=\"container\">\n          <div class=\"dados2\">\n              <div class=\"well\">\n            <legend>Dados Fipe</legend>\n            <div class=\"row\">\n                  <div class=\"form-group col-md-4\">\n                    <label>Marca</label>\n                    <input type=\"text\" [(ngModel)]=\"marca\" class=\"form-control\" readonly/>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <label>Modelo</label>\n                      <input type=\"text\" [(ngModel)]=\"modelo\" class=\"form-control\" readonly/>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <label>Ano</label>\n                    <input type=\"text\" [(ngModel)]=\"ano\" class=\"form-control\" readonly/>\n                  </div>\n            </div>\n    \n            <div class=\"row\">\n                <div class=\"form-group col-md-3\">\n                  <label>Código Fipe</label>\n                  <input type=\"text\" [(ngModel)]=\"dado.fipe_codigo\" class=\"form-control\"  readonly/>\n                </div>\n                <div class=\"form-group col-md-3\">\n                  <label>Preço</label>\n                  <input type=\"text\" [(ngModel)]=\"dado.preco\" class=\"form-control\" readonly/>\n                </div>\n                <div class=\"form-group col-md-3\">\n                  <label>Refer&ecirc;ncia</label>\n                  <input type=\"text\" [(ngModel)]=\"dado.referencia\" class=\"form-control\" readonly/>\n                </div>\n                <div class=\"form-group col-md-3\">\n                  <label>Combustivel</label>\n                  <input type=\"text\" [(ngModel)]=\"dado.combustivel\" class=\"form-control\"  readonly/>\n                </div>\n            </div>\n          </div>\n        \n      </div>    \n    </div>    \n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fipe_api_service__ = __webpack_require__("./src/app/fipe-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(FipeApi) {
        var _this = this;
        this.FipeApi = FipeApi;
        this.marcas = Array();
        this.modelos = Array();
        this.anos = Array();
        this.dado = "";
        this.FipeApi.getMarcas()
            .subscribe(function (resposta) { return _this.marcas = resposta; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.selectMarca = function (marca) {
        this.marcaSelect = marca.id;
        this.marca = marca.name;
        this.obterModelo(this.marcaSelect);
        //console.log(marca);
    };
    HomeComponent.prototype.selectModelo = function (modelo) {
        this.modeloSelect = modelo.id;
        this.modelo = modelo.name;
        this.obterAno(this.marcaSelect, this.modeloSelect);
        // console.log(modelo);
    };
    HomeComponent.prototype.selectAno = function (ano) {
        this.anoSelect = ano.id;
        this.ano = ano.name;
        this.obterDados(this.marcaSelect, this.modeloSelect, this.anoSelect);
        //console.log(marca);
    };
    //Consultas
    HomeComponent.prototype.obterModelo = function (marcaSelecionada) {
        var _this = this;
        this.FipeApi.getModelo(marcaSelecionada)
            .subscribe(function (resposta) { return _this.modelos = resposta; });
    };
    HomeComponent.prototype.obterAno = function (marcaSelecionada, modeloSelecionado) {
        var _this = this;
        this.FipeApi.getAno(marcaSelecionada, modeloSelecionado)
            .subscribe(function (resposta) { return _this.anos = resposta; });
    };
    HomeComponent.prototype.obterDados = function (marcaSelecionada, modeloSelecionado, anoSelecionado) {
        var _this = this;
        this.FipeApi.getDados(marcaSelecionada, modeloSelecionado, anoSelecionado)
            .subscribe(function (resposta) { return _this.dado = resposta; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__fipe_api_service__["a" /* FipeApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map