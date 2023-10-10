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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Comments(props) {\n    _s();\n    const { eventId  } = props;\n    const notificationCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_notification_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (showComments) {\n            fetch(\"/api/comments/\" + eventId).then((response)=>response.json()).then((data)=>{\n                setComments(data.comments);\n            });\n        }\n    }, [\n        showComments\n    ]);\n    function toggleCommentsHandler() {\n        setShowComments((prevStatus)=>!prevStatus);\n    }\n    function addCommentHandler(commentData) {\n        notificationCtx.showNotification({\n            title: \"Sending comment...\",\n            message: \"Your comment is currently being updated...\",\n            status: \"pending\"\n        });\n        fetch(\"/api/comments/\" + eventId, {\n            method: \"POST\",\n            body: JSON.stringify(commentData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{}).then((data)=>{\n            notificationCtx.showNotification({\n                title: \"Success!\",\n                message: \"Your comment was saved!\",\n                status: \"success\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_5___default().comments),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleCommentsHandler,\n                children: [\n                    showComments ? \"Hide\" : \"Show\",\n                    \" Comments\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_new_comment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onAddComment: addCommentHandler\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 61,\n                columnNumber: 24\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comment_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                items: comments\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 62,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Comments, \"MwPCIVFUQX0VOxTxIpLrTQfVNWs=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDVztBQUMxQjtBQUNGO0FBQ0s7QUFHNUMsU0FBU08sU0FBU0MsS0FBSyxFQUFFOztJQUN2QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHRDtJQUVwQixNQUFNRSxrQkFBa0JSLGlEQUFVQSxDQUFDQyxtRUFBbUJBO0lBRXRELE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJVyxjQUFjO1lBQ2xCSSxNQUFNLG1CQUFtQk4sU0FDdEJPLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBUztnQkFDZEwsWUFBWUssS0FBS04sUUFBUTtZQUMzQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNGO0tBQWE7SUFFakIsU0FBU1Msd0JBQXdCO1FBQy9CUixnQkFBZ0IsQ0FBQ1MsYUFBZSxDQUFDQTtJQUNuQztJQUVBLFNBQVNDLGtCQUFrQkMsV0FBVyxFQUFFO1FBQ3RDYixnQkFBZ0JjLGdCQUFnQixDQUFDO1lBQy9CQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBRUFaLE1BQU0sbUJBQW1CTixTQUFTO1lBQ2hDbUIsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNSO1lBQ3JCUyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0doQixJQUFJLENBQUMsQ0FBQ0MsV0FBYSxDQUVwQixHQUNDRCxJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNkVCxnQkFBZ0JjLGdCQUFnQixDQUFDO2dCQUMvQkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsUUFBUTtZQUNWO1FBQ0Y7SUFDSjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFRQyxXQUFXNUIsc0VBQWdCOzswQkFDbEMsOERBQUM2QjtnQkFBT0MsU0FBU2hCOztvQkFDZFQsZUFBZSxTQUFTLE1BQU07b0JBQUM7Ozs7Ozs7WUFFakNBLDhCQUFnQiw4REFBQ04sb0RBQVVBO2dCQUFDZ0MsY0FBY2Y7Ozs7OztZQUMxQ1gsOEJBQWdCLDhEQUFDUCxxREFBV0E7Z0JBQUNrQyxPQUFPekI7Ozs7Ozs7Ozs7OztBQUczQztHQXpEU047S0FBQUE7QUEyRFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz9iMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi9jb21tZW50LWxpc3RcIjtcbmltcG9ydCBOZXdDb21tZW50IGZyb20gXCIuL25ldy1jb21tZW50XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jb21tZW50cy5tb2R1bGUuY3NzXCI7XG5cblxuZnVuY3Rpb24gQ29tbWVudHMocHJvcHMpIHtcbiAgY29uc3QgeyBldmVudElkIH0gPSBwcm9wcztcbiAgXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkN0eCA9IHVzZUNvbnRleHQoTm90aWZpY2F0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgW3Nob3dDb21tZW50cywgc2V0U2hvd0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvd0NvbW1lbnRzKSB7XG4gICAgZmV0Y2goXCIvYXBpL2NvbW1lbnRzL1wiICsgZXZlbnRJZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0Q29tbWVudHMoZGF0YS5jb21tZW50cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzaG93Q29tbWVudHNdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVDb21tZW50c0hhbmRsZXIoKSB7XG4gICAgc2V0U2hvd0NvbW1lbnRzKChwcmV2U3RhdHVzKSA9PiAhcHJldlN0YXR1cyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50SGFuZGxlcihjb21tZW50RGF0YSkge1xuICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgIHRpdGxlOiBcIlNlbmRpbmcgY29tbWVudC4uLlwiLFxuICAgICAgbWVzc2FnZTogXCJZb3VyIGNvbW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIHVwZGF0ZWQuLi5cIixcbiAgICAgIHN0YXR1czogXCJwZW5kaW5nXCJcbiAgICB9KTtcblxuICAgIGZldGNoKFwiL2FwaS9jb21tZW50cy9cIiArIGV2ZW50SWQsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50RGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBjb21tZW50IHdhcyBzYXZlZCFcIixcbiAgICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50c30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzSGFuZGxlcn0+XG4gICAgICAgIHtzaG93Q29tbWVudHMgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBDb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxOZXdDb21tZW50IG9uQWRkQ29tbWVudD17YWRkQ29tbWVudEhhbmRsZXJ9IC8+fVxuICAgICAge3Nob3dDb21tZW50cyAmJiA8Q29tbWVudExpc3QgaXRlbXM9e2NvbW1lbnRzfSAvPn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJDb21tZW50TGlzdCIsIk5ld0NvbW1lbnQiLCJjbGFzc2VzIiwiQ29tbWVudHMiLCJwcm9wcyIsImV2ZW50SWQiLCJub3RpZmljYXRpb25DdHgiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRvZ2dsZUNvbW1lbnRzSGFuZGxlciIsInByZXZTdGF0dXMiLCJhZGRDb21tZW50SGFuZGxlciIsImNvbW1lbnREYXRhIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwib25BZGRDb21tZW50IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n"));

/***/ })

});