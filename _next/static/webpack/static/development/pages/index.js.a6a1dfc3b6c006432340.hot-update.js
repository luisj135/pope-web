webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/slide.js":
/*!*****************************!*\
  !*** ./components/slide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_dataPost_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/dataPost/action */ "./store/dataPost/action.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Image */ "./components/Image.js");

var _jsxFileName = "/Applications/MAMP/htdocs/zemoga/pope-web/src/app/components/slide.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Slide = function Slide(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      vote = _useState[0],
      setVote = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      sel = _useState2[0],
      setSel = _useState2[1];

  var showVote = function showVote(value) {
    setVote(value);
    console.log('ttttt');
  };

  var updateVote = function updateVote() {
    if (sel) {
      props.addUpdateRateLike("".concat(props.dataSel));
    } else {
      props.addUpdateRateDisLike("".concat(props.dataSel));
    }
  };

  console.log(vote);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "content-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "content-slide-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: "/assets/images/pope/",
    name: "pope",
    format: "png",
    alt: "pope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1349521472" + " " + "content-slide-vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "col s10 offset-s1 m6 l6 content-bg-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "content-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "What\u2019s your opinion on"), __jsx("h2", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Pope Francis?"), __jsx("p", {
    className: "jsx-1349521472" + " " + "col s10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "He\u2019s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)")), __jsx("div", {
    className: "jsx-1349521472" + " " + "col s10 content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Pope",
    target: "_blank",
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1349521472" + " " + "fa fa-wikipedia-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "More information"))), __jsx("div", {
    className: "jsx-1349521472" + " " + "col s10 txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "What\u2019s Your Verdict?")), __jsx("div", {
    className: "jsx-1349521472" + " " + "content-vote-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      showVote(true), setSel(true);
    },
    className: "jsx-1349521472" + " " + "col s6 icon like-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1349521472" + " " + "fa fa-thumbs-o-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      showVote(false), setSel(false);
    },
    className: "jsx-1349521472" + " " + "col s6 icon dislike-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1349521472" + " " + "fa fa-thumbs-o-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), vote && __jsx("div", {
    className: "jsx-1349521472" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "col s4 offset-s4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    onClick: updateVote,
    className: "jsx-1349521472" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Vote now"))))))))), __jsx("div", {
    className: "jsx-1349521472" + " " + "content-vote-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1349521472" + " " + "time-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("h6", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "CLOSING IN")), __jsx("div", {
    className: "jsx-1349521472" + " " + "time-days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1349521472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "22"), "days"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1349521472",
    __self: this
  }, ".content-slide.jsx-1349521472{position:absolute;top:0;left:0;width:100%;height:50rem;}.content-slide.jsx-1349521472 .content-slide-image.jsx-1349521472{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;max-height:100%;}.content-slide-vote.jsx-1349521472{position:absolute;width:100%;height:initial;}.content-bg-col.jsx-1349521472{background-color:rgba(91,92,96,0.5);border-radius:5px;color:white;font-family:sans-serif;line-height:1.5;max-width:50%;padding:0rem;}.content-bg-col.jsx-1349521472 a.jsx-1349521472{color:#bf0222;}@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none){.content-bg-col.jsx-1349521472{-webkit-backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(91,92,96,0.5);}}.content-bg-col.jsx-1349521472 .content-description.jsx-1349521472,.content-bg-col.jsx-1349521472 .content-link.jsx-1349521472,.content-bg-col.jsx-1349521472 .txt.jsx-1349521472{padding:0.8rem 2rem;}.content-bg-col.jsx-1349521472 .txt.jsx-1349521472{padding-bottom:2rem;}.content-bg-col.jsx-1349521472 h4.jsx-1349521472{font-size:0.9rem;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.19;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;}.content-bg-col.jsx-1349521472 h2.jsx-1349521472{font-size:2.5rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-bg-col.jsx-1349521472 h3.jsx-1349521472{font-size:0.7rem;font-weight:bold;font-stretch:normal;font-style:normal;line-height:1.2;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;margin:0rem;padding:0rem;}.content-bg-col.jsx-1349521472 p.jsx-1349521472{padding:0rem;}.content-link.jsx-1349521472{font-size:7px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.71;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-link.jsx-1349521472 a.jsx-1349521472{color:#ffffff;padding:0.5rem 0rem;}.content-link.jsx-1349521472 a.jsx-1349521472:hover{color:rgba(91,92,96,1);-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.content-link.jsx-1349521472 a.jsx-1349521472 i.jsx-1349521472{margin:0.1rem;}.content-vote-items.jsx-1349521472 .row.jsx-1349521472{margin:0rem;}.content-vote-items.jsx-1349521472 .icon.jsx-1349521472{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content-vote-items.jsx-1349521472 .icon.jsx-1349521472 i.jsx-1349521472{font-size:1.5rem;}.content-vote-items.jsx-1349521472 .dislike-link.jsx-1349521472{height:2.5rem;background-color:#ffad1d;}.content-vote-items.jsx-1349521472 .dislike-link.jsx-1349521472:hover i.jsx-1349521472{color:#1cbbb4;}.content-vote-items.jsx-1349521472 .like-link.jsx-1349521472{height:2.5rem;background-color:#1cbbb4;}.content-vote-items.jsx-1349521472 .like-link.jsx-1349521472:hover i.jsx-1349521472{color:#ffad1d;}.content-vote-time.jsx-1349521472{position:absolute;bottom:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:25px;}.content-vote-time.jsx-1349521472 .time-txt.jsx-1349521472{background-color:#ada79f;color:white;width:35%;position:relative;}.content-vote-time.jsx-1349521472 .time-days.jsx-1349521472{background-color:#ffffff;width:65%;padding:0rem 0.5rem;}.time-txt.jsx-1349521472:after,.time-txt.jsx-1349521472:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;}.time-txt.jsx-1349521472:after{border-color:transparent;border-left-color:transparent;border-width:7px;margin-top:-7px;}.time-txt.jsx-1349521472:before{border-color:transparent;border-left-color:#a69f97;border-width:7px;margin-top:-7px;}.time-txt.jsx-1349521472 h6.jsx-1349521472{font-size:13px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.62;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 5px;margin:0px;}.content-vote-time.jsx-1349521472 .time-days.jsx-1349521472 p.jsx-1349521472{height:100%;margin:0px;font-size:18px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.36;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#464646;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.8;}.content-vote-time.jsx-1349521472 .time-days.jsx-1349521472 p.jsx-1349521472 span.jsx-1349521472{color:#464646;padding:0rem 0.5rem;opacity:1;}.content-btn.jsx-1349521472{padding:0.4375rem 0.84375rem;border:1px solid white;}@media only screen  and (min-device-width:320px)  and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){.content-bg-col.jsx-1349521472{max-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RmtCLEFBRzZCLEFBUUwsQUFVSSxBQU1vQixBQVV2QixBQUt1QixBQU9qQixBQUlBLEFBSUgsQUFVQSxBQVdBLEFBYUwsQUFJRSxBQVdBLEFBS1UsQUFNVixBQUtGLEFBSUQsQUFTTSxBQUlILEFBS0EsQUFJQSxBQUtBLEFBSUcsQUFVUSxBQU9BLEFBTWYsQUFXZSxBQU9BLEFBT1YsQUFtQkosQUFtQkcsQUFNZSxBQVNWLFVBN0VYLEVBMURWLEFBSWMsQUFrR0QsQ0FySWIsQ0F0REEsQUEwRGtCLEFBV0ksQUFZdEIsQUFxQjJCLEFBSzNCLEFBSTJCLEFBSzNCLEFBMEZzQixDQXRDRCxBQXFEakIsRUF6TWMsQUFVRyxBQVdGLEFBeURuQixDQXBJUSxBQWtCSyxBQXdJRixBQXdCZ0IsRUFwSTNCLEFBSUEsR0EwRDJCLEFBa0hWLENBN05SLENBbUtJLEFBT0YsQUFpQnFCLEFBT0osRUF4Q25CLEVBeElRLEFBbU9PLENBekpGLENBM0ZULEVBcURTLENBcUJBLEFBNEJ0QixBQW9EWSxBQStDVSxBQXNDVixDQTFNbUIsQUFxSVYsQ0FwSkQsQUF5Q0UsQ0FvR1gsQ0EwRE8sQ0F0RmxCLEFBU0EsR0EvSWUsQ0FnTEQsQ0EvSmQsQUE4TkEsQ0FyRmMsRUFTSyxHQXhFQyxDQXNHRCxDQW1EbkIsQ0EvTG9CLENBL0JOLEFBb0RNLEFBK0hBLEFBb0JFLENBNU50QixBQXlLQSxBQU9XLEFBU1EsQ0EzSEMsUUFtSFYsQ0FkVixDQTdJeUIsRUFxRU4sQUFzR0QsR0E1SUMsQ0FxQkQsQUF3R0UsQUFRRixBQWVDLEVBck1LLEFBMkRSLEFBOEpJLFNBcEhILENBeUZqQixDQXRHd0IsQ0E0QkosRUFsRUksQUFVQSxBQVdBLEFBZ0h4QixDQXBLa0IsQUFtTE0sQ0F2QkYsRUEyQ0gsS0ExTHNCLENBc0V6QyxPQWxGZ0IsSUF1TVEsQ0EzQ3hCLFNBM0pjLEFBaUlNLGFBaElwQixDQVdFLG1CQWhDdUIsR0FvSEQsaUNBa0NYLEVBOURLLEdBdENBLEFBVUEsQUFXQSxDQStIQSxNQS9DbEIsTUE5RGdCLEdBdENoQixBQVVnQixBQVdBLENBK0hBLElBb0JFLE1BaklsQixHQTVCQSxBQVdjLENBK0hBLE1Bb0JFLEtBbEpELFNBbUpELElBbEpkLEdBMUV1QixHQW9IRCw0Q0FvRkYsb0JBcUJBLFNBNU5DLEdBb0hELHFDQW9GTyxvQkFxQkUsaUNBNU5mLEdBb0hkLFNBbkhrQixnQkFDbEIsZ0JBc01zQiw0QkFxQkEsZ0RBcEJGLDRCQXFCQSxpRUFwQk4sWUFDRSxjQUNKLEVBbUJFLFNBbEJkLEdBbUJBIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFJhdGVQb3N0LCBhZGREaXNSYXRlUG9zdCB9IGZyb20gJy4uL3N0b3JlL2RhdGFQb3N0L2FjdGlvbidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5jb25zdCBTbGlkZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbdm90ZSwgc2V0Vm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWwsIHNldFNlbF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBzaG93Vm90ZSA9ICh2YWx1ZSkgPT57XG4gICAgc2V0Vm90ZSh2YWx1ZSk7XG4gICAgY29uc29sZS5sb2coJ3R0dHR0JylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVZvdGUgPSAoKSA9PntcbiAgICBpZihzZWwpe1xuICAgICAgcHJvcHMuYWRkVXBkYXRlUmF0ZUxpa2UoYCR7cHJvcHMuZGF0YVNlbH1gKVxuICAgIH1lbHNle1xuICAgICAgcHJvcHMuYWRkVXBkYXRlUmF0ZURpc0xpa2UoYCR7cHJvcHMuZGF0YVNlbH1gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKHZvdGUpXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNsaWRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zbGlkZS1pbWFnZVwiPlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHBhdGg9XCIvYXNzZXRzL2ltYWdlcy9wb3BlL1wiXG4gICAgICAgICAgICBuYW1lPVwicG9wZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJwbmdcIlxuICAgICAgICAgICAgYWx0PVwicG9wZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGUtdm90ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTAgb2Zmc2V0LXMxIG02IGw2IGNvbnRlbnQtYmctY29sXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PldoYXTigJlzIHlvdXIgb3BpbmlvbiBvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qb3BlIEZyYW5jaXM/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sIHMxMFwiPkhl4oCZcyB0YWxraW5nIHRvdWdoIG9uIGNsZXJneSBzZXh1YWwgYWJ1c2UsIGJ1dCBpcyBoZSBqdXN0IGFub3RoZXIgcGFwYWwgcGVydmVydCBwcm90ZWN0b3I/ICh0aHVtYnMgZG93bikgb3IgYSB0cnVlIHBlZG9waGlsZSBwdW5pc2hpbmcgcG9udGlmZj8gKHRodW1icyB1cCk8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCBjb250ZW50LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BvcGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aWtpcGVkaWEtd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb3JlIGluZm9ybWF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCB0eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPldoYXTigJlzIFlvdXIgVmVyZGljdD88L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdm90ZS1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgaWNvbiBsaWtlLWxpbmtcIiBvbkNsaWNrPXsoKT0+e3Nob3dWb3RlKHRydWUpLCBzZXRTZWwodHJ1ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLW8tdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2IGljb24gZGlzbGlrZS1saW5rXCIgb25DbGljaz17KCk9PntzaG93Vm90ZShmYWxzZSksIHNldFNlbChmYWxzZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLW8tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB2b3RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM0IG9mZnNldC1zNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYnRuXCIgb25DbGljaz17dXBkYXRlVm90ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Wb3RlIG5vdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC12b3RlLXRpbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS10eHRcIj5cbiAgICAgICAgICAgICAgPGg2PkNMT1NJTkcgSU48L2g2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtZGF5c1wiPlxuICAgICAgICAgICAgICA8cD48c3Bhbj4yMjwvc3Bhbj5kYXlzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250ZW50LXNsaWRle1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDUwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtc2xpZGUgLmNvbnRlbnQtc2xpZGUtaW1hZ2V7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtc2xpZGUtdm90ZXtcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsOTIsOTYsIDAuNSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCBhIHtcbiAgICAgICAgICBjb2xvcjogI2JmMDIyMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xuICAgICAgICAgIC5jb250ZW50LWJnLWNvbCB7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsOTIsOTYsIDAuNSk7ICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgLmNvbnRlbnQtZGVzY3JpcHRpb24sIC5jb250ZW50LWJnLWNvbCAuY29udGVudC1saW5rICwgLmNvbnRlbnQtYmctY29sIC50eHR7XG4gICAgICAgICAgcGFkZGluZzogMC44cmVtIDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgLnR4dHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCBoNHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xOTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgaDJ7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIGgze1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcGFkZGluZzogMHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCBwe1xuICAgICAgICAgIHBhZGRpbmc6MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmt7XG4gICAgICAgICAgZm9udC1zaXplOiA3cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGluayBhe1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGluayBhOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDkxLDkyLDk2LCAxKTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmsgYSBpe1xuICAgICAgICAgIG1hcmdpbjogMC4xcmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAucm93e1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmljb257XG4gICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmljb24gaXtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmRpc2xpa2UtbGlua3tcbiAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZDFkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAuZGlzbGlrZS1saW5rOmhvdmVyIGl7XG4gICAgICAgICAgY29sb3I6ICMxY2JiYjQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5saWtlLWxpbmt7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYmJiNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmxpa2UtbGluazpob3ZlciBpe1xuICAgICAgICAgIGNvbG9yOiAjZmZhZDFkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS10aW1le1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBoZWlnaHQ6MjVweDtcbiAgICAgICAgfSAgXG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS10aW1lIC50aW1lLXR4dHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRhNzlmO1xuICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgIHdpZHRoOjM1JTtcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZSAudGltZS1kYXlze1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6NjUlO1xuICAgICAgICAgIHBhZGRpbmc6MHJlbSAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGltZS10eHQ6YWZ0ZXIsIC50aW1lLXR4dDpiZWZvcmV7XG4gICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZS10eHQ6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogN3B4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZS10eHQ6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjYTY5Zjk3O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogN3B4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZS10eHQgaDZ7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS10aW1lIC50aW1lLWRheXMgcHtcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLXRpbWUgLnRpbWUtZGF5cyBwIHNwYW57XG4gICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XG4gICAgICAgICAgcGFkZGluZzogMHJlbSAwLjVyZW07XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJ0bntcbiAgICAgICAgICBwYWRkaW5nOiAwLjQzNzVyZW0gMC44NDM3NXJlbTtcbiAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICAgICAgICAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIFxuICAgICAgICAgIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpXG4gICAgICAgICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgICAgIC5jb250ZW50LWJnLWNvbCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn07XG5cblNsaWRlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHN0b3JlLCBpc1NlcnZlciB9KSA9PiB7XG4gIHJldHVybiB7IGlzU2VydmVyIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHJlZHVjZXIpID0+e1xuICByZXR1cm4ge1xuICAgIGRhdGFpbml0aWFsOiByZWR1Y2VyLmRhdGFQb3N0LFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRVcGRhdGVSYXRlTGlrZTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZFJhdGVQb3N0LCBkaXNwYXRjaCksXG4gICAgYWRkVXBkYXRlUmF0ZURpc0xpa2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGREaXNSYXRlUG9zdCwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNsaWRlKVxuIl19 */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/components/slide.js */"));
};

Slide.getInitialProps = function _callee(_ref) {
  var store, isServer;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = _ref.store, isServer = _ref.isServer;
          return _context.abrupt("return", {
            isServer: isServer
          });

        case 2:
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
    addUpdateRateLike: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store_dataPost_action__WEBPACK_IMPORTED_MODULE_5__["addRatePost"], dispatch),
    addUpdateRateDisLike: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_store_dataPost_action__WEBPACK_IMPORTED_MODULE_5__["addDisRatePost"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Slide));

/***/ })

})
//# sourceMappingURL=index.js.a6a1dfc3b6c006432340.hot-update.js.map