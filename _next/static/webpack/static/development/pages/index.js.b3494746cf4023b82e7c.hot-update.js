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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showmsn = _useState3[0],
      setShowmsn = _useState3[1];

  var showVote = function showVote(value) {
    setVote(value);
  };

  var updateVote = function updateVote() {
    if (sel) {
      props.addUpdateRateLike("".concat(props.dataSel));
    } else {
      props.addUpdateRateDisLike("".concat(props.dataSel));
    }

    setVote(false);
    setShowmsn(true);
  };

  console.log(vote);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "content-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "content-slide-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: "/assets/images/pope/",
    name: "pope",
    format: "png",
    alt: "pope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1551383270" + " " + "content-slide-vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "col s10 offset-s1 m6 l6 content-bg-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "content-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "What\u2019s your opinion on"), __jsx("h2", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Pope Francis?"), __jsx("p", {
    className: "jsx-1551383270" + " " + "col s10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "He\u2019s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)")), __jsx("div", {
    className: "jsx-1551383270" + " " + "col s10 content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    href: "https://en.wikipedia.org/wiki/Pope",
    target: "_blank",
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1551383270" + " " + "fa fa-wikipedia-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "More information"))), __jsx("div", {
    className: "jsx-1551383270" + " " + "col s10 txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "What\u2019s Your Verdict?")), __jsx("div", {
    className: "jsx-1551383270" + " " + "content-vote-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      showVote(true), setSel(true);
    },
    className: "jsx-1551383270" + " " + "col s6 icon like-link ".concat(sel && vote ? 'like-vote' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1551383270" + " " + "fa fa-thumbs-o-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx("div", {
    onClick: function onClick() {
      showVote(true), setSel(false);
    },
    className: "jsx-1551383270" + " " + "col s6 icon dislike-link ".concat(!sel && vote ? 'dislike-vote' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1551383270" + " " + "fa fa-thumbs-o-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), vote && !showmsn && __jsx("div", {
    className: "jsx-1551383270" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "col s10 offset-s1 m8 offset-m2 l8 offset-l2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      updateVote();
    },
    className: "jsx-1551383270" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Vote now")))), !vote && showmsn && __jsx("div", {
    className: "jsx-1551383270" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "col s12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "col s10 offset-s1 m6 l6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\u201CThank you for voting!\u201D")), __jsx("div", {
    className: "jsx-1551383270" + " " + "col s10 offset-s1 m6 l6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      setVote(false);
      setShowmsn(false);
    },
    className: "jsx-1551383270" + " " + "content-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Vote again")))))))))), __jsx("div", {
    className: "jsx-1551383270" + " " + "content-vote-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1551383270" + " " + "time-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("h6", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "CLOSING IN")), __jsx("div", {
    className: "jsx-1551383270" + " " + "time-days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1551383270",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "22"), "days"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1551383270",
    __self: this
  }, ".content-slide.jsx-1551383270{position:absolute;top:0;left:0;width:100%;height:50rem;}.content-slide.jsx-1551383270 .content-slide-image.jsx-1551383270{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;max-height:100%;}.content-slide-vote.jsx-1551383270{position:absolute;width:100%;height:initial;}.content-bg-col.jsx-1551383270{background-color:rgba(91,92,96,0.5);border-radius:5px;color:white;font-family:sans-serif;line-height:1.5;max-width:50%;padding:0rem;}.content-bg-col.jsx-1551383270 a.jsx-1551383270{color:#bf0222;}@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none){.content-bg-col.jsx-1551383270{-webkit-backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(91,92,96,0.5);}}.content-bg-col.jsx-1551383270 .content-description.jsx-1551383270,.content-bg-col.jsx-1551383270 .content-link.jsx-1551383270,.content-bg-col.jsx-1551383270 .txt.jsx-1551383270{padding:0.8rem 2rem;}.content-bg-col.jsx-1551383270 .txt.jsx-1551383270{padding-bottom:2rem;}.content-bg-col.jsx-1551383270 h4.jsx-1551383270{font-size:0.9rem;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.19;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;}.content-bg-col.jsx-1551383270 h2.jsx-1551383270{font-size:2.5rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-bg-col.jsx-1551383270 h3.jsx-1551383270{font-size:0.7rem;font-weight:bold;font-stretch:normal;font-style:normal;line-height:1.2;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;margin:0rem;padding:0rem;}.content-bg-col.jsx-1551383270 p.jsx-1551383270{padding:0rem;}.content-link.jsx-1551383270{font-size:7px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.71;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;}.content-link.jsx-1551383270 a.jsx-1551383270{color:#ffffff;padding:0.5rem 0rem;}.content-link.jsx-1551383270 a.jsx-1551383270:hover{color:rgba(91,92,96,1);-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.content-link.jsx-1551383270 a.jsx-1551383270 i.jsx-1551383270{margin:0.1rem;}.content-vote-items.jsx-1551383270 .row.jsx-1551383270{margin:0rem;}.content-vote-items.jsx-1551383270 .icon.jsx-1551383270{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content-vote-items.jsx-1551383270 .icon.jsx-1551383270 i.jsx-1551383270{font-size:1.5rem;}.content-vote-items.jsx-1551383270 .dislike-link.jsx-1551383270{height:2.5rem;background-color:#ffad1d;}.content-vote-items.jsx-1551383270 .dislike-link.jsx-1551383270:hover i.jsx-1551383270{color:#1cbbb4;}.content-vote-items.jsx-1551383270 .like-link.jsx-1551383270{height:2.5rem;background-color:#1cbbb4;}.content-vote-items.jsx-1551383270 .like-link.jsx-1551383270:hover i.jsx-1551383270{color:#ffad1d;}.content-vote-time.jsx-1551383270{position:absolute;bottom:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:25px;}.content-vote-time.jsx-1551383270 .time-txt.jsx-1551383270{background-color:#ada79f;color:white;width:35%;position:relative;}.content-vote-time.jsx-1551383270 .time-days.jsx-1551383270{background-color:#ffffff;width:65%;padding:0rem 0.5rem;}.time-txt.jsx-1551383270:after,.time-txt.jsx-1551383270:before{left:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;}.time-txt.jsx-1551383270:after{border-color:transparent;border-left-color:transparent;border-width:7px;margin-top:-7px;}.time-txt.jsx-1551383270:before{border-color:transparent;border-left-color:#a69f97;border-width:7px;margin-top:-7px;}.time-txt.jsx-1551383270 h6.jsx-1551383270{font-size:13px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.62;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 5px;margin:0px;}.content-vote-time.jsx-1551383270 .time-days.jsx-1551383270 p.jsx-1551383270{height:100%;margin:0px;font-size:18px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.36;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;text-align:left;color:#464646;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.8;}.content-vote-time.jsx-1551383270 .time-days.jsx-1551383270 p.jsx-1551383270 span.jsx-1551383270{color:#464646;padding:0rem 0.5rem;opacity:1;}.content-btn.jsx-1551383270{margin:1rem 0.4rem;padding:0.2rem 0.4rem;border:1px solid white;}.content-btn.jsx-1551383270 p.jsx-1551383270{text-align:center;margin:0rem;padding:0.5rem;}.content-btn.jsx-1551383270:hover{background-color:white;cursor:pointer;}.content-btn.jsx-1551383270:hover p.jsx-1551383270{color:rgba(91,92,96,0.5);}.like-vote.jsx-1551383270,.dislike-vote.jsx-1551383270{border-bottom:1px solid white;}@media only screen  and (min-device-width:320px)  and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){.content-bg-col.jsx-1551383270{max-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R2tCLEFBRzZCLEFBUUwsQUFVSSxBQU1vQixBQVV2QixBQUt1QixBQU9qQixBQUlBLEFBSUgsQUFVQSxBQVdBLEFBYUwsQUFJRSxBQVdBLEFBS1UsQUFNVixBQUtGLEFBSUQsQUFTTSxBQUlILEFBS0EsQUFJQSxBQUtBLEFBSUcsQUFVUSxBQU9BLEFBTWYsQUFXZSxBQU9BLEFBT1YsQUFtQkosQUFtQkcsQUFNSyxBQU1GLEFBTUssQUFLRSxBQUlLLEFBUVYsVUFqR1gsRUExRFYsQUFJYyxBQWtHRCxDQXJJYixDQXREQSxBQTBEa0IsQUFXSSxBQVl0QixBQXFCMkIsQUFLM0IsQUFJMkIsQUFLM0IsQUEwRnNCLENBdENELEFBeUVqQixFQTdOYyxBQVVHLEFBV0YsQUF5RG5CLENBcElRLEFBa0JLLEFBd0lGLEFBd0JnQixBQTBFZCxDQU5XLENBeE14QixBQUlBLEdBMEQyQixBQWtIVixBQW9DRCxDQWpRUCxDQW1LSSxBQU9GLEFBaUJxQixBQU9KLEFBb0U1QixFQTVHUyxFQXhJUSxDQTBFSyxBQWdLTixBQWNoQixDQXpRYSxFQXFEUyxDQXFCQSxBQTRCdEIsQUFvRFksQUErQ1UsQUFzQ1YsQ0ExTW1CLEFBcUlWLENBcEpELEFBeUNFLENBb0dYLENBMERPLEFBb0NsQixDQTFIQSxBQVNBLEVBcUd3QixDQXBQVCxDQWdMRCxDQS9KZCxBQThOQSxDQXJGYyxBQWlHZCxFQXhGbUIsR0F4RUMsQ0FzR0QsRUE1SUMsQ0EvQk4sQUFvRE0sQUErSEEsQUFvQkUsQ0E1TnRCLEFBeUtBLEFBT1csQUFTUSxDQTNIQyxRQW1IVixBQW1FVixDQWpGQSxDQTdJeUIsRUFxRU4sQUFzR0QsR0E1SUMsQ0FxQkQsQUF3R0UsQUFRRixBQWVDLEVBck1LLEFBMkRSLEFBOEpJLFNBcEhILENBeUZqQixDQXRHd0IsQ0E0QkosRUFsRUksQUFVQSxBQVdBLEFBZ0h4QixDQXBLa0IsQUFtTE0sQ0F2QkYsRUEyQ0gsS0ExTHNCLENBc0V6QyxPQWxGZ0IsSUF1TVEsQ0EzQ3hCLFNBM0pjLEFBaUlNLGFBaElwQixDQVdFLG1CQWhDdUIsR0FvSEQsaUNBa0NYLEVBOURLLEdBdENBLEFBVUEsQUFXQSxDQStIQSxNQS9DbEIsTUE5RGdCLEdBdENoQixBQVVnQixBQVdBLENBK0hBLElBb0JFLE1BaklsQixHQTVCQSxBQVdjLENBK0hBLE1Bb0JFLEtBbEpELFNBbUpELElBbEpkLEdBMUV1QixHQW9IRCw0Q0FvRkYsb0JBcUJBLFNBNU5DLEdBb0hELHFDQW9GTyxvQkFxQkUsaUNBNU5mLEdBb0hkLFNBbkhrQixnQkFDbEIsZ0JBc01zQiw0QkFxQkEsZ0RBcEJGLDRCQXFCQSxpRUFwQk4sWUFDRSxjQUNKLEVBbUJFLFNBbEJkLEdBbUJBIiwiZmlsZSI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvemVtb2dhL3BvcGUtd2ViL3NyYy9hcHAvY29tcG9uZW50cy9zbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZFJhdGVQb3N0LCBhZGREaXNSYXRlUG9zdCB9IGZyb20gJy4uL3N0b3JlL2RhdGFQb3N0L2FjdGlvbidcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5jb25zdCBTbGlkZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbdm90ZSwgc2V0Vm90ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWwsIHNldFNlbF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dtc24sIHNldFNob3dtc25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNob3dWb3RlID0gKHZhbHVlKSA9PntcbiAgICBzZXRWb3RlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVZvdGUgPSAoKSA9PntcbiAgICBpZihzZWwpe1xuICAgICAgcHJvcHMuYWRkVXBkYXRlUmF0ZUxpa2UoYCR7cHJvcHMuZGF0YVNlbH1gKVxuICAgIH1lbHNle1xuICAgICAgcHJvcHMuYWRkVXBkYXRlUmF0ZURpc0xpa2UoYCR7cHJvcHMuZGF0YVNlbH1gKVxuICAgIH1cbiAgICBzZXRWb3RlKGZhbHNlKVxuICAgIHNldFNob3dtc24odHJ1ZSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHZvdGUpXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNsaWRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zbGlkZS1pbWFnZVwiPlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHBhdGg9XCIvYXNzZXRzL2ltYWdlcy9wb3BlL1wiXG4gICAgICAgICAgICBuYW1lPVwicG9wZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJwbmdcIlxuICAgICAgICAgICAgYWx0PVwicG9wZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGUtdm90ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTAgb2Zmc2V0LXMxIG02IGw2IGNvbnRlbnQtYmctY29sXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PldoYXTigJlzIHlvdXIgb3BpbmlvbiBvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qb3BlIEZyYW5jaXM/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sIHMxMFwiPkhl4oCZcyB0YWxraW5nIHRvdWdoIG9uIGNsZXJneSBzZXh1YWwgYWJ1c2UsIGJ1dCBpcyBoZSBqdXN0IGFub3RoZXIgcGFwYWwgcGVydmVydCBwcm90ZWN0b3I/ICh0aHVtYnMgZG93bikgb3IgYSB0cnVlIHBlZG9waGlsZSBwdW5pc2hpbmcgcG9udGlmZj8gKHRodW1icyB1cCk8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCBjb250ZW50LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BvcGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS13aWtpcGVkaWEtd1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb3JlIGluZm9ybWF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCB0eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPldoYXTigJlzIFlvdXIgVmVyZGljdD88L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdm90ZS1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sIHM2IGljb24gbGlrZS1saW5rICR7c2VsICYmIHZvdGUgPydsaWtlLXZvdGUnOicnfWB9IG9uQ2xpY2s9eygpPT57c2hvd1ZvdGUodHJ1ZSksIHNldFNlbCh0cnVlKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLW8tdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wgczYgaWNvbiBkaXNsaWtlLWxpbmsgJHshc2VsICYmIHZvdGUgPydkaXNsaWtlLXZvdGUnOicnfWB9IG9uQ2xpY2s9eygpPT57c2hvd1ZvdGUodHJ1ZSksIHNldFNlbChmYWxzZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy1vLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB2b3RlICYmICFzaG93bXNuICYmXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCBvZmZzZXQtczEgbTggb2Zmc2V0LW0yIGw4IG9mZnNldC1sMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYnRuXCIgb25DbGljaz17KCk9Pnt1cGRhdGVWb3RlKCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZvdGUgbm93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgIXZvdGUgJiYgc2hvd21zbiAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEwIG9mZnNldC1zMSBtNiBsNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKAnFRoYW5rIHlvdSBmb3Igdm90aW5nIeKAnTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMCBvZmZzZXQtczEgbTYgbDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYnRuXCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Vm90ZShmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd21zbihmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Wb3RlIGFnYWluPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXZvdGUtdGltZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXR4dFwiPlxuICAgICAgICAgICAgICA8aDY+Q0xPU0lORyBJTjwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1kYXlzXCI+XG4gICAgICAgICAgICAgIDxwPjxzcGFuPjIyPC9zcGFuPmRheXM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRlbnQtc2xpZGV7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1zbGlkZSAuY29udGVudC1zbGlkZS1pbWFnZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1zbGlkZS12b3Rle1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MSw5Miw5NiwgMC41KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZzowcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIGEge1xuICAgICAgICAgIGNvbG9yOiAjYmYwMjIyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAc3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XG4gICAgICAgICAgLmNvbnRlbnQtYmctY29sIHtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MSw5Miw5NiwgMC41KTsgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCAuY29udGVudC1kZXNjcmlwdGlvbiwgLmNvbnRlbnQtYmctY29sIC5jb250ZW50LWxpbmsgLCAuY29udGVudC1iZy1jb2wgLnR4dHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCAudHh0e1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIGg0e1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE5O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJnLWNvbCBoMntcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1iZy1jb2wgaDN7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYmctY29sIHB7XG4gICAgICAgICAgcGFkZGluZzowcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGlua3tcbiAgICAgICAgICBmb250LXNpemU6IDdweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5rIGF7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1saW5rIGE6aG92ZXJ7XG4gICAgICAgICAgY29sb3I6IHJnYmEoOTEsOTIsOTYsIDEpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtbGluayBhIGl7XG4gICAgICAgICAgbWFyZ2luOiAwLjFyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5yb3d7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAuaWNvbntcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAuaWNvbiBpe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAuZGlzbGlrZS1saW5re1xuICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFkMWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLWl0ZW1zIC5kaXNsaWtlLWxpbms6aG92ZXIgaXtcbiAgICAgICAgICBjb2xvcjogIzFjYmJiNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtaXRlbXMgLmxpa2UtbGlua3tcbiAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNiYmI0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS1pdGVtcyAubGlrZS1saW5rOmhvdmVyIGl7XG4gICAgICAgICAgY29sb3I6ICNmZmFkMWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLXRpbWV7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgIGhlaWdodDoyNXB4O1xuICAgICAgICB9ICBcblxuICAgICAgICAuY29udGVudC12b3RlLXRpbWUgLnRpbWUtdHh0e1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGE3OWY7XG4gICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgd2lkdGg6MzUlO1xuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtdm90ZS10aW1lIC50aW1lLWRheXN7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB3aWR0aDo2NSU7XG4gICAgICAgICAgcGFkZGluZzowcmVtIDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLXR4dDphZnRlciwgLnRpbWUtdHh0OmJlZm9yZXtcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLXR4dDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLXR4dDpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNhNjlmOTc7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLXR4dCBoNntcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC12b3RlLXRpbWUgLnRpbWUtZGF5cyBwe1xuICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXZvdGUtdGltZSAudGltZS1kYXlzIHAgc3BhbntcbiAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcbiAgICAgICAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYnRue1xuICAgICAgICAgIG1hcmdpbjogMXJlbSAwLjRyZW07XG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcbiAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQtYnRuIHB7XG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOjByZW07XG4gICAgICAgICAgcGFkZGluZzowLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudC1idG46aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LWJ0bjpob3ZlciBwe1xuICAgICAgICAgIGNvbG9yOnJnYmEoOTEsOTIsOTYsMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWtlLXZvdGUsIC5kaXNsaWtlLXZvdGV7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gXG4gICAgICAgICAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgXG4gICAgICAgICAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweClcbiAgICAgICAgICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAgICAgICAgICAgLmNvbnRlbnQtYmctY29sIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufTtcblxuU2xpZGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgc3RvcmUsIGlzU2VydmVyIH0pID0+IHtcbiAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAocmVkdWNlcikgPT57XG4gIHJldHVybiB7XG4gICAgZGF0YWluaXRpYWw6IHJlZHVjZXIuZGF0YVBvc3QsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZFVwZGF0ZVJhdGVMaWtlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkUmF0ZVBvc3QsIGRpc3BhdGNoKSxcbiAgICBhZGRVcGRhdGVSYXRlRGlzTGlrZTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZERpc1JhdGVQb3N0LCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2xpZGUpXG4iXX0= */\n/*@ sourceURL=/Applications/MAMP/htdocs/zemoga/pope-web/src/app/components/slide.js */"));
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
//# sourceMappingURL=index.js.b3494746cf4023b82e7c.hot-update.js.map