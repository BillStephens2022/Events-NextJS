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

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Notification(props) {\n    _s();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const { title , message , status  } = props;\n    let statusClasses = \"\";\n    if (status === \"success\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().success);\n    }\n    if (status === \"error\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().error);\n    }\n    if (status === \"pending\") {\n        statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().pending);\n    }\n    const activeClasses = \"\".concat((_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().notification), \" \").concat(statusClasses);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: activeClasses,\n        onClick: notificationCtx.hideNotification,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/ui/notification.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/ui/notification.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/ui/notification.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Notification, \"RnyxbsESVyWxahxmZw1sLWtWlsc=\");\n_c = Notification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\nvar _c;\n$RefreshReg$(_c, \"Notification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtQztBQUVhO0FBQ21CO0FBRW5FLFNBQVNHLGFBQWFDLEtBQUssRUFBRTs7SUFDM0IsTUFBTUMsa0JBQWtCTCxpREFBVUEsQ0FBQ0UsbUVBQW1CQTtJQUV0RCxNQUFNLEVBQUVJLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBR0o7SUFFbkMsSUFBSUssZ0JBQWdCO0lBRXBCLElBQUlELFdBQVcsV0FBVztRQUN4QkMsZ0JBQWdCUix5RUFBZTtJQUNqQyxDQUFDO0lBRUQsSUFBSU8sV0FBVyxTQUFTO1FBQ3RCQyxnQkFBZ0JSLHVFQUFhO0lBQy9CLENBQUM7SUFFRCxJQUFJTyxXQUFXLFdBQVc7UUFDeEJDLGdCQUFnQlIseUVBQWU7SUFDakMsQ0FBQztJQUVELE1BQU1ZLGdCQUFnQixHQUEyQkosT0FBeEJSLDhFQUFvQixFQUFDLEtBQWlCLE9BQWRRO0lBRWpELHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXSDtRQUFlSSxTQUFTWixnQkFBZ0JhLGdCQUFnQjs7MEJBQ3RFLDhEQUFDQzswQkFBSWI7Ozs7OzswQkFDTCw4REFBQ2M7MEJBQUdiOzs7Ozs7Ozs7Ozs7QUFHVjtHQTNCU0o7S0FBQUE7QUE2QlQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24uanM/ODA2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udGV4dCBmcm9tIFwiLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHRcIjtcblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSwgc3RhdHVzIH0gPSBwcm9wcztcblxuICBsZXQgc3RhdHVzQ2xhc3NlcyA9IFwiXCI7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5zdWNjZXNzO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuZXJyb3I7XG4gIH1cblxuICBpZiAoc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnBlbmRpbmc7XG4gIH1cblxuICBjb25zdCBhY3RpdmVDbGFzc2VzID0gYCR7Y2xhc3Nlcy5ub3RpZmljYXRpb259ICR7c3RhdHVzQ2xhc3Nlc31gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2FjdGl2ZUNsYXNzZXN9IG9uQ2xpY2s9e25vdGlmaWNhdGlvbkN0eC5oaWRlTm90aWZpY2F0aW9ufT5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJjbGFzc2VzIiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIk5vdGlmaWNhdGlvbiIsInByb3BzIiwibm90aWZpY2F0aW9uQ3R4IiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NlcyIsInN1Y2Nlc3MiLCJlcnJvciIsInBlbmRpbmciLCJhY3RpdmVDbGFzc2VzIiwibm90aWZpY2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImhpZGVOb3RpZmljYXRpb24iLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n"));

/***/ }),

/***/ "./store/notification-context.js":
/*!***************************************!*\
  !*** ./store/notification-context.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQuanM/MGQyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/notification-context.js\n"));

/***/ })

});