(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ProjectWorkspace\Angular\VishalKhandelwal.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "image-active": a0 }; };
function CarouselComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r5.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r5.imageAlt)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedIndex === i_r6));
} }
const _c1 = function (a0) { return { "active": a0 }; };
function CarouselComponent_div_0_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_0_div_2_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.selectImage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r7.selectedIndex === i_r9));
} }
function CarouselComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_0_div_2_span_1_Template, 1, 3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.images);
} }
function CarouselComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_0_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onPrevClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onNextClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_0_img_1_Template, 1, 5, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_div_0_button_3_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_div_0_button_4_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.indicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.controls);
} }
class CarouselComponent {
    constructor() {
        this.images = [];
        this.indicators = true;
        this.controls = true;
        this.autoSlide = false;
        this.slideInterval = 3000; // Default to 3 second
        this.selectedIndex = 0;
    }
    ngOnInit() {
        if (this.autoSlide) {
            this.autoSlideImages();
        }
    }
    //Changes slide in every 3 second
    autoSlideImages() {
        setInterval(() => {
            this.onNextClick();
        }, this.slideInterval);
    }
    //sets index of image on dot/indicator click
    selectImage(index) {
        this.selectedIndex = index;
    }
    onPrevClick() {
        if (this.selectedIndex === 0) {
            this.selectedIndex = this.images.length - 1;
        }
        else {
            this.selectedIndex--;
        }
    }
    onNextClick() {
        if (this.selectedIndex === this.images.length - 1) {
            this.selectedIndex = 0;
        }
        else {
            this.selectedIndex++;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { images: "images", indicators: "indicators", controls: "controls", autoSlide: "autoSlide", slideInterval: "slideInterval" }, decls: 1, vars: 1, consts: [["class", "carousel-container", 4, "ngIf"], [1, "carousel-container"], ["class", "fade", 3, "src", "alt", "ngClass", 4, "ngFor", "ngForOf"], ["class", "carousel-dot-container", 4, "ngIf"], ["class", "btn-carousel btn-prev", 3, "click", 4, "ngIf"], ["class", "btn-carousel btn-next", 3, "click", 4, "ngIf"], [1, "fade", 3, "src", "alt", "ngClass"], [1, "carousel-dot-container"], ["class", "dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dot", 3, "ngClass", "click"], [1, "btn-carousel", "btn-prev", 3, "click"], [1, "fas", "fa-arrow-circle-left", "icon-carousel", "icon-prev"], [1, "btn-carousel", "btn-next", 3, "click"], [1, "fas", "fa-arrow-circle-right", "icon-carousel", "icon-next"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images && ctx.images.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".carousel-container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 700px;\r\n    border-radius: 15px;\r\n    box-shadow: 0 8px 16px #dce1e1;\r\n}\r\n\r\n.carousel-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    display: none;\r\n    border-radius: 15px;\r\n}\r\n\r\n.carousel-container[_ngcontent-%COMP%]   img.image-active[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n\r\n\r\n\r\n.carousel-dot-container[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    height: 13px;\r\n    width: 13px;\r\n    margin: 0 5px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    transition: opacity 0.6 ease;\r\n    opacity: 0.5;\r\n}\r\n\r\n.active[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n.fade[_ngcontent-%COMP%]{\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n}\r\n\r\n@keyframes fade {\r\n  from {\r\n      opacity: 0.4;\r\n  }\r\n  to {\r\n      opacity: 1;\r\n  }\r\n}\r\n\r\n.btn-carousel[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 15%;\r\n    padding: 0;\r\n    color: #fff;\r\n    text-align: center;\r\n    background: 0 0;\r\n    border: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-prev[_ngcontent-%COMP%] {\r\n    left: 0;\r\n}\r\n\r\n.btn-next[_ngcontent-%COMP%] {\r\n    right: 0;\r\n}\r\n\r\n.icon-carousel[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    opacity: 0.5;\r\n    transition: all 0.15s ease;\r\n}\r\n\r\n.icon-carousel[_ngcontent-%COMP%]:hover {    \r\n    opacity: 0.9;\r\n}\r\n\r\n.icon-carousel[_ngcontent-%COMP%]:active{\r\n    opacity: 0.5;\r\n}\r\n\r\n.icon-next[_ngcontent-%COMP%], .icon-prev[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUEsb0JBQW9COztBQUNwQjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBLGlDQUFpQzs7QUFDakM7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0U7TUFDSSxZQUFZO0VBQ2hCO0VBQ0E7TUFDSSxVQUFVO0VBQ2Q7QUFDRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBQ0E7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAjZGNlMWUxO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIGltZ3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIGltZy5pbWFnZS1hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLypkb3RzLyBpbmRpY2F0b3JzICovXHJcbi5jYXJvdXNlbC1kb3QtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5kb3R7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICB3aWR0aDogMTNweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjYgZWFzZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmFjdGl2ZSxcclxuLmRvdDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIGltYWdlIHRyYW5zaXRpb24gZmFkZSBlZmZlY3QgKi9cclxuLmZhZGV7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWNhcm91c2Vse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcHJldiB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5idG4tbmV4dCB7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmljb24tY2Fyb3VzZWwge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxufVxyXG5cclxuLmljb24tY2Fyb3VzZWw6aG92ZXIgeyAgICBcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmljb24tY2Fyb3VzZWw6YWN0aXZle1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uaWNvbi1uZXh0LFxyXG4uaWNvbi1wcmV2e1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");


class AppComponent {
    constructor() {
        this.title = 'myApp';
        this.images = [
            {
                imageSrc: 'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                imageAlt: 'nature1',
            },
            {
                imageSrc: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                imageAlt: 'nature2',
            },
            {
                imageSrc: 'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
                imageAlt: 'person1',
            },
            {
                imageSrc: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                imageAlt: 'person2',
            },
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 10, consts: [[3, "images"], [3, "images", "autoSlide"], [3, "images", "autoSlide", "slideInterval"], [3, "images", "indicators"], [3, "images", "controls"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Awesome Carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Auto Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Auto slide with custom interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hide dot indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hide button controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-carousel", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images)("autoSlide", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images)("autoSlide", true)("slideInterval", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images)("indicators", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images)("controls", false);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/carousel.module */ "iXwx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"]] }); })();


/***/ }),

/***/ "iXwx":
/*!*********************************************!*\
  !*** ./src/app/carousel/carousel.module.ts ***!
  \*********************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.component */ "EfPX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CarouselModule {
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) { return new (t || CarouselModule)(); };
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map