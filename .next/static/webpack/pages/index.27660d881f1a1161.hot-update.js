"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewsletterRegistration() {\n    _s();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    function registrationHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        notificationCtx.showNotification({\n            title: \"Signing up...\",\n            message: \"Registering for newsletter.\",\n            status: \"pending\"\n        });\n        fetch(\"/api/newsletter\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                email: enteredEmail\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.ok) {\n                return response.json();\n            }\n            response.json().then((data)=>{\n                throw new Error(data.message || \"\");\n            });\n        }).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success\",\n                message: \"Successfully registered for newsletter\",\n                status: \"success\"\n            });\n        }).catch((error)=>{\n            notificationCtx.showNotification({\n                title: \"Error\",\n                message: error.message || \"Something went wrong!\",\n                status: \"error\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign up to stay updated!\"\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/newsletter-registration.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: registrationHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            id: \"email\",\n                            placeholder: \"Your email\",\n                            \"aria-label\": \"Your email\",\n                            ref: emailInputRef\n                        }, void 0, false, {\n                            fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/newsletter-registration.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/newsletter-registration.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/newsletter-registration.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/newsletter-registration.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/newsletter-registration.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(NewsletterRegistration, \"DPwtQQ/gldp2MEe6QW3mx9/oYa8=\");\n_c = NewsletterRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterRegistration);\nvar _c;\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ2dCO0FBQ1E7QUFFbkUsU0FBU0kseUJBQXlCOztJQUNoQyxNQUFNQyxnQkFBZ0JMLDZDQUFNQTtJQUM1QixNQUFNTSxrQkFBa0JMLGlEQUFVQSxDQUFDRSxtRUFBbUJBO0lBRXRELFNBQVNJLG9CQUFvQkMsS0FBSyxFQUFFO1FBQ2xDQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLGVBQWVMLGNBQWNNLE9BQU8sQ0FBQ0MsS0FBSztRQUVoRE4sZ0JBQWdCTyxnQkFBZ0IsQ0FBQztZQUMvQkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7UUFDVjtRQUVBQyxNQUFNLG1CQUFtQjtZQUNyQkMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE9BQU9aO1lBQWE7WUFDM0NhLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1FBQ0osR0FBR0MsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDcEIsSUFBSUEsU0FBU0MsRUFBRSxFQUFFO2dCQUNmLE9BQU9ELFNBQVNFLElBQUk7WUFDdEIsQ0FBQztZQUNERixTQUFTRSxJQUFJLEdBQUdILElBQUksQ0FBQ0ksQ0FBQUEsT0FBUTtnQkFDM0IsTUFBTSxJQUFJQyxNQUFNRCxLQUFLYixPQUFPLElBQUksSUFBRztZQUNyQztRQUNGLEdBQ0NTLElBQUksQ0FBQ0ksQ0FBQUEsT0FBUTtZQUNadEIsZ0JBQWdCTyxnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLFFBQVE7WUFDVjtRQUNGLEdBQ0NjLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUztZQUNkekIsZ0JBQWdCTyxnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVNnQixNQUFNaEIsT0FBTyxJQUFJO2dCQUMxQkMsUUFBUTtZQUNWO1FBQ0Y7SUFFRjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBUUMsV0FBVy9CLHVGQUFrQjs7MEJBQ3BDLDhEQUFDaUM7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVU5QjswQkFDZCw0RUFBQytCO29CQUFJTCxXQUFXL0Isb0ZBQWU7O3NDQUM3Qiw4REFBQ3NDOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaQyxjQUFXOzRCQUNYQyxLQUFLeEM7Ozs7OztzQ0FFUCw4REFBQ3lDO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQS9EUzFDO0tBQUFBO0FBaUVULCtEQUFlQSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcz8yN2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbmV3c2xldHRlci1yZWdpc3RyYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE5ld3NsZXR0ZXJSZWdpc3RyYXRpb24oKSB7XG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBmdW5jdGlvbiByZWdpc3RyYXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IGVtYWlsSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgIHRpdGxlOiBcIlNpZ25pbmcgdXAuLi5cIixcbiAgICAgIG1lc3NhZ2U6IFwiUmVnaXN0ZXJpbmcgZm9yIG5ld3NsZXR0ZXIuXCIsXG4gICAgICBzdGF0dXM6IFwicGVuZGluZ1wiXG4gICAgfSk7XG5cbiAgICBmZXRjaCgnL2FwaS9uZXdzbGV0dGVyJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogZW50ZXJlZEVtYWlsIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiXCIpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NcIixcbiAgICAgICAgbWVzc2FnZTogXCJTdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgbmV3c2xldHRlclwiLFxuICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIixcbiAgICAgICAgc3RhdHVzOiBcImVycm9yXCJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubmV3c2xldHRlcn0+XG4gICAgICA8aDI+U2lnbiB1cCB0byBzdGF5IHVwZGF0ZWQhPC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtyZWdpc3RyYXRpb25IYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgcmVmPXtlbWFpbElucHV0UmVmfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NsZXR0ZXJSZWdpc3RyYXRpb247XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlQ29udGV4dCIsImNsYXNzZXMiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiTmV3c2xldHRlclJlZ2lzdHJhdGlvbiIsImVtYWlsSW5wdXRSZWYiLCJub3RpZmljYXRpb25DdHgiLCJyZWdpc3RyYXRpb25IYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuZXdzbGV0dGVyIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n"));

/***/ })

});