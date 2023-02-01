"use strict";
(self["webpackChunktrending_news_task"] = self["webpackChunktrending_news_task"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/news/news.component */ 4001);
/* harmony import */ var _pages_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/top/top.component */ 2484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





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

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




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

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/news/news.component */ 4001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _pages_top_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/top/top.component */ 2484);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pagination/pagination.component */ 8601);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);















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

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

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

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



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

/***/ 8601:
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


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

/***/ 4001:
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ 8601);





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

/***/ 2484:
/*!********************************************!*\
  !*** ./src/app/pages/top/top.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopComponent": () => (/* binding */ TopComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ 8601);





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

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/// <reference types="@angular/localize" />


function bootstrap() {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
}
if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6344), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map