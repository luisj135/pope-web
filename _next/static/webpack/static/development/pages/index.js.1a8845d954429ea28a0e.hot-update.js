webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "../../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_dataPost_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/dataPost/action */ "./store/dataPost/action.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/slide */ "./components/slide.js");
/* harmony import */ var _components_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Notifications */ "./components/Notifications.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Title */ "./components/Title.js");
/* harmony import */ var _components_MiniVote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MiniVote */ "./components/MiniVote.js");
/* harmony import */ var _components_dataInitial__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/dataInitial */ "./components/dataInitial.js");


var _jsxFileName = "/Applications/MAMP/htdocs/zemoga/pope-web/src/app/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var PopApp = function PopApp(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var data = props.datainitial.postData;

    var lentitems = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data).length;

    if (lentitems === 0) {
      props.addPostInitialData(_components_dataInitial__WEBPACK_IMPORTED_MODULE_12__["dataInitial"]);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "content-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pathname: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_components_slide__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dataSel: "pope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(_components_Notifications__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-345179723" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Previous Rulings")))), __jsx(_components_MiniVote__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-345179723" + " " + "container cont-new-post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "col s12 m8 l8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Is there anyone else you would want us to add?")), __jsx("div", {
    className: "jsx-345179723" + " " + "col s12 m4 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Submit a Name"))))), __jsx("div", {
    className: "jsx-345179723" + " " + "container border-conent-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "col s12 m9 l9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "content-links-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Terms and Conditions"), __jsx("a", {
    href: "#",
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Privacy Policy"), __jsx("a", {
    href: "#",
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact Us"))), __jsx("div", {
    className: "jsx-345179723" + " " + "col s12 m3 l3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Folow Us"), __jsx("p", {
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-345179723" + " " + "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-345179723",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-345179723" + " " + "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))))), __jsx("div", {
    className: "jsx-345179723" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-345179723" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "345179723",
    __self: this
  }, ".container{font-family:'Lato',sans-serif;}.container .content-header{position:realtive;width:100vw;}.content-header{height:50rem;}.sidenav-overlay{z-index:8;}.cont-new-post{padding:1rem;background-image:url(\"../public/assets/images/default.png\");background-repeat:no-repeat;}.cont-new-post .row{margin:0rem;padding:0rem;}.cont-new-post .row div:nth-child(1){margin:0.5rem 0rem;}.cont-new-post h3{font-size:15px;font-weight:300;font-stretch:normal;font-style:normal;line-height:0.8;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#333333;margin:1.8rem 0rem;}.content-btn{border:solid 1.5px #333333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.content-links-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.content-links-nav a{margin-right:1rem;color:black;}.content-links-nav a:hover{-webkit-text-decoration:underline;text-decoration:underline;}.social-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.social-links p{margin:0rem;}.border-conent-block{margin-top:2rem;padding-top:2rem;border-top:1px dotted #979797;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEV5QixBQUcwQyxBQUdkLEFBS0osQUFJSixBQUlJLEFBTUYsQUFLUSxBQUlKLEFBWVksQUFRZixBQU1LLEFBS1MsQUFJZCxBQU1ELEFBSUssVUEvRGxCLEVBVWMsQUFrRGQsQ0FoRUEsQUFROEQsRUFlNUMsQ0E2Q0MsRUF6RU4sQUFzREEsQ0E5QmIsTUFKQSxFQW9CYyxHQTNDZCxBQUlBLEFBc0RBLENBMUJzQixFQTZDVSxrQkE1Q1osU0E2QnBCLEdBZ0JBLE1BNUNrQixJQWpCWSxDQWtDVixBQWVBLFdBL0JJLGdCQWpCeEIsQUEwQm9CLDBDQVFRLEFBZUcsMkJBdEJQLG9CQVROLGdCQUNGLGNBQ0ssbUJBQ3JCLFNBY0EsVUFlQSxXQXRCc0IsNEVBQ3RCIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9zdG9yZS9kYXRhUG9zdC9hY3Rpb24nXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBUaXRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSc7XG5pbXBvcnQgTWluaVZvdGUgZnJvbSAnLi4vY29tcG9uZW50cy9NaW5pVm90ZSc7XG5cbmltcG9ydCB7IGRhdGFJbml0aWFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRhSW5pdGlhbCc7XG5cblxuY29uc3QgUG9wQXBwID0gcHJvcHMgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhaW5pdGlhbC5wb3N0RGF0YTtcbiAgICBjb25zdCBsZW50aXRlbXMgPSBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGg7XG4gICAgaWYobGVudGl0ZW1zID09PSAwKXtcbiAgICAgIHByb3BzLmFkZFBvc3RJbml0aWFsRGF0YShkYXRhSW5pdGlhbCk7XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPEhlYWRlciBwYXRobmFtZT1cIi9cIi8+XG4gICAgICAgIDxTbGlkZSBkYXRhU2VsPVwicG9wZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPFRpdGlsZT5cbiAgICAgICAgICAgIDxoMj5QcmV2aW91cyBSdWxpbmdzPC9oMj5cbiAgICAgICAgICA8L1RpdGlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNaW5pVm90ZSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udC1uZXctcG9zdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtOCBsOFwiPlxuICAgICAgICAgICAgPGgzPklzIHRoZXJlIGFueW9uZSBlbHNlIHlvdSB3b3VsZCB3YW50IHVzIHRvIGFkZD88L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNCBsNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJ0blwiPlxuICAgICAgICAgICAgICA8cD5TdWJtaXQgYSBOYW1lPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXItY29uZW50LWJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG05IGw5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbGlua3MtbmF2XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VGVybXMgYW5kIENvbmRpdGlvbnM8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdCBVczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtMyBsM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cbiAgICAgICAgICAgICAgPHA+Rm9sb3cgVXM8L3A+XG4gICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvcD5cbiAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIC5jb250ZW50LWhlYWRlcntcbiAgICAgICAgICBwb3NpdGlvbjpyZWFsdGl2ZTtcbiAgICAgICAgICB3aWR0aDoxMDB2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWhlYWRlcntcbiAgICAgICAgICBoZWlnaHQ6IDUwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGVuYXYtb3ZlcmxheXtcbiAgICAgICAgICB6LWluZGV4Ojg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udC1uZXctcG9zdHtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2RlZmF1bHQucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udC1uZXctcG9zdCAucm93e1xuICAgICAgICAgIG1hcmdpbjowcmVtO1xuICAgICAgICAgIHBhZGRpbmc6MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250LW5ldy1wb3N0IC5yb3cgZGl2Om50aC1jaGlsZCgxKXtcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnQtbmV3LXBvc3QgaDN7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIG1hcmdpbjogMS44cmVtIDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1idG4ge1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMS41cHggIzMzMzMzMztcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5rcy1uYXZ7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmtzLW5hdiBhe1xuICAgICAgICAgIG1hcmdpbi1yaWdodDoxcmVtO1xuICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGlua3MtbmF2IGE6aG92ZXJ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmtze1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmtzIHAge1xuICAgICAgICAgIG1hcmdpbjowcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvcmRlci1jb25lbnQtYmxvY2t7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5Nzk3OTc7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuUG9wQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHN0b3JlLCBpc1NlcnZlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0b3JlKVxuICBzdG9yZS5kaXNwYXRjaChhZGRQb3N0KGRhdGFJbml0aWFsKSlcbiAgLy9zdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuICByZXR1cm4geyBpc1NlcnZlciB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChyZWR1Y2VyKSA9PntcbiAgcmV0dXJuIHtcbiAgICBkYXRhaW5pdGlhbDogcmVkdWNlci5kYXRhUG9zdCxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkUG9zdEluaXRpYWxEYXRhOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkUG9zdCwgZGlzcGF0Y2gpLFxuICAgIC8vIHN0YXJ0Q2xvY2s6IGJpbmRBY3Rpb25DcmVhdG9ycyhzdGFydENsb2NrLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9wQXBwKVxuXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/pages/index.js */"));
};

PopApp.getInitialProps = function _callee(_ref) {
  var store, isServer;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = _ref.store, isServer = _ref.isServer;
          console.log(store);
          store.dispatch(Object(_store_dataPost_action__WEBPACK_IMPORTED_MODULE_6__["addPost"])(_components_dataInitial__WEBPACK_IMPORTED_MODULE_12__["dataInitial"])); //store.dispatch(addCount())

          return _context.abrupt("return", {
            isServer: isServer
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var mapStateToProps = function mapStateToProps(reducer) {
  return {
    datainitial: reducer.dataPost
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addPostInitialData: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store_dataPost_action__WEBPACK_IMPORTED_MODULE_6__["addPost"], dispatch) // startClock: bindActionCreators(startClock, dispatch),

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(PopApp));

/***/ })

})
//# sourceMappingURL=index.js.1a8845d954429ea28a0e.hot-update.js.map