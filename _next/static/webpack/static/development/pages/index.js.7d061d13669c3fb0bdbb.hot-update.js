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
    className: "jsx-311911008" + " " + "content-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "content-slide-image",
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
    className: "jsx-311911008" + " " + "content-slide-vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "col s10 offset-s1 m6 l6 content-bg-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "content-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "What\u2019s your opinion on"), __jsx("h2", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Pope Francis?"), __jsx("p", {
    className: "jsx-311911008" + " " + "col s10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "He\u2019s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)")), __jsx("div", {
    className: "jsx-311911008" + " " + "col s10 content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Pope",
    target: "_blank",
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-311911008" + " " + "fa fa-wikipedia-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "More information"))), __jsx("div", {
    className: "jsx-311911008" + " " + "col s10 txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "What\u2019s Your Verdict?")), __jsx("div", {
    className: "jsx-311911008" + " " + "content-vote-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      showVote(true), setSel(true);
    },
    className: "jsx-311911008" + " " + "col s6 icon like-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-311911008" + " " + "fa fa-thumbs-o-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      showVote(false), setSel(false);
    },
    className: "jsx-311911008" + " " + "col s6 icon dislike-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-311911008" + " " + "fa fa-thumbs-o-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), vote && __jsx("div", {
    className: "jsx-311911008" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "col s4 offset-s4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    onClick: updateVote,
    className: "jsx-311911008" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Vote now"))))))))), __jsx("div", {
    className: "jsx-311911008" + " " + "content-vote-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-311911008" + " " + "time-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("h6", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "CLOSING IN")), __jsx("div", {
    className: "jsx-311911008" + " " + "time-days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-311911008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "22"), "days"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "311911008",
    __self: this
  }, ".content-slide.jsx-311911008{position:absolute;top:0;left:0;width:100%;height:50rem;}.content-slide.jsx-311911008 .content-slide-image.jsx-311911008{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;max-height:100%;}.content-slide-vote.jsx-311911008{position:absolute;width:100%;height:initial;}.content-bg-col.jsx-311911008{background-color:rgba(91,92,96,0.5);border-radius:5px;color:white;font-family:sans-serif;line-height:1.5;max-width:50%;padding:0rem;}.content-bg-col.jsx-311911008 a.jsx-311911008{color:#bf0222;}@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none){.content-bg-col.jsx-311911008{-webkit-backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(91,92,96,0.5);}}.content-bg-col.jsx-311911008 .content-description.jsx-311911008,.content-bg-col.jsx-311911008 .content-link.jsx-311911008,.content-bg-col.jsx-311911008 .txt.jsx-311911008{padding:0.8rem 2rem;}.content-bg-col.jsx-311911008 .txt.jsx-311911008{padding-bottom:2rem;}.content-bg-col.jsx-311911008 h4.jsx-311911008{font-size:0.9rem;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.19;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;}.content-bg-col.jsx-311911008 h2.jsx-311911008{font-size:2.5rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-bg-col.jsx-311911008 h3.jsx-311911008{font-size:0.7rem;font-weight:bold;font-stretch:normal;font-style:normal;line-height:1.2;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;margin:0rem;padding:0rem;}.content-bg-col.jsx-311911008 p.jsx-311911008{padding:0rem;}.content-link.jsx-311911008{font-size:7px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.71;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-link.jsx-311911008 a.jsx-311911008{color:#ffffff;padding:0.5rem 0rem;}.content-link.jsx-311911008 a.jsx-311911008:hover{color:rgba(91,92,96,1);-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.content-link.jsx-311911008 a.jsx-311911008 i.jsx-311911008{margin:0.1rem;}.content-vote-items.jsx-311911008 .row.jsx-311911008{margin:0rem;}.content-vote-items.jsx-311911008 .icon.jsx-311911008{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content-vote-items.jsx-311911008 .icon.jsx-311911008 i.jsx-311911008{font-size:1.5rem;}.content-vote-items.jsx-311911008 .dislike-link.jsx-311911008{height:2.5rem;background-color:#ffad1d;}.content-vote-items.jsx-311911008 .dislike-link.jsx-311911008:hover i.jsx-311911008{color:#1cbbb4;}.content-vote-items.jsx-311911008 .like-link.jsx-311911008{height:2.5rem;background-color:#1cbbb4;}.content-vote-items.jsx-311911008 .like-link.jsx-311911008:hover i.jsx-311911008{color:#ffad1d;}.content-vote-time.jsx-311911008{position:absolute;bottom:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:25px;}.content-vote-time.jsx-311911008 .time-txt.jsx-311911008{background-color:#ada79f;color:white;width:35%;position:relative;}.content-vote-time.jsx-311911008 .time-days.jsx-311911008{background-color:#ffffff;width:65%;padding:0rem 0.5rem;}.time-txt.jsx-311911008:after,.time-txt.jsx-311911008:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;}.time-txt.jsx-311911008:after{border-color:transparent;border-left-color:transparent;border-width:7px;margin-top:-7px;}.time-txt.jsx-311911008:before{border-color:transparent;border-left-color:#a69f97;border-width:7px;margin-top:-7px;}.time-txt.jsx-311911008 h6.jsx-311911008{font-size:13px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.62;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 5px;margin:0px;}.content-vote-time.jsx-311911008 .time-days.jsx-311911008 p.jsx-311911008{height:100%;margin:0px;font-size:18px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.36;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#464646;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.8;}.content-vote-time.jsx-311911008 .time-days.jsx-311911008 p.jsx-311911008 span.jsx-311911008{color:#464646;padding:0rem 0.5rem;opacity:1;}.content-btn.jsx-311911008{margin:1rem 0.4rem;padding:0.2rem 0.4rem;border:1px solid white;}.content-btn.jsx-311911008 p.jsx-311911008{text-align:center;margin:0rem;padding:0.5rem;}.content-btn.jsx-311911008:hover{background-color:white;cursor:pointer;}.content-btn.jsx-311911008:hover p.jsx-311911008{color:rgba(91,92,96,0.5);}@media only screen  and (min-device-width:320px)  and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){.content-bg-col.jsx-311911008{max-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RmtCLEFBRzZCLEFBUUwsQUFVSSxBQU1vQixBQVV2QixBQUt1QixBQU9qQixBQUlBLEFBSUgsQUFVQSxBQVdBLEFBYUwsQUFJRSxBQVdBLEFBS1UsQUFNVixBQUtGLEFBSUQsQUFTTSxBQUlILEFBS0EsQUFJQSxBQUtBLEFBSUcsQUFVUSxBQU9BLEFBTWYsQUFXZSxBQU9BLEFBT1YsQUFtQkosQUFtQkcsQUFNSyxBQU1GLEFBTUssQUFLRSxBQVFMLFVBN0ZYLEVBMURWLEFBSWMsQUFrR0QsQ0FySWIsQ0F0REEsQUEwRGtCLEFBV0ksQUFZdEIsQUFxQjJCLEFBSzNCLEFBSTJCLEFBSzNCLEFBMEZzQixDQXRDRCxBQXFFakIsRUF6TmMsQUFVRyxBQVdGLEFBeURuQixDQXBJUSxBQWtCSyxBQXdJRixBQXdCZ0IsQUEwRWQsQ0FOVyxDQXhNeEIsQUFJQSxHQTBEMkIsQUFrSFYsQUFvQ0QsQ0FqUVAsQ0FtS0ksQUFPRixBQWlCcUIsQUFPSixBQW9FNUIsRUE1R1MsRUF4SVEsQ0EwRUssQUFnS04sQ0EzUEgsRUFxRFMsQ0FxQkEsQUE0QnRCLEFBb0RZLEFBK0NVLEFBc0NWLENBMU1tQixBQXFJVixDQXBKRCxBQXlDRSxDQW9HWCxDQTBETyxBQW9DbEIsQ0ExSEEsQUFTQSxFQXFHd0IsQ0FwUFQsQ0FnTEQsQ0EvSmQsQUE4TkEsQ0FyRmMsQUFpR2QsRUF4Rm1CLEdBeEVDLENBc0dELEVBNUlDLENBL0JOLEFBb0RNLEFBK0hBLEFBb0JFLENBNU50QixBQXlLQSxBQU9XLEFBU1EsQ0EzSEMsUUFtSFYsQUFtRVYsQ0FqRkEsQ0E3SXlCLEVBcUVOLEFBc0dELEdBNUlDLENBcUJELEFBd0dFLEFBUUYsQUFlQyxFQXJNSyxBQTJEUixBQThKSSxTQXBISCxDQXlGakIsQ0F0R3dCLENBNEJKLEVBbEVJLEFBVUEsQUFXQSxBQWdIeEIsQ0FwS2tCLEFBbUxNLENBdkJGLEVBMkNILEtBMUxzQixDQXNFekMsT0FsRmdCLElBdU1RLENBM0N4QixTQTNKYyxBQWlJTSxhQWhJcEIsQ0FXRSxtQkFoQ3VCLEdBb0hELGlDQWtDWCxFQTlESyxHQXRDQSxBQVVBLEFBV0EsQ0ErSEEsTUEvQ2xCLE1BOURnQixHQXRDaEIsQUFVZ0IsQUFXQSxDQStIQSxJQW9CRSxNQWpJbEIsR0E1QkEsQUFXYyxDQStIQSxNQW9CRSxLQWxKRCxTQW1KRCxJQWxKZCxHQTFFdUIsR0FvSEQsNENBb0ZGLG9CQXFCQSxTQTVOQyxHQW9IRCxxQ0FvRk8sb0JBcUJFLGlDQTVOZixHQW9IZCxTQW5Ia0IsZ0JBQ2xCLGdCQXNNc0IsNEJBcUJBLGdEQXBCRiw0QkFxQkEsaUVBcEJOLFlBQ0UsY0FDSixFQW1CRSxTQWxCZCxHQW1CQSIsImZpbGUiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3plbW9nYS9wb3BlLXdlYi9zcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRSYXRlUG9zdCwgYWRkRGlzUmF0ZVBvc3QgfSBmcm9tICcuLi9zdG9yZS9kYXRhUG9zdC9hY3Rpb24nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZSdcblxuY29uc3QgU2xpZGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3ZvdGUsIHNldFZvdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsLCBzZXRTZWxdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgc2hvd1ZvdGUgPSAodmFsdWUpID0+e1xuICAgIHNldFZvdGUodmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCd0dHR0dCcpXG4gIH1cblxuICBjb25zdCB1cGRhdGVWb3RlID0gKCkgPT57XG4gICAgaWYoc2VsKXtcbiAgICAgIHByb3BzLmFkZFVwZGF0ZVJhdGVMaWtlKGAke3Byb3BzLmRhdGFTZWx9YClcbiAgICB9ZWxzZXtcbiAgICAgIHByb3BzLmFkZFVwZGF0ZVJhdGVEaXNMaWtlKGAke3Byb3BzLmRhdGFTZWx9YClcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyh2b3RlKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zbGlkZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGUtaW1hZ2VcIj5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBwYXRoPVwiL2Fzc2V0cy9pbWFnZXMvcG9wZS9cIlxuICAgICAgICAgICAgbmFtZT1cInBvcGVcIlxuICAgICAgICAgICAgZm9ybWF0PVwicG5nXCJcbiAgICAgICAgICAgIGFsdD1cInBvcGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNsaWRlLXZvdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEwIG9mZnNldC1zMSBtNiBsNiBjb250ZW50LWJnLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5XaGF04oCZcyB5b3VyIG9waW5pb24gb248L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDI+UG9wZSBGcmFuY2lzPzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbCBzMTBcIj5IZeKAmXMgdGFsa2luZyB0b3VnaCBvbiBjbGVyZ3kgc2V4dWFsIGFidXNlLCBidXQgaXMgaGUganVzdCBhbm90aGVyIHBhcGFsIHBlcnZlcnQgcHJvdGVjdG9yPyAodGh1bWJzIGRvd24pIG9yIGEgdHJ1ZSBwZWRvcGhpbGUgcHVuaXNoaW5nIHBvbnRpZmY/ICh0aHVtYnMgdXApPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTAgY29udGVudC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb3BlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtd2lraXBlZGlhLXdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW9yZSBpbmZvcm1hdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTAgdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5XaGF04oCZcyBZb3VyIFZlcmRpY3Q/PC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXZvdGUtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2IGljb24gbGlrZS1saW5rXCIgb25DbGljaz17KCk9PntzaG93Vm90ZSh0cnVlKSwgc2V0U2VsKHRydWUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy1vLXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNiBpY29uIGRpc2xpa2UtbGlua1wiIG9uQ2xpY2s9eygpPT57c2hvd1ZvdGUoZmFsc2UpLCBzZXRTZWwoZmFsc2UpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy1vLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdm90ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNCBvZmZzZXQtczRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJ0blwiIG9uQ2xpY2s9e3VwZGF0ZVZvdGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Vm90ZSBub3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdm90ZS10aW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtdHh0XCI+XG4gICAgICAgICAgICAgIDxoNj5DTE9TSU5HIElOPC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWRheXNcIj5cbiAgICAgICAgICAgICAgPHA+PHNwYW4+MjI8L3NwYW4+ZGF5czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVudC1zbGlkZXtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXNsaWRlIC5jb250ZW50LXNsaWRlLWltYWdle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXNsaWRlLXZvdGV7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLDkyLDk2LCAwLjUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nOjByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgYSB7XG4gICAgICAgICAgY29sb3I6ICNiZjAyMjI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmUpIG9yIChiYWNrZHJvcC1maWx0ZXI6IG5vbmUpIHtcbiAgICAgICAgICAuY29udGVudC1iZy1jb2wge1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLDkyLDk2LCAwLjUpOyAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIC5jb250ZW50LWRlc2NyaXB0aW9uLCAuY29udGVudC1iZy1jb2wgLmNvbnRlbnQtbGluayAsIC5jb250ZW50LWJnLWNvbCAudHh0e1xuICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIC50eHR7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgaDR7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTk7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCBoM3tcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgcHtcbiAgICAgICAgICBwYWRkaW5nOjByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5re1xuICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmsgYXtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmsgYTpob3ZlcntcbiAgICAgICAgICBjb2xvcjogcmdiYSg5MSw5Miw5NiwgMSk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5rIGEgaXtcbiAgICAgICAgICBtYXJnaW46IDAuMXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLnJvd3tcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5pY29ue1xuICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5pY29uIGl7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5kaXNsaWtlLWxpbmt7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWQxZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmRpc2xpa2UtbGluazpob3ZlciBpe1xuICAgICAgICAgIGNvbG9yOiAjMWNiYmI0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAubGlrZS1saW5re1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2JiYjQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5saWtlLWxpbms6aG92ZXIgaXtcbiAgICAgICAgICBjb2xvcjogI2ZmYWQxZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZXtcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAgaGVpZ2h0OjI1cHg7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZSAudGltZS10eHR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYTc5ZjtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICB3aWR0aDozNSU7XG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLXRpbWUgLnRpbWUtZGF5c3tcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHdpZHRoOjY1JTtcbiAgICAgICAgICBwYWRkaW5nOjByZW0gMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0OmFmdGVyLCAudGltZS10eHQ6YmVmb3Jle1xuICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0OmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDdweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2E2OWY5NztcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDdweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0IGg2e1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42MjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZSAudGltZS1kYXlzIHB7XG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS10aW1lIC50aW1lLWRheXMgcCBzcGFue1xuICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgICAgICAgIHBhZGRpbmc6IDByZW0gMC41cmVtO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1idG57XG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDAuNHJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1idG4gcHtcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46MHJlbTtcbiAgICAgICAgICBwYWRkaW5nOjAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJ0bjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYnRuOmhvdmVyIHB7XG4gICAgICAgICAgY29sb3I6cmdiYSg5MSw5Miw5NiwwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICAgICAgICAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIFxuICAgICAgICAgIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpXG4gICAgICAgICAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgICAgICAgICAgIC5jb250ZW50LWJnLWNvbCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn07XG5cblNsaWRlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHN0b3JlLCBpc1NlcnZlciB9KSA9PiB7XG4gIHJldHVybiB7IGlzU2VydmVyIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHJlZHVjZXIpID0+e1xuICByZXR1cm4ge1xuICAgIGRhdGFpbml0aWFsOiByZWR1Y2VyLmRhdGFQb3N0LFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRVcGRhdGVSYXRlTGlrZTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZFJhdGVQb3N0LCBkaXNwYXRjaCksXG4gICAgYWRkVXBkYXRlUmF0ZURpc0xpa2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGREaXNSYXRlUG9zdCwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNsaWRlKVxuIl19 */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/components/slide.js */"));
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
//# sourceMappingURL=index.js.7d061d13669c3fb0bdbb.hot-update.js.map