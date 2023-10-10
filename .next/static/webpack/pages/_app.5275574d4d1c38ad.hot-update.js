"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-header */ \"./components/layout/main-header.js\");\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(props) {\n    _s();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const activeNotification = notificationCtx.notification;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/layout/layout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/layout/layout.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            activeNotification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: activeNotification.title,\n                message: activeNotification.message,\n                status: activeNotification.status\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/layout/layout.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/layout/layout.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"RnyxbsESVyWxahxmZw1sLWtWlsc=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBNkM7QUFDTjtBQUNPO0FBQ3FCO0FBRW5FLFNBQVNLLE9BQU9DLEtBQUssRUFBRTs7SUFDckIsTUFBTUMsa0JBQWtCTixpREFBVUEsQ0FBQ0csbUVBQW1CQTtJQUV0RCxNQUFNSSxxQkFBcUJELGdCQUFnQkUsWUFBWTtJQUV2RCxxQkFDRSw4REFBQ1QsMkNBQVFBOzswQkFDUCw4REFBQ0Usb0RBQVVBOzs7OzswQkFDWCw4REFBQ1E7MEJBQU1KLE1BQU1LLFFBQVE7Ozs7OztZQUNwQkgsb0NBQ0MsOERBQUNMLHdEQUFZQTtnQkFDWFMsT0FBT0osbUJBQW1CSSxLQUFLO2dCQUMvQkMsU0FBU0wsbUJBQW1CSyxPQUFPO2dCQUNuQ0MsUUFBUU4sbUJBQW1CTSxNQUFNOzs7Ozs7Ozs7Ozs7QUFLM0M7R0FsQlNUO0tBQUFBO0FBb0JULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcz9jYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi9tYWluLWhlYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vdWkvbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tIFwiLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHRcIjtcblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgYWN0aXZlTm90aWZpY2F0aW9uID0gbm90aWZpY2F0aW9uQ3R4Lm5vdGlmaWNhdGlvbjtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxNYWluSGVhZGVyIC8+XG4gICAgICA8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxuICAgICAge2FjdGl2ZU5vdGlmaWNhdGlvbiAmJiAoXG4gICAgICAgIDxOb3RpZmljYXRpb25cbiAgICAgICAgICB0aXRsZT17YWN0aXZlTm90aWZpY2F0aW9uLnRpdGxlfVxuICAgICAgICAgIG1lc3NhZ2U9e2FjdGl2ZU5vdGlmaWNhdGlvbi5tZXNzYWdlfVxuICAgICAgICAgIHN0YXR1cz17YWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1c31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlQ29udGV4dCIsIk1haW5IZWFkZXIiLCJOb3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25Db250ZXh0IiwiTGF5b3V0IiwicHJvcHMiLCJub3RpZmljYXRpb25DdHgiLCJhY3RpdmVOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb24iLCJtYWluIiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n"));

/***/ })

});