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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Comments(props) {\n    _s();\n    const { eventId  } = props;\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isFetchingComments, setIsFetchingComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showComments) {\n            setIsFetchingComments(true);\n            fetch(\"/api/comments/\" + eventId).then((response)=>response.json()).then((data)=>{\n                setComments(data.comments);\n            });\n        }\n    }, [\n        showComments\n    ]);\n    function toggleCommentsHandler() {\n        setShowComments((prevStatus)=>!prevStatus);\n    }\n    function addCommentHandler(commentData) {\n        notificationCtx.showNotification({\n            title: \"Sending comment...\",\n            message: \"Your comment is currently being updated...\",\n            status: \"pending\"\n        });\n        fetch(\"/api/comments/\" + eventId, {\n            method: \"POST\",\n            body: JSON.stringify(commentData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (response.ok) {\n                return response.json();\n            }\n            return response.json().then((data)=>{\n                throw new Error(data.message || \"Something went wrong!\");\n            });\n        }).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Your comment was saved!\",\n                status: \"success\"\n            });\n        }).catch((error)=>{\n            notificationCtx.showNotification({\n                title: \"Error!\",\n                message: error.message || \"Something went wrong!\",\n                status: \"error\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_5___default().comments),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleCommentsHandler,\n                children: [\n                    showComments ? \"Hide\" : \"Show\",\n                    \" Comments\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_new_comment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onAddComment: addCommentHandler\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 74,\n                columnNumber: 24\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comment_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: comments\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 75,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Comments, \"0mYZHfgbEuzzpjPDIhT0voiASOw=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDVztBQUMxQjtBQUNGO0FBQ0s7QUFFNUMsU0FBU08sU0FBU0MsS0FBSyxFQUFFOztJQUN2QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUVwQixNQUFNRSxrQkFBa0JSLGlEQUFVQSxDQUFDQyxtRUFBbUJBO0lBRXRELE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDYyxvQkFBb0JDLHNCQUFzQixHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxFRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVcsY0FBYztZQUNoQkssc0JBQXNCLElBQUk7WUFDMUJDLE1BQU0sbUJBQW1CUixTQUN0QlMsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTO2dCQUNkUCxZQUFZTyxLQUFLUixRQUFRO1lBQzNCO1FBQ0osQ0FBQztJQUNILEdBQUc7UUFBQ0Y7S0FBYTtJQUVqQixTQUFTVyx3QkFBd0I7UUFDL0JWLGdCQUFnQixDQUFDVyxhQUFlLENBQUNBO0lBQ25DO0lBRUEsU0FBU0Msa0JBQWtCQyxXQUFXLEVBQUU7UUFDdENmLGdCQUFnQmdCLGdCQUFnQixDQUFDO1lBQy9CQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBRUFaLE1BQU0sbUJBQW1CUixTQUFTO1lBQ2hDcUIsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNSO1lBQ3JCUyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0doQixJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNsQixJQUFJQSxTQUFTZ0IsRUFBRSxFQUFFO2dCQUNmLE9BQU9oQixTQUFTQyxJQUFJO1lBQ3RCLENBQUM7WUFDRCxPQUFPRCxTQUFTQyxJQUFJLEdBQUdGLElBQUksQ0FBQyxDQUFDRyxPQUFTO2dCQUNwQyxNQUFNLElBQUllLE1BQU1mLEtBQUtPLE9BQU8sSUFBSSx5QkFBeUI7WUFDM0Q7UUFDRixHQUNDVixJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNkWCxnQkFBZ0JnQixnQkFBZ0IsQ0FBQztnQkFDL0JDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLFFBQVE7WUFDVjtRQUNGLEdBQ0NRLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2hCNUIsZ0JBQWdCZ0IsZ0JBQWdCLENBQUM7Z0JBQy9CQyxPQUFPO2dCQUNQQyxTQUFTVSxNQUFNVixPQUFPLElBQUk7Z0JBQzFCQyxRQUFRO1lBQ1Y7UUFDRjtJQUNKO0lBRUEscUJBQ0UsOERBQUNVO1FBQVFDLFdBQVdsQyxzRUFBZ0I7OzBCQUNsQyw4REFBQ21DO2dCQUFPQyxTQUFTcEI7O29CQUNkWCxlQUFlLFNBQVMsTUFBTTtvQkFBQzs7Ozs7OztZQUVqQ0EsOEJBQWdCLDhEQUFDTixvREFBVUE7Z0JBQUNzQyxjQUFjbkI7Ozs7OztZQUMxQ2IsOEJBQWdCLDhEQUFDUCxxREFBV0E7Z0JBQUN3QyxPQUFPL0I7Ozs7Ozs7Ozs7OztBQUczQztHQXZFU047S0FBQUE7QUF5RVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz9iMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dFwiO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL2NvbW1lbnQtbGlzdFwiO1xuaW1wb3J0IE5ld0NvbW1lbnQgZnJvbSBcIi4vbmV3LWNvbW1lbnRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NvbW1lbnRzLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gQ29tbWVudHMocHJvcHMpIHtcbiAgY29uc3QgeyBldmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IFtzaG93Q29tbWVudHMsIHNldFNob3dDb21tZW50c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNGZXRjaGluZ0NvbW1lbnRzLCBzZXRJc0ZldGNoaW5nQ29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dDb21tZW50cykge1xuICAgICAgc2V0SXNGZXRjaGluZ0NvbW1lbnRzKHRydWUpXG4gICAgICBmZXRjaChcIi9hcGkvY29tbWVudHMvXCIgKyBldmVudElkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRDb21tZW50cyhkYXRhLmNvbW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2hvd0NvbW1lbnRzXSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tbWVudHNIYW5kbGVyKCkge1xuICAgIHNldFNob3dDb21tZW50cygocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ29tbWVudEhhbmRsZXIoY29tbWVudERhdGEpIHtcbiAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTogXCJTZW5kaW5nIGNvbW1lbnQuLi5cIixcbiAgICAgIG1lc3NhZ2U6IFwiWW91ciBjb21tZW50IGlzIGN1cnJlbnRseSBiZWluZyB1cGRhdGVkLi4uXCIsXG4gICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgIH0pO1xuXG4gICAgZmV0Y2goXCIvYXBpL2NvbW1lbnRzL1wiICsgZXZlbnRJZCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgY29tbWVudCB3YXMgc2F2ZWQhXCIsXG4gICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiLFxuICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29tbWVudHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c0hhbmRsZXJ9PlxuICAgICAgICB7c2hvd0NvbW1lbnRzID8gXCJIaWRlXCIgOiBcIlNob3dcIn0gQ29tbWVudHNcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dDb21tZW50cyAmJiA8TmV3Q29tbWVudCBvbkFkZENvbW1lbnQ9e2FkZENvbW1lbnRIYW5kbGVyfSAvPn1cbiAgICAgIHtzaG93Q29tbWVudHMgJiYgPENvbW1lbnRMaXN0IGl0ZW1zPXtjb21tZW50c30gLz59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJOb3RpZmljYXRpb25Db250ZXh0IiwiQ29tbWVudExpc3QiLCJOZXdDb21tZW50IiwiY2xhc3NlcyIsIkNvbW1lbnRzIiwicHJvcHMiLCJldmVudElkIiwibm90aWZpY2F0aW9uQ3R4Iiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImlzRmV0Y2hpbmdDb21tZW50cyIsInNldElzRmV0Y2hpbmdDb21tZW50cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiY2F0Y2giLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwib25BZGRDb21tZW50IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n"));

/***/ })

});