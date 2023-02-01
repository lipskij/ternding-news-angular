/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34621:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/news/news.component */ 35091);
/* harmony import */ var _pages_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/top/top.component */ 47920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);





const routes = [{
  path: '',
  component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent
}, {
  path: 'top',
  component: _pages_top_top_component__WEBPACK_IMPORTED_MODULE_1__.TopComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 59229:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 72246);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 1331);




class AppComponent {
  constructor() {
    this.title = 'hacker-news-angular';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header")(2, "router-outlet")(3, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63370:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 34621);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 72246);
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/news/news.component */ 35091);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3197);
/* harmony import */ var _pages_top_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/top/top.component */ 47920);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 12693);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 63143);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ 1331);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _pages_news_news_component__WEBPACK_IMPORTED_MODULE_3__.NewsComponent, _pages_top_top_component__WEBPACK_IMPORTED_MODULE_4__.TopComponent, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__.PaginationComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 84362:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 78163);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 63370);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);




class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 1331:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 3,
  vars: 0,
  consts: [["href", "https://github.com/lipskij/trending-news-angular", "target", "_blank", "rel", "noopener", 1, "d-flex", "justify-content-center", "text-decoration-none", "p-4", "text-dark"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Made with \u2764\uFE0F by Emil Lipskij");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 72246:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3197);



const _c0 = function () {
  return ["/"];
};
const _c1 = function () {
  return {
    page: 1
  };
};
const _c2 = function () {
  return ["/top"];
};
class HeaderComponent {
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 13,
  vars: 12,
  consts: [[1, "align-items-center"], [1, "d-flex", "justify-content-center", "bg-dark"], [1, "text-white", "pt-4"], [1, ""], ["ngbNav", "", 1, "nav-tabs", "bg-dark"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", "", 3, "routerLink", "state"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hacker news");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4, 5)(7, "li", 6)(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trending News");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Top News");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("activated", ctx.currentUrl === "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("activated", ctx.currentUrl === "/top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink],
  styles: [".nav-link[_ngcontent-%COMP%] {\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjZmZmO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 12693:
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 97191);


function PaginationComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.selectPageNumber(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00AB\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.currentPage === 1 ? "page-item disabled" : "page-item");
  }
}
function PaginationComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.currentPage === 1 ? "page-item disabled" : "page-item");
  }
}
function PaginationComponent_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_ng_container_4_li_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.selectPageNumber(i_r10 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r11.currentPage === i_r10 + 1 ? "page-item active" : "page-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10 + 1, " ");
  }
}
function PaginationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_ng_container_4_li_1_Template, 3, 3, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 + 1 >= ctx_r2.currentPage - ctx_r2.maxSize && i_r10 + 1 <= ctx_r2.currentPage + ctx_r2.maxSize);
  }
}
function PaginationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.currentPage === ctx_r3.totalPages.length ? "page-item disabled" : "page-item");
  }
}
function PaginationComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.selectPageNumber(ctx_r18.totalPages.length));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00BB\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.currentPage === ctx_r4.totalPages.length ? "page-item disabled" : "page-item");
  }
}
class PaginationComponent {
  constructor() {
    this.collectionSize = 0;
    this.pageSize = 5;
    this.currentPage = 1;
    this.maxSize = 2;
    this.firstLastButtons = false;
    this.nextPreviousButtons = true;
    this.small = false;
    this.totalPages = [];
    // do nothing
  }

  ngOnInit() {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface, @typescript-eslint/no-unused-vars
  ngOnChanges(changes) {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }
  selectPageNumber(pageNumber) {
    this.currentPage = pageNumber;
  }
  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }
  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || PaginationComponent)();
};
PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaginationComponent,
  selectors: [["app-pagination"]],
  inputs: {
    collectionSize: "collectionSize",
    pageSize: "pageSize",
    currentPage: "currentPage",
    maxSize: "maxSize",
    firstLastButtons: "firstLastButtons",
    nextPreviousButtons: "nextPreviousButtons",
    small: "small"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 7,
  consts: [[3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 2, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 2, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 2, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_li_6_Template, 3, 2, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.small ? "pagination pagination-sm" : "pagination");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstLastButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextPreviousButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextPreviousButtons);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstLastButtons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #212529;\n  border-color: #212529;\n  color: #fff;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  color: #212529;\n}\n\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBib3JkZXItY29sb3I6ICMyMTI1Mjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGFnZS1saW5rIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 35091:
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 81534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ 12693);





function NewsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function NewsComponent_div_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const t_r3 = ctx_r7.$implicit;
    const i_r4 = ctx_r7.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", t_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r4 + 1, ". ", t_r3.title, "");
  }
}
function NewsComponent_div_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const t_r3 = ctx_r8.$implicit;
    const i_r4 = ctx_r8.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", t_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", (_r2.currentPage - 1) * 10 + (i_r4 + 1), ". ", t_r3.title, "");
  }
}
function NewsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsComponent_div_2_a_1_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NewsComponent_div_2_a_2_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.currentPage > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", t_r3.url, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", t_r3.score, " points");
  }
}
class NewsComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.topIds = [];
    this.tableContent = [];
    this.loading = true;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.getTopIds();
      this.getTopNews();
    }, 1);
  }
  getTopIds() {
    const localData = localStorage.getItem('topNews');
    if (localData) {
      this.loading = false;
      return this.tableContent = JSON.parse(localData);
    }
    this.apiService.getTopIds().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(ids => this.apiService.getItems(ids))).subscribe(data => {
      this.loading = false;
      localData ? localStorage.setItem('topNews', JSON.stringify(data)) : null;
      this.tableContent = data;
    });
  }
  getTopNews() {
    this.apiService.getItems(this.topIds).subscribe(data => this.tableContent = data);
  }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) {
  return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
NewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NewsComponent,
  selectors: [["app-news"]],
  decls: 7,
  vars: 10,
  consts: [["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "d-flex flex-column text-left m-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [3, "collectionSize", "pageSize", "firstLastButtons", "maxSize"], ["pagination", ""], ["role", "status", 1, "spinner-border", "text-secondary", "m-5"], [1, "sr-only"], [1, "d-flex", "flex-column", "text-left", "m-4"], ["target", "_blank", "class", "mb-2 text-dark", 3, "href", 4, "ngIf"], [1, "text-secondary", "text-truncate"], [1, "text-secondary"], ["target", "_blank", 1, "mb-2", "text-dark", 3, "href"]],
  template: function NewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NewsComponent_div_1_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NewsComponent_div_2_Template, 8, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-pagination", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 6, ctx.tableContent, (_r2.currentPage - 1) * _r2.pageSize, _r2.currentPage * _r2.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collectionSize", ctx.tableContent.length)("pageSize", 10)("firstLastButtons", true)("maxSize", 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 47920:
/*!********************************************!*\
  !*** ./src/app/pages/top/top.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopComponent": () => (/* binding */ TopComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 81534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ 12693);





function TopComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TopComponent_div_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const t_r3 = ctx_r7.$implicit;
    const i_r4 = ctx_r7.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", t_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r4 + 1, ". ", t_r3.title, "");
  }
}
function TopComponent_div_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const t_r3 = ctx_r8.$implicit;
    const i_r4 = ctx_r8.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", t_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", (_r2.currentPage - 1) * 10 + (i_r4 + 1), ". ", t_r3.title, "");
  }
}
function TopComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TopComponent_div_2_a_1_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TopComponent_div_2_a_2_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.currentPage > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", t_r3.url, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", t_r3.score, " points");
  }
}
class TopComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.topIds = [];
    this.tableContent = [];
    this.loading = true;
  }
  ngOnInit() {
    this.getTopIds();
    this.getTopNews();
  }
  getTopIds() {
    this.apiService.getTopIds().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(ids => this.apiService.getItems(ids))).subscribe(data => {
      data.sort((a, b) => b.score - a.score);
      this.loading = false;
      this.tableContent = data;
    });
  }
  getTopNews() {
    this.apiService.getItems(this.topIds).subscribe(data => this.tableContent = data);
  }
}
TopComponent.ɵfac = function TopComponent_Factory(t) {
  return new (t || TopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
TopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TopComponent,
  selectors: [["app-news"]],
  decls: 7,
  vars: 10,
  consts: [["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "d-flex flex-column text-left p-4 mt-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [3, "collectionSize", "pageSize", "firstLastButtons", "maxSize"], ["pagination", ""], ["role", "status", 1, "spinner-border", "text-secondary", "m-5"], [1, "sr-only"], [1, "d-flex", "flex-column", "text-left", "p-4", "mt-2"], ["target", "_blank", "class", "mb-2 text-dark", 3, "href", 4, "ngIf"], [1, "text-secondary", "text-truncate"], [1, "text-secondary"], ["target", "_blank", 1, "mb-2", "text-dark", 3, "href"]],
  template: function TopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TopComponent_div_1_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TopComponent_div_2_Template, 8, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-pagination", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 6, ctx.tableContent, (_r2.currentPage - 1) * _r2.pageSize, _r2.currentPage * _r2.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collectionSize", ctx.tableContent.length)("pageSize", 10)("firstLastButtons", true)("maxSize", 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
  encapsulation: 2
});

/***/ }),

/***/ 81534:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);



class ApiService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = `https://hacker-news.firebaseio.com/v0/topstories.json`;
    this.NEWS_URL = `https://hacker-news.firebaseio.com/v0/`;
  }
  getItems(ids) {
    ids = ids.slice(0, 100);
    const observables = ids.map(id => this.http.get(`${this.NEWS_URL}item/${id}.json`));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(observables);
  }
  getTopIds() {
    return this.http.get(this.BASE_URL);
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 23149:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 84362);


/***/ }),

/***/ 53226:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "renderModule": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 29810);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 65663);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 1898);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ 57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ 71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 23149);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 78163);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/trending-news-task/browser');
  const indexHtml = (0,fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule,
    inlineCriticalCss: false // <- added
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(76353)))
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(73482)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(53226)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendor" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map