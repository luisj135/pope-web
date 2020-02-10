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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "content-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "content-slide-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: "/assets/images/pope/",
    name: "pope",
    format: "png",
    alt: "pope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3243201645" + " " + "content-slide-vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "col s10 offset-s1 m6 l6 content-bg-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "content-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "What\u2019s your opinion on"), __jsx("h2", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Pope Francis?"), __jsx("p", {
    className: "jsx-3243201645" + " " + "col s10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "He\u2019s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)")), __jsx("div", {
    className: "jsx-3243201645" + " " + "col s10 content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Pope",
    target: "_blank",
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3243201645" + " " + "fa fa-wikipedia-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "More information"))), __jsx("div", {
    className: "jsx-3243201645" + " " + "col s10 txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "What\u2019s Your Verdict?")), __jsx("div", {
    className: "jsx-3243201645" + " " + "content-vote-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      showVote(), setSel(true);
    },
    className: "jsx-3243201645" + " " + "col s6 icon like-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3243201645" + " " + "fa fa-thumbs-o-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      showVote(), setSel(false);
    },
    className: "jsx-3243201645" + " " + "col s6 icon dislike-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3243201645" + " " + "fa fa-thumbs-o-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), vote && __jsx("div", {
    className: "jsx-3243201645" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    onClick: updateVote,
    className: "jsx-3243201645" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Vote now")))))))), __jsx("div", {
    className: "jsx-3243201645" + " " + "content-vote-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3243201645" + " " + "time-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("h6", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "CLOSING IN")), __jsx("div", {
    className: "jsx-3243201645" + " " + "time-days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3243201645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "22"), "days"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3243201645",
    __self: this
  }, ".content-slide.jsx-3243201645{position:absolute;top:0;left:0;width:100%;height:50rem;}.content-slide.jsx-3243201645 .content-slide-image.jsx-3243201645{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;max-height:100%;}.content-slide-vote.jsx-3243201645{position:absolute;width:100%;height:initial;}.content-bg-col.jsx-3243201645{background-color:rgba(91,92,96,0.5);border-radius:5px;color:white;font-family:sans-serif;line-height:1.5;max-width:50%;padding:0rem;}.content-bg-col.jsx-3243201645 a.jsx-3243201645{color:#bf0222;}@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none){.content-bg-col.jsx-3243201645{-webkit-backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(91,92,96,0.5);}}.content-bg-col.jsx-3243201645 .content-description.jsx-3243201645,.content-bg-col.jsx-3243201645 .content-link.jsx-3243201645,.content-bg-col.jsx-3243201645 .txt.jsx-3243201645{padding:0.8rem 2rem;}.content-bg-col.jsx-3243201645 .txt.jsx-3243201645{padding-bottom:2rem;}.content-bg-col.jsx-3243201645 h4.jsx-3243201645{font-size:0.9rem;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.19;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;}.content-bg-col.jsx-3243201645 h2.jsx-3243201645{font-size:2.5rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-bg-col.jsx-3243201645 h3.jsx-3243201645{font-size:0.7rem;font-weight:bold;font-stretch:normal;font-style:normal;line-height:1.2;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;margin:0rem;padding:0rem;}.content-bg-col.jsx-3243201645 p.jsx-3243201645{padding:0rem;}.content-link.jsx-3243201645{font-size:7px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.71;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-link.jsx-3243201645 a.jsx-3243201645{color:#ffffff;padding:0.5rem 0rem;}.content-link.jsx-3243201645 a.jsx-3243201645:hover{color:rgba(91,92,96,1);-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.content-link.jsx-3243201645 a.jsx-3243201645 i.jsx-3243201645{margin:0.1rem;}.content-vote-items.jsx-3243201645 .row.jsx-3243201645{margin:0rem;}.content-vote-items.jsx-3243201645 .icon.jsx-3243201645{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content-vote-items.jsx-3243201645 .icon.jsx-3243201645 i.jsx-3243201645{font-size:1.5rem;}.content-vote-items.jsx-3243201645 .dislike-link.jsx-3243201645{height:2.5rem;background-color:#ffad1d;}.content-vote-items.jsx-3243201645 .dislike-link.jsx-3243201645:hover i.jsx-3243201645{color:#1cbbb4;}.content-vote-items.jsx-3243201645 .like-link.jsx-3243201645{height:2.5rem;background-color:#1cbbb4;}.content-vote-items.jsx-3243201645 .like-link.jsx-3243201645:hover i.jsx-3243201645{color:#ffad1d;}.content-vote-time.jsx-3243201645{position:absolute;bottom:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:25px;}.content-vote-time.jsx-3243201645 .time-txt.jsx-3243201645{background-color:#ada79f;color:white;width:35%;position:relative;}.content-vote-time.jsx-3243201645 .time-days.jsx-3243201645{background-color:#ffffff;width:65%;padding:0rem 0.5rem;}.time-txt.jsx-3243201645:after,.time-txt.jsx-3243201645:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;}.time-txt.jsx-3243201645:after{border-color:transparent;border-left-color:transparent;border-width:7px;margin-top:-7px;}.time-txt.jsx-3243201645:before{border-color:transparent;border-left-color:#a69f97;border-width:7px;margin-top:-7px;}.time-txt.jsx-3243201645 h6.jsx-3243201645{font-size:13px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.62;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 5px;margin:0px;}.content-vote-time.jsx-3243201645 .time-days.jsx-3243201645 p.jsx-3243201645{height:100%;margin:0px;font-size:18px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.36;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#464646;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.8;}.content-vote-time.jsx-3243201645 .time-days.jsx-3243201645 p.jsx-3243201645 span.jsx-3243201645{color:#464646;padding:0rem 0.5rem;opacity:1;}@media only screen  and (min-device-width:320px)  and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){.content-bg-col.jsx-3243201645{max-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzZCLEFBUUwsQUFVSSxBQU1vQixBQVV2QixBQUt1QixBQU9qQixBQUlBLEFBSUgsQUFVQSxBQVdBLEFBYUwsQUFJRSxBQVdBLEFBS1UsQUFNVixBQUtGLEFBSUQsQUFTTSxBQUlILEFBS0EsQUFJQSxBQUtBLEFBSUcsQUFVUSxBQU9BLEFBTWYsQUFXZSxBQU9BLEFBT1YsQUFtQkosQUFtQkcsQUFVSyxVQXhFWCxFQTFEVixBQUljLEFBa0dELENBckliLENBdERBLEFBMERrQixBQVdJLEFBWXRCLEFBcUIyQixBQUszQixBQUkyQixBQUszQixBQTBGc0IsQ0F0Q0QsQUFnRGpCLEVBcE1jLEFBVUcsQUFXRixBQXlEbkIsQ0FwSVEsQUFrQkssQUF3SUYsQUF3QmdCLEVBcEkzQixBQUlBLEdBMEQyQixBQWtIVixDQTdOUixDQW1LSSxBQU9GLEFBaUJxQixBQU9KLEVBeENuQixFQXhJUSxDQTBFSyxDQTNGVCxFQXFEUyxDQXFCQSxBQTRCdEIsQUFvRFksQUErQ1UsQUFzQ1YsQ0ExTW1CLEFBcUlWLENBcEpELEFBeUNFLENBb0dYLENBMERPLENBdEZsQixBQVNBLEdBL0llLENBZ0xELENBL0pkLEFBOE5BLENBckZjLEVBU0ssR0F4RUMsQ0FzR0QsRUE1SUMsQ0EvQk4sQUFvRE0sQUErSEEsQUFvQkUsQ0E1TnRCLEFBeUtBLEFBT1csQUFTUSxDQTNIQyxRQW1IVixDQWRWLENBN0l5QixFQXFFTixBQXNHRCxHQTVJQyxDQXFCRCxBQXdHRSxBQVFGLEFBZUMsRUFyTUssQUEyRFIsQUE4SkksU0FwSEgsQ0F5RmpCLENBdEd3QixDQTRCSixFQWxFSSxBQVVBLEFBV0EsQUFnSHhCLENBcEtrQixBQW1MTSxDQXZCRixFQTJDSCxLQTFMc0IsQ0FzRXpDLE9BbEZnQixJQXVNUSxDQTNDeEIsU0EzSmMsQUFpSU0sYUFoSXBCLENBV0UsbUJBaEN1QixHQW9IRCxpQ0FrQ1gsRUE5REssR0F0Q0EsQUFVQSxBQVdBLENBK0hBLE1BL0NsQixNQTlEZ0IsR0F0Q2hCLEFBVWdCLEFBV0EsQ0ErSEEsSUFvQkUsTUFqSWxCLEdBNUJBLEFBV2MsQ0ErSEEsTUFvQkUsS0FsSkQsU0FtSkQsSUFsSmQsR0ExRXVCLEdBb0hELDRDQW9GRixvQkFxQkEsU0E1TkMsR0FvSEQscUNBb0ZPLG9CQXFCRSxpQ0E1TmYsR0FvSGQsU0FuSGtCLGdCQUNsQixnQkFzTXNCLDRCQXFCQSxnREFwQkYsNEJBcUJBLGlFQXBCTixZQUNFLGNBQ0osRUFtQkUsU0FsQmQsR0FtQkEiLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy96ZW1vZ2EvcG9wZS13ZWIvc3JjL2FwcC9jb21wb25lbnRzL3NsaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkUmF0ZVBvc3QsIGFkZERpc1JhdGVQb3N0IH0gZnJvbSAnLi4vc3RvcmUvZGF0YVBvc3QvYWN0aW9uJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5cbmNvbnN0IFNsaWRlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt2b3RlLCBzZXRWb3RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbCwgc2V0U2VsXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHNob3dWb3RlID0gKHZhbHVlKSA9PntcbiAgICBzZXRWb3RlKHZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygndHR0dHQnKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVm90ZSA9ICgpID0+e1xuICAgIGlmKHNlbCl7XG4gICAgICBwcm9wcy5hZGRVcGRhdGVSYXRlTGlrZShgJHtwcm9wcy5kYXRhU2VsfWApXG4gICAgfWVsc2V7XG4gICAgICBwcm9wcy5hZGRVcGRhdGVSYXRlRGlzTGlrZShgJHtwcm9wcy5kYXRhU2VsfWApXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNsaWRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zbGlkZS1pbWFnZVwiPlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHBhdGg9XCIvYXNzZXRzL2ltYWdlcy9wb3BlL1wiXG4gICAgICAgICAgICBuYW1lPVwicG9wZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJwbmdcIlxuICAgICAgICAgICAgYWx0PVwicG9wZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGUtdm90ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTAgb2Zmc2V0LXMxIG02IGw2IGNvbnRlbnQtYmctY29sXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PldoYXTigJlzIHlvdXIgb3BpbmlvbiBvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qb3BlIEZyYW5jaXM/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sIHMxMFwiPkhl4oCZcyB0YWxraW5nIHRvdWdoIG9uIGNsZXJneSBzZXh1YWwgYWJ1c2UsIGJ1dCBpcyBoZSBqdXN0IGFub3RoZXIgcGFwYWwgcGVydmVydCBwcm90ZWN0b3I/ICh0aHVtYnMgZG93bikgb3IgYSB0cnVlIHBlZG9waGlsZSBwdW5pc2hpbmcgcG9udGlmZj8gKHRodW1icyB1cCk8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCBjb250ZW50LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BvcGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aWtpcGVkaWEtd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb3JlIGluZm9ybWF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCB0eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPldoYXTigJlzIFlvdXIgVmVyZGljdD88L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdm90ZS1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgaWNvbiBsaWtlLWxpbmtcIiBvbkNsaWNrPXsoKT0+e3Nob3dWb3RlKCksIHNldFNlbCh0cnVlKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aHVtYnMtby11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczYgaWNvbiBkaXNsaWtlLWxpbmtcIiBvbkNsaWNrPXsoKT0+e3Nob3dWb3RlKCksIHNldFNlbChmYWxzZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLW8tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB2b3RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1idG5cIiBvbkNsaWNrPXt1cGRhdGVWb3RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Wb3RlIG5vdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdm90ZS10aW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtdHh0XCI+XG4gICAgICAgICAgICAgIDxoNj5DTE9TSU5HIElOPC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWRheXNcIj5cbiAgICAgICAgICAgICAgPHA+PHNwYW4+MjI8L3NwYW4+ZGF5czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVudC1zbGlkZXtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXNsaWRlIC5jb250ZW50LXNsaWRlLWltYWdle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXNsaWRlLXZvdGV7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLDkyLDk2LCAwLjUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nOjByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgYSB7XG4gICAgICAgICAgY29sb3I6ICNiZjAyMjI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBzdXBwb3J0cyAoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmUpIG9yIChiYWNrZHJvcC1maWx0ZXI6IG5vbmUpIHtcbiAgICAgICAgICAuY29udGVudC1iZy1jb2wge1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLDkyLDk2LCAwLjUpOyAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIC5jb250ZW50LWRlc2NyaXB0aW9uLCAuY29udGVudC1iZy1jb2wgLmNvbnRlbnQtbGluayAsIC5jb250ZW50LWJnLWNvbCAudHh0e1xuICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIC50eHR7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgaDR7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTk7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIGgye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCBoM3tcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgcHtcbiAgICAgICAgICBwYWRkaW5nOjByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5re1xuICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmsgYXtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWxpbmsgYTpob3ZlcntcbiAgICAgICAgICBjb2xvcjogcmdiYSg5MSw5Miw5NiwgMSk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5rIGEgaXtcbiAgICAgICAgICBtYXJnaW46IDAuMXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLnJvd3tcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5pY29ue1xuICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5pY29uIGl7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5kaXNsaWtlLWxpbmt7XG4gICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWQxZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmRpc2xpa2UtbGluazpob3ZlciBpe1xuICAgICAgICAgIGNvbG9yOiAjMWNiYmI0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAubGlrZS1saW5re1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2JiYjQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5saWtlLWxpbms6aG92ZXIgaXtcbiAgICAgICAgICBjb2xvcjogI2ZmYWQxZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZXtcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAgaGVpZ2h0OjI1cHg7XG4gICAgICAgIH0gIFxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZSAudGltZS10eHR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYTc5ZjtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICB3aWR0aDozNSU7XG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLXRpbWUgLnRpbWUtZGF5c3tcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHdpZHRoOjY1JTtcbiAgICAgICAgICBwYWRkaW5nOjByZW0gMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0OmFmdGVyLCAudGltZS10eHQ6YmVmb3Jle1xuICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0OmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDdweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2E2OWY5NztcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDdweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtdHh0IGg2e1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42MjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZSAudGltZS1kYXlzIHB7XG4gICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS10aW1lIC50aW1lLWRheXMgcCBzcGFue1xuICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgICAgICAgIHBhZGRpbmc6IDByZW0gMC41cmVtO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gXG4gICAgICAgICAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgXG4gICAgICAgICAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweClcbiAgICAgICAgICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAgICAgICAgICAgLmNvbnRlbnQtYmctY29sIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufTtcblxuU2xpZGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgc3RvcmUsIGlzU2VydmVyIH0pID0+IHtcbiAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAocmVkdWNlcikgPT57XG4gIHJldHVybiB7XG4gICAgZGF0YWluaXRpYWw6IHJlZHVjZXIuZGF0YVBvc3QsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZFVwZGF0ZVJhdGVMaWtlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkUmF0ZVBvc3QsIGRpc3BhdGNoKSxcbiAgICBhZGRVcGRhdGVSYXRlRGlzTGlrZTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZERpc1JhdGVQb3N0LCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2xpZGUpXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/components/slide.js */"));
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
//# sourceMappingURL=index.js.146278623bdd1ab37ca0.hot-update.js.map