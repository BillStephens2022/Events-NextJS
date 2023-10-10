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

/***/ "./store/notification-context.js":
/*!***************************************!*\
  !*** ./store/notification-context.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotificationContextProvider\": function() { return /* binding */ NotificationContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    notification: null,\n    showNotification: function(notificationData) {},\n    hideNotification: function() {}\n});\nfunction NotificationContextProvider(props) {\n    _s();\n    const [activeNotification, setActiveNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeNotification && (activeNotification.status === \"success\" || activeNotification.status === \"error\")) {}\n    }, []);\n    function showNotificationHandler(notificationData) {\n        setActiveNotification(notificationData);\n    }\n    function hideNotificationHandler() {\n        setActiveNotification(null);\n    }\n    const context = {\n        notification: activeNotification,\n        showNotification: showNotificationHandler,\n        hideNotification: hideNotificationHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: context,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/store/notification-context.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(NotificationContextProvider, \"Wi3E3Psx/3AX/beWJcnxb8rsCKk=\");\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\nvar _c;\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEyRDtBQUUzRCxNQUFNRyxvQ0FBc0JILG9EQUFhQSxDQUFDO0lBQ3hDSSxjQUFjLElBQUk7SUFDbEJDLGtCQUFrQixTQUFVQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQy9DQyxrQkFBa0IsV0FBWSxDQUFDO0FBQ2pDO0FBRU8sU0FBU0MsNEJBQTRCQyxLQUFLLEVBQUU7O0lBQ2pELE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR1YsK0NBQVFBO0lBRTVEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsc0JBQXVCQSxDQUFBQSxtQkFBbUJFLE1BQU0sS0FBSyxhQUFhRixtQkFBbUJFLE1BQU0sS0FBSyxPQUFNLEdBQzVHLENBRUEsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVILFNBQVNDLHdCQUF3QlAsZ0JBQWdCLEVBQUU7UUFDakRLLHNCQUFzQkw7SUFDeEI7SUFFQSxTQUFTUSwwQkFBMEI7UUFDakNILHNCQUFzQixJQUFJO0lBQzVCO0lBRUEsTUFBTUksVUFBVTtRQUNkWCxjQUFjTTtRQUNkTCxrQkFBa0JRO1FBQ2xCTixrQkFBa0JPO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNYLG9CQUFvQmEsUUFBUTtRQUFDQyxPQUFPRjtrQkFDbENOLE1BQU1TLFFBQVE7Ozs7OztBQUdyQixDQUFDO0dBN0JlVjtLQUFBQTtBQStCaEIsK0RBQWVMLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dC5qcz8wZDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTm90aWZpY2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBub3RpZmljYXRpb246IG51bGwsIC8vIHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9XG4gIHNob3dOb3RpZmljYXRpb246IGZ1bmN0aW9uIChub3RpZmljYXRpb25EYXRhKSB7fSxcbiAgaGlkZU5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKCkge30sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlcihwcm9wcykge1xuICBjb25zdCBbYWN0aXZlTm90aWZpY2F0aW9uLCBzZXRBY3RpdmVOb3RpZmljYXRpb25dID0gdXNlU3RhdGUoKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZU5vdGlmaWNhdGlvbiAmJiAoYWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnIHx8IGFjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXMgPT09ICdlcnJvcicpKVxuICB7XG4gICAgXG4gIH1cbn0sIFtdKTtcblxuICBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uSGFuZGxlcihub3RpZmljYXRpb25EYXRhKSB7XG4gICAgc2V0QWN0aXZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbkRhdGEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbkhhbmRsZXIoKSB7XG4gICAgc2V0QWN0aXZlTm90aWZpY2F0aW9uKG51bGwpO1xuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBub3RpZmljYXRpb246IGFjdGl2ZU5vdGlmaWNhdGlvbixcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBzaG93Tm90aWZpY2F0aW9uSGFuZGxlcixcbiAgICBoaWRlTm90aWZpY2F0aW9uOiBoaWRlTm90aWZpY2F0aW9uSGFuZGxlcixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L05vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIm5vdGlmaWNhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25EYXRhIiwiaGlkZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlciIsInByb3BzIiwiYWN0aXZlTm90aWZpY2F0aW9uIiwic2V0QWN0aXZlTm90aWZpY2F0aW9uIiwic3RhdHVzIiwic2hvd05vdGlmaWNhdGlvbkhhbmRsZXIiLCJoaWRlTm90aWZpY2F0aW9uSGFuZGxlciIsImNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/notification-context.js\n"));

/***/ })

});