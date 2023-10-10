"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[eventId]",{

/***/ "./components/input/comments.js":
/*!**************************************!*\
  !*** ./components/input/comments.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Comments(props) {\n    _s();\n    const { eventId  } = props;\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showComments) {\n            fetch(\"/api/comments/\" + eventId).then((response)=>response.json()).then((data)=>{\n                setComments(data.comments);\n            });\n        }\n    }, [\n        showComments\n    ]);\n    function toggleCommentsHandler() {\n        setShowComments((prevStatus)=>!prevStatus);\n    }\n    function addCommentHandler(commentData) {\n        notificationCtx.showNotification({\n            title: \"Sending comment...\",\n            message: \"Your comment is currently being updated...\",\n            status: \"pending\"\n        });\n        fetch(\"/api/comments/\" + eventId, {\n            method: \"POST\",\n            body: JSON.stringify(commentData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.ok) {\n                return response.json();\n            }\n            return response.json().then((data)=>{\n                throw new Error(data.message || \"Something went wrong!\");\n            });\n        }).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Your comment was saved!\",\n                status: \"success\"\n            });\n        }).catch((error)=>{\n            notificationCtx.showNotification({\n                title: \"Error!\",\n                message: error.message || \"Your comment was saved!\",\n                status: \"errorf\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_5___default().comments),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleCommentsHandler,\n                children: [\n                    showComments ? \"Hide\" : \"Show\",\n                    \" Comments\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_new_comment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onAddComment: addCommentHandler\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 73,\n                columnNumber: 24\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comment_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: comments\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 74,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Comments, \"MwPCIVFUQX0VOxTxIpLrTQfVNWs=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDVztBQUMxQjtBQUNGO0FBQ0s7QUFHNUMsU0FBU08sU0FBU0MsS0FBSyxFQUFFOztJQUN2QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUVwQixNQUFNRSxrQkFBa0JSLGlEQUFVQSxDQUFDQyxtRUFBbUJBO0lBRXRELE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJVyxjQUFjO1lBQ2xCSSxNQUFNLG1CQUFtQk4sU0FDdEJPLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBUztnQkFDZEwsWUFBWUssS0FBS04sUUFBUTtZQUMzQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNGO0tBQWE7SUFFakIsU0FBU1Msd0JBQXdCO1FBQy9CUixnQkFBZ0IsQ0FBQ1MsYUFBZSxDQUFDQTtJQUNuQztJQUVBLFNBQVNDLGtCQUFrQkMsV0FBVyxFQUFFO1FBQ3RDYixnQkFBZ0JjLGdCQUFnQixDQUFDO1lBQy9CQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBRUFaLE1BQU0sbUJBQW1CTixTQUFTO1lBQ2hDbUIsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNSO1lBQ3JCUyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0doQixJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixJQUFJQSxTQUFTZ0IsRUFBRSxFQUFFO2dCQUNmLE9BQU9oQixTQUFTQyxJQUFJO1lBQ3RCLENBQUM7WUFDRCxPQUFPRCxTQUFTQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUTtnQkFDbEMsTUFBTSxJQUFJZSxNQUFNZixLQUFLTyxPQUFPLElBQUkseUJBQXlCO1lBQzNEO1FBQ0YsR0FDQ1YsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDZFQsZ0JBQWdCYyxnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLFFBQVE7WUFDVjtRQUNGLEdBQ0NRLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUztZQUNkMUIsZ0JBQWdCYyxnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVNVLE1BQU1WLE9BQU8sSUFBSTtnQkFDMUJDLFFBQVE7WUFDVjtRQUNGO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ1U7UUFBUUMsV0FBV2hDLHNFQUFnQjs7MEJBQ2xDLDhEQUFDaUM7Z0JBQU9DLFNBQVNwQjs7b0JBQ2RULGVBQWUsU0FBUyxNQUFNO29CQUFDOzs7Ozs7O1lBRWpDQSw4QkFBZ0IsOERBQUNOLG9EQUFVQTtnQkFBQ29DLGNBQWNuQjs7Ozs7O1lBQzFDWCw4QkFBZ0IsOERBQUNQLHFEQUFXQTtnQkFBQ3NDLE9BQU83Qjs7Ozs7Ozs7Ozs7O0FBRzNDO0dBckVTTjtLQUFBQTtBQXVFVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzP2IxOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSAnLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQnO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL2NvbW1lbnQtbGlzdFwiO1xuaW1wb3J0IE5ld0NvbW1lbnQgZnJvbSBcIi4vbmV3LWNvbW1lbnRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NvbW1lbnRzLm1vZHVsZS5jc3NcIjtcblxuXG5mdW5jdGlvbiBDb21tZW50cyhwcm9wcykge1xuICBjb25zdCB7IGV2ZW50SWQgfSA9IHByb3BzO1xuICBcbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93Q29tbWVudHMpIHtcbiAgICBmZXRjaChcIi9hcGkvY29tbWVudHMvXCIgKyBldmVudElkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb21tZW50cyhkYXRhLmNvbW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Nob3dDb21tZW50c10pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbW1lbnRzSGFuZGxlcigpIHtcbiAgICBzZXRTaG93Q29tbWVudHMoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbW1lbnRIYW5kbGVyKGNvbW1lbnREYXRhKSB7XG4gICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgdGl0bGU6IFwiU2VuZGluZyBjb21tZW50Li4uXCIsXG4gICAgICBtZXNzYWdlOiBcIllvdXIgY29tbWVudCBpcyBjdXJyZW50bHkgYmVpbmcgdXBkYXRlZC4uLlwiLFxuICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIlxuICAgIH0pO1xuXG4gICAgZmV0Y2goXCIvYXBpL2NvbW1lbnRzL1wiICsgZXZlbnRJZCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJZb3VyIGNvbW1lbnQgd2FzIHNhdmVkIVwiLFxuICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCJcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uQ3R4LnNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJZb3VyIGNvbW1lbnQgd2FzIHNhdmVkIVwiLFxuICAgICAgICAgIHN0YXR1czogXCJlcnJvcmZcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tbWVudHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c0hhbmRsZXJ9PlxuICAgICAgICB7c2hvd0NvbW1lbnRzID8gXCJIaWRlXCIgOiBcIlNob3dcIn0gQ29tbWVudHNcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dDb21tZW50cyAmJiA8TmV3Q29tbWVudCBvbkFkZENvbW1lbnQ9e2FkZENvbW1lbnRIYW5kbGVyfSAvPn1cbiAgICAgIHtzaG93Q29tbWVudHMgJiYgPENvbW1lbnRMaXN0IGl0ZW1zPXtjb21tZW50c30gLz59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiQ29tbWVudExpc3QiLCJOZXdDb21tZW50IiwiY2xhc3NlcyIsIkNvbW1lbnRzIiwicHJvcHMiLCJldmVudElkIiwibm90aWZpY2F0aW9uQ3R4Iiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwib25BZGRDb21tZW50IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n"));

/***/ })

});