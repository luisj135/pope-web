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
    className: "jsx-4186618000" + " " + "content-header",
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
    className: "jsx-4186618000" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "row",
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
    className: "jsx-4186618000",
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
    className: "jsx-4186618000" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "col s12 m8 l8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Is there anyone else you would want us to add?")), __jsx("div", {
    className: "jsx-4186618000" + " " + "col s12 m4 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Submit a Name"))))), __jsx("div", {
    className: "jsx-4186618000" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "col s12 m8 l8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "content-links-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Terms and Conditions"), __jsx("a", {
    href: "#",
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Privacy Policy"), __jsx("a", {
    href: "#",
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact Us"))), __jsx("div", {
    className: "jsx-4186618000" + " " + "col s12 m4 l4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4186618000" + " " + "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Folow Us"), __jsx("p", {
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-4186618000" + " " + "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-4186618000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-4186618000" + " " + "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4186618000",
    __self: this
  }, ".container{font-family:'Lato',sans-serif;}.container .content-header{position:realtive;width:100vw;}.content-header{height:50rem;}.sidenav-overlay{z-index:8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUV5QixBQUcwQyxBQUdkLEFBS0osQUFJSixVQUNYLEdBSkEsS0FMYSxZQUhiLEFBSUEiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy96ZW1vZ2EvcG9wZS13ZWIvc3JjL2FwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gJy4uL3N0b3JlL2RhdGFQb3N0L2FjdGlvbidcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZSc7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IFRpdGlsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJztcbmltcG9ydCBNaW5pVm90ZSBmcm9tICcuLi9jb21wb25lbnRzL01pbmlWb3RlJztcblxuaW1wb3J0IHsgZGF0YUluaXRpYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGFJbml0aWFsJztcblxuXG5jb25zdCBQb3BBcHAgPSBwcm9wcyA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFpbml0aWFsLnBvc3REYXRhO1xuICAgIGNvbnN0IGxlbnRpdGVtcyA9IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aDtcbiAgICBpZihsZW50aXRlbXMgPT09IDApe1xuICAgICAgcHJvcHMuYWRkUG9zdEluaXRpYWxEYXRhKGRhdGFJbml0aWFsKTtcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPVwiL1wiLz5cbiAgICAgICAgPFNsaWRlIGRhdGFTZWw9XCJwb3BlXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Tm90aWZpY2F0aW9ucyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8VGl0aWxlPlxuICAgICAgICAgICAgPGgyPlByZXZpb3VzIFJ1bGluZ3M8L2gyPlxuICAgICAgICAgIDwvVGl0aWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1pbmlWb3RlIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtOCBsOFwiPlxuICAgICAgICAgICAgPGgzPklzIHRoZXJlIGFueW9uZSBlbHNlIHlvdSB3b3VsZCB3YW50IHVzIHRvIGFkZD88L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNCBsNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJ0blwiPlxuICAgICAgICAgICAgICA8cD5TdWJtaXQgYSBOYW1lPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtOCBsOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpbmtzLW5hdlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTQgbDRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgICAgIDxwPkZvbG93IFVzPC9wPlxuICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L3A+XG4gICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIC5jb250ZW50LWhlYWRlcntcbiAgICAgICAgICBwb3NpdGlvbjpyZWFsdGl2ZTtcbiAgICAgICAgICB3aWR0aDoxMDB2dztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWhlYWRlcntcbiAgICAgICAgICBoZWlnaHQ6IDUwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGVuYXYtb3ZlcmxheXtcbiAgICAgICAgICB6LWluZGV4Ojg7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuUG9wQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHN0b3JlLCBpc1NlcnZlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHN0b3JlKVxuICBzdG9yZS5kaXNwYXRjaChhZGRQb3N0KGRhdGFJbml0aWFsKSlcbiAgLy9zdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuICByZXR1cm4geyBpc1NlcnZlciB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChyZWR1Y2VyKSA9PntcbiAgcmV0dXJuIHtcbiAgICBkYXRhaW5pdGlhbDogcmVkdWNlci5kYXRhUG9zdCxcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkUG9zdEluaXRpYWxEYXRhOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkUG9zdCwgZGlzcGF0Y2gpLFxuICAgIC8vIHN0YXJ0Q2xvY2s6IGJpbmRBY3Rpb25DcmVhdG9ycyhzdGFydENsb2NrLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9wQXBwKVxuXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/pages/index.js */"));
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
//# sourceMappingURL=index.js.b880058c76a5cad79e3c.hot-update.js.map