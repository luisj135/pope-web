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
    className: "jsx-2164289162" + " " + "content-header",
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
    className: "jsx-2164289162" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "row",
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
    className: "jsx-2164289162",
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
    className: "jsx-2164289162" + " " + "container cont-new-post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "col s12 m8 l8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Is there anyone else you would want us to add?")), __jsx("div", {
    className: "jsx-2164289162" + " " + "col s12 m4 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Submit a Name"))))), __jsx("div", {
    className: "jsx-2164289162" + " " + "container border-conent-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "col s12 m9 l9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "content-links-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Terms and Conditions"), __jsx("a", {
    href: "#",
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Privacy Policy"), __jsx("a", {
    href: "#",
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact Us"))), __jsx("div", {
    className: "jsx-2164289162" + " " + "col s12 m3 l3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Folow Us"), __jsx("p", {
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2164289162" + " " + "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2164289162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2164289162" + " " + "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))))), __jsx("div", {
    className: "jsx-2164289162" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164289162" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2164289162",
    __self: this
  }, ".container{font-family:'Lato',sans-serif;}.container .content-header{position:realtive;width:100vw;}.content-header{height:50rem;}.sidenav-overlay{z-index:8;}.cont-new-post{padding:1rem;}.cont-new-post .row{margin:0rem;padding:0rem;}.cont-new-post h3{font-size:15px;font-weight:300;font-stretch:normal;font-style:normal;line-height:0.8;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:center;color:#333333;}.content-btn{border:solid 1.5px #333333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.content-links-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.content-links-nav a{margin-right:1rem;color:black;}.content-links-nav a:hover{-webkit-text-decoration:underline;text-decoration:underline;}.social-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.social-links p{margin:0rem;}.border-conent-block{margin-top:2rem;padding-top:2rem;border-top:1px dotted #979797;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEV5QixBQUcwQyxBQUdkLEFBS0osQUFJSixBQUlJLEFBSUYsQUFLSSxBQVdZLEFBUWYsQUFNSyxBQUtTLEFBSWQsQUFNRCxBQUlLLFVBeERsQixFQVFjLEFBNkNkLENBekRBLEFBUUEsRUFTa0IsQ0E0Q0MsRUFsRU4sQUErQ0EsT0E3QmIsRUFlYyxHQXBDZCxBQUlBLEFBK0NBLENBekJzQixFQTRDVSxrQkEzQ1osU0E0QnBCLEdBZ0JBLE1BM0NrQixLQWdCRSxBQWVBLFdBOUJJLGdCQVFKLDBDQVFRLEFBZUcsMkJBdEJQLG9CQVJKLGtCQUNKLGNBQ2hCLDBCQWNBLFVBZUEsV0F0QnNCLDRFQUN0QiIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3plbW9nYS9wb3BlLXdlYi9zcmMvYXBwL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSAnLi4vc3RvcmUvZGF0YVBvc3QvYWN0aW9uJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBTbGlkZSBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVGl0aWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGUnO1xuaW1wb3J0IE1pbmlWb3RlIGZyb20gJy4uL2NvbXBvbmVudHMvTWluaVZvdGUnO1xuXG5pbXBvcnQgeyBkYXRhSW5pdGlhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YUluaXRpYWwnO1xuXG5cbmNvbnN0IFBvcEFwcCA9IHByb3BzID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YWluaXRpYWwucG9zdERhdGE7XG4gICAgY29uc3QgbGVudGl0ZW1zID0gT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoO1xuICAgIGlmKGxlbnRpdGVtcyA9PT0gMCl7XG4gICAgICBwcm9wcy5hZGRQb3N0SW5pdGlhbERhdGEoZGF0YUluaXRpYWwpO1xuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxIZWFkZXIgcGF0aG5hbWU9XCIvXCIvPlxuICAgICAgICA8U2xpZGUgZGF0YVNlbD1cInBvcGVcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxOb3RpZmljYXRpb25zIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxUaXRpbGU+XG4gICAgICAgICAgICA8aDI+UHJldmlvdXMgUnVsaW5nczwvaDI+XG4gICAgICAgICAgPC9UaXRpbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TWluaVZvdGUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnQtbmV3LXBvc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTggbDhcIj5cbiAgICAgICAgICAgIDxoMz5JcyB0aGVyZSBhbnlvbmUgZWxzZSB5b3Ugd291bGQgd2FudCB1cyB0byBhZGQ/PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTQgbDRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1idG5cIj5cbiAgICAgICAgICAgICAgPHA+U3VibWl0IGEgTmFtZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyLWNvbmVudC1ibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtOSBsOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpbmtzLW5hdlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTMgbDNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgICAgIDxwPkZvbG93IFVzPC9wPlxuICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L3A+XG4gICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciAuY29udGVudC1oZWFkZXJ7XG4gICAgICAgICAgcG9zaXRpb246cmVhbHRpdmU7XG4gICAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1oZWFkZXJ7XG4gICAgICAgICAgaGVpZ2h0OiA1MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlbmF2LW92ZXJsYXl7XG4gICAgICAgICAgei1pbmRleDo4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnQtbmV3LXBvc3R7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250LW5ldy1wb3N0IC5yb3d7XG4gICAgICAgICAgbWFyZ2luOjByZW07XG4gICAgICAgICAgcGFkZGluZzowcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnQtbmV3LXBvc3QgaDN7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1idG4ge1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMS41cHggIzMzMzMzMztcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5rcy1uYXZ7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmtzLW5hdiBhe1xuICAgICAgICAgIG1hcmdpbi1yaWdodDoxcmVtO1xuICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGlua3MtbmF2IGE6aG92ZXJ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmtze1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmtzIHAge1xuICAgICAgICAgIG1hcmdpbjowcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvcmRlci1jb25lbnQtYmxvY2t7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICM5Nzk3OTc7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuUG9wQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHN0b3JlLCBpc1NlcnZlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0b3JlKVxuICBzdG9yZS5kaXNwYXRjaChhZGRQb3N0KGRhdGFJbml0aWFsKSlcbiAgLy9zdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuICByZXR1cm4geyBpc1NlcnZlciB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChyZWR1Y2VyKSA9PntcbiAgcmV0dXJuIHtcbiAgICBkYXRhaW5pdGlhbDogcmVkdWNlci5kYXRhUG9zdCxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkUG9zdEluaXRpYWxEYXRhOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkUG9zdCwgZGlzcGF0Y2gpLFxuICAgIC8vIHN0YXJ0Q2xvY2s6IGJpbmRBY3Rpb25DcmVhdG9ycyhzdGFydENsb2NrLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9wQXBwKVxuXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/pages/index.js */"));
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
//# sourceMappingURL=index.js.0fddc4dd9e6d11510282.hot-update.js.map