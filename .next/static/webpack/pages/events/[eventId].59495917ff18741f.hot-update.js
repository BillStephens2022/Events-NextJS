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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Comments(props) {\n    _s();\n    const { eventId  } = props;\n    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/comments\" + eventId).then((response)=>response.json()).then((data)=>{});\n    }, [\n        showComments\n    ]);\n    function toggleCommentsHandler() {\n        setShowComments((prevStatus)=>!prevStatus);\n    }\n    function addCommentHandler(commentData) {\n        fetch(\"/api/comments/\" + eventId, {\n            method: \"POST\",\n            body: JSON.stringify(commentData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>response.json()).then((data)=>console.log(data));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_comments_module_css__WEBPACK_IMPORTED_MODULE_4___default().comments),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleCommentsHandler,\n                children: [\n                    showComments ? \"Hide\" : \"Show\",\n                    \" Comments\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_new_comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onAddComment: addCommentHandler\n            }, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 40,\n                columnNumber: 24\n            }, this),\n            showComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comment_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n                lineNumber: 41,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/billstephens/Desktop/Web Development/NextJS/Events-NextJS/components/input/comments.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Comments, \"s7Ua4oZer57BXoYludj/2o2YLho=\");\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUVIO0FBQ0Y7QUFDSztBQUU1QyxTQUFTSyxTQUFTQyxLQUFLLEVBQUU7O0lBQ3ZCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdEO0lBRXBCLE1BQU0sQ0FBQ0UsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZFksTUFBTSxrQkFBa0JMLFNBQVNNLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUFJRixJQUFJLENBQUNHLENBQUFBLE9BQVEsQ0FFaEY7SUFDRixHQUFHO1FBQUNSO0tBQWE7SUFDakIsU0FBU1Msd0JBQXdCO1FBQy9CUixnQkFBZ0IsQ0FBQ1MsYUFBZSxDQUFDQTtJQUduQztJQUVBLFNBQVNDLGtCQUFrQkMsV0FBVyxFQUFFO1FBQ3RDUixNQUFNLG1CQUFtQkwsU0FBUztZQUM5QmMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNKO1lBQ3JCSyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNKLEdBQ0daLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBU1UsUUFBUUMsR0FBRyxDQUFDWDtJQUNoQztJQUVBLHFCQUNFLDhEQUFDWTtRQUFRQyxXQUFXekIsc0VBQWdCOzswQkFDbEMsOERBQUMwQjtnQkFBT0MsU0FBU2Q7O29CQUNkVCxlQUFlLFNBQVMsTUFBTTtvQkFBQzs7Ozs7OztZQUVqQ0EsOEJBQWdCLDhEQUFDTCxvREFBVUE7Z0JBQUM2QixjQUFjYjs7Ozs7O1lBQzFDWCw4QkFBZ0IsOERBQUNOLHFEQUFXQTs7Ozs7Ozs7Ozs7QUFHbkM7R0FyQ1NHO0tBQUFBO0FBdUNULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5wdXQvY29tbWVudHMuanM/YjE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi9jb21tZW50LWxpc3RcIjtcbmltcG9ydCBOZXdDb21tZW50IGZyb20gXCIuL25ldy1jb21tZW50XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jb21tZW50cy5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Nob3dDb21tZW50cywgc2V0U2hvd0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvY29tbWVudHMnICsgZXZlbnRJZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7XG5cbiAgICB9KVxuICB9LCBbc2hvd0NvbW1lbnRzXSlcbiAgZnVuY3Rpb24gdG9nZ2xlQ29tbWVudHNIYW5kbGVyKCkge1xuICAgIHNldFNob3dDb21tZW50cygocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xuXG4gXG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50SGFuZGxlcihjb21tZW50RGF0YSkge1xuICAgIGZldGNoKCcvYXBpL2NvbW1lbnRzLycgKyBldmVudElkLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50RGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbW1lbnRzfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlQ29tbWVudHNIYW5kbGVyfT5cbiAgICAgICAge3Nob3dDb21tZW50cyA/IFwiSGlkZVwiIDogXCJTaG93XCJ9IENvbW1lbnRzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzaG93Q29tbWVudHMgJiYgPE5ld0NvbW1lbnQgb25BZGRDb21tZW50PXthZGRDb21tZW50SGFuZGxlcn0gLz59XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxDb21tZW50TGlzdCAvPn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tbWVudExpc3QiLCJOZXdDb21tZW50IiwiY2xhc3NlcyIsIkNvbW1lbnRzIiwicHJvcHMiLCJldmVudElkIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm9uQWRkQ29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/input/comments.js\n"));

/***/ })

});