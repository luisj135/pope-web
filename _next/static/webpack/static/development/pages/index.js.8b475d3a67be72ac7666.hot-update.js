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
    className: "jsx-886724759" + " " + "content-header",
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
    className: "jsx-886724759" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "row",
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
    className: "jsx-886724759",
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
    className: "jsx-886724759" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "col s12 m8 l8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Is there anyone else you would want us to add?")), __jsx("div", {
    className: "jsx-886724759" + " " + "col s12 m4 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Submit a Name"))))), __jsx("div", {
    className: "jsx-886724759" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "col s12 m9 l9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "content-links-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Terms and Conditions"), __jsx("a", {
    href: "#",
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Privacy Policy"), __jsx("a", {
    href: "#",
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact Us"))), __jsx("div", {
    className: "jsx-886724759" + " " + "col s12 m3 l3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Folow Us"), __jsx("p", {
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-886724759" + " " + "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-886724759",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-886724759" + " " + "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))))), __jsx("div", {
    className: "jsx-886724759" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-886724759" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "886724759",
    __self: this
  }, ".container{font-family:'Lato',sans-serif;}.container .content-header{position:realtive;width:100vw;}.content-header{height:50rem;}.sidenav-overlay{z-index:8;}.content-links-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.content-links-nav a{margin-right:1rem;}.social-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.social-links p{margin:0rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEV5QixBQUcwQyxBQUdkLEFBS0osQUFJSixBQUlHLEFBTUssQUFJTCxBQU1ELFVBbkJiLEVBb0JBLENBeEJBLEtBTGEsQUFtQmIsWUF0QkEsQUFJQSw0Q0FZb0IsQUFVQSxxRUFUUSxBQVVHLHlHQVQvQixVQVVBIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9zdG9yZS9kYXRhUG9zdC9hY3Rpb24nXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBUaXRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZSc7XG5pbXBvcnQgTWluaVZvdGUgZnJvbSAnLi4vY29tcG9uZW50cy9NaW5pVm90ZSc7XG5cbmltcG9ydCB7IGRhdGFJbml0aWFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRhSW5pdGlhbCc7XG5cblxuY29uc3QgUG9wQXBwID0gcHJvcHMgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhaW5pdGlhbC5wb3N0RGF0YTtcbiAgICBjb25zdCBsZW50aXRlbXMgPSBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGg7XG4gICAgaWYobGVudGl0ZW1zID09PSAwKXtcbiAgICAgIHByb3BzLmFkZFBvc3RJbml0aWFsRGF0YShkYXRhSW5pdGlhbCk7XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPEhlYWRlciBwYXRobmFtZT1cIi9cIi8+XG4gICAgICAgIDxTbGlkZSBkYXRhU2VsPVwicG9wZVwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPFRpdGlsZT5cbiAgICAgICAgICAgIDxoMj5QcmV2aW91cyBSdWxpbmdzPC9oMj5cbiAgICAgICAgICA8L1RpdGlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNaW5pVm90ZSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTggbDhcIj5cbiAgICAgICAgICAgIDxoMz5JcyB0aGVyZSBhbnlvbmUgZWxzZSB5b3Ugd291bGQgd2FudCB1cyB0byBhZGQ/PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTQgbDRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1idG5cIj5cbiAgICAgICAgICAgICAgPHA+U3VibWl0IGEgTmFtZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTkgbDlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saW5rcy1uYXZcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG0zIGwzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgICAgICA8cD5Gb2xvdyBVczwvcD5cbiAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9wPlxuICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIgLmNvbnRlbnQtaGVhZGVye1xuICAgICAgICAgIHBvc2l0aW9uOnJlYWx0aXZlO1xuICAgICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtaGVhZGVye1xuICAgICAgICAgIGhlaWdodDogNTByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZW5hdi1vdmVybGF5e1xuICAgICAgICAgIHotaW5kZXg6ODtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmtzLW5hdntcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGlua3MtbmF2IGF7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmtze1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuc29jaWFsLWxpbmtzIHAge1xuICAgICAgICAgIG1hcmdpbjowcmVtO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cblBvcEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBzdG9yZSwgaXNTZXJ2ZXIgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhzdG9yZSlcbiAgc3RvcmUuZGlzcGF0Y2goYWRkUG9zdChkYXRhSW5pdGlhbCkpXG4gIC8vc3RvcmUuZGlzcGF0Y2goYWRkQ291bnQoKSlcbiAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAocmVkdWNlcikgPT57XG4gIHJldHVybiB7XG4gICAgZGF0YWluaXRpYWw6IHJlZHVjZXIuZGF0YVBvc3QsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZFBvc3RJbml0aWFsRGF0YTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZFBvc3QsIGRpc3BhdGNoKSxcbiAgICAvLyBzdGFydENsb2NrOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc3RhcnRDbG9jaywgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBvcEFwcClcblxuIl19 */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/pages/index.js */"));
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
//# sourceMappingURL=index.js.8b475d3a67be72ac7666.hot-update.js.map