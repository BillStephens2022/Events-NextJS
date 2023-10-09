"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/comments/[eventId]";
exports.ids = ["pages/api/comments/[eventId]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const eventId = req.query.eventId;\n    const pwParam = encodeURIComponent(process.env.MONGODB_PW);\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://two4onebill:${pwParam}@cluster0.xvwjnur.mongodb.net/events?retryWrites=true&w=majority`);\n    if (req.method === \"POST\") {\n        // add server-side validation\n        const { email , name , text  } = req.body;\n        if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim === \"\") {\n            res.status(422).json({\n                message: \"Invalid input.\"\n            });\n            return;\n        }\n        const newComment = {\n            email,\n            name,\n            text,\n            eventId\n        };\n        const db = client.db();\n        const result = await db.collection(\"comments\").insertOne(newComment);\n        console.log(result);\n        res.status(201).json({\n            message: \"Added comment.\",\n            comment: newComment\n        });\n    }\n    if (req.method === \"GET\") {\n        const db1 = client.db();\n        const documents = await db1.collection(\"comments\").find().sort({\n            _id: -1\n        }).toArray();\n        res.status(200).json({\n            comments: documents\n        });\n    }\n    client.close();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixNQUFNQyxVQUFVRixJQUFJRyxLQUFLLENBQUNELE9BQU87SUFFakMsTUFBTUUsVUFBVUMsbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDekQsTUFBTUMsU0FBUyxNQUFNWCx3REFBbUIsQ0FDdEMsQ0FBQywwQkFBMEIsRUFBRU0sUUFBUSxnRUFBZ0UsQ0FBQztJQUd4RyxJQUFJSixJQUFJVyxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFLEdBQUdkLElBQUllLElBQUk7UUFFdEMsSUFDRSxDQUFDSCxNQUFNSSxRQUFRLENBQUMsUUFDaEIsQ0FBQ0gsUUFDREEsS0FBS0ksSUFBSSxPQUFPLE1BQ2hCLENBQUNILFFBQ0RBLEtBQUtHLElBQUksS0FBSyxJQUNkO1lBQ0FoQixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFpQjtZQUNqRDtRQUNGLENBQUM7UUFFRCxNQUFNQyxhQUFhO1lBQ2pCVDtZQUNBQztZQUNBQztZQUNBWjtRQUNGO1FBRUEsTUFBTW9CLEtBQUtiLE9BQU9hLEVBQUU7UUFFcEIsTUFBTUMsU0FBUyxNQUFNRCxHQUFHRSxVQUFVLENBQUMsWUFBWUMsU0FBUyxDQUFDSjtRQUV6REssUUFBUUMsR0FBRyxDQUFDSjtRQUVadEIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFrQlEsU0FBU1A7UUFBVztJQUN4RSxDQUFDO0lBRUQsSUFBSXJCLElBQUlXLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1XLE1BQUtiLE9BQU9hLEVBQUU7UUFFcEIsTUFBTU8sWUFBWSxNQUFNUCxJQUNyQkUsVUFBVSxDQUFDLFlBQ1hNLElBQUksR0FDSkMsSUFBSSxDQUFDO1lBQUVDLEtBQUssQ0FBQztRQUFFLEdBQ2ZDLE9BQU87UUFFVmhDLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVlLFVBQVVMO1FBQVU7SUFDN0MsQ0FBQztJQUVEcEIsT0FBTzBCLEtBQUs7QUFDZDtBQUVBLGlFQUFlcEMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzPzhiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGV2ZW50SWQgPSByZXEucXVlcnkuZXZlbnRJZDtcblxuICBjb25zdCBwd1BhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KHByb2Nlc3MuZW52Lk1PTkdPREJfUFcpO1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIGBtb25nb2RiK3NydjovL3R3bzRvbmViaWxsOiR7cHdQYXJhbX1AY2x1c3RlcjAueHZ3am51ci5tb25nb2RiLm5ldC9ldmVudHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICApO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIC8vIGFkZCBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uXG4gICAgY29uc3QgeyBlbWFpbCwgbmFtZSwgdGV4dCB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoXG4gICAgICAhZW1haWwuaW5jbHVkZXMoXCJAXCIpIHx8XG4gICAgICAhbmFtZSB8fFxuICAgICAgbmFtZS50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgICF0ZXh0IHx8XG4gICAgICB0ZXh0LnRyaW0gPT09IFwiXCJcbiAgICApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGlucHV0LlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICB0ZXh0LFxuICAgICAgZXZlbnRJZCxcbiAgICB9O1xuXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKS5pbnNlcnRPbmUobmV3Q29tbWVudCk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkFkZGVkIGNvbW1lbnQuXCIsIGNvbW1lbnQ6IG5ld0NvbW1lbnQgfSk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oXCJjb21tZW50c1wiKVxuICAgICAgLmZpbmQoKVxuICAgICAgLnNvcnQoeyBfaWQ6IC0xIH0pXG4gICAgICAudG9BcnJheSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb21tZW50czogZG9jdW1lbnRzIH0pO1xuICB9XG5cbiAgY2xpZW50LmNsb3NlKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXZlbnRJZCIsInF1ZXJ5IiwicHdQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1BXIiwiY2xpZW50IiwiY29ubmVjdCIsIm1ldGhvZCIsImVtYWlsIiwibmFtZSIsInRleHQiLCJib2R5IiwiaW5jbHVkZXMiLCJ0cmltIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJuZXdDb21tZW50IiwiZGIiLCJyZXN1bHQiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNvbW1lbnQiLCJkb2N1bWVudHMiLCJmaW5kIiwic29ydCIsIl9pZCIsInRvQXJyYXkiLCJjb21tZW50cyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[eventId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[eventId].js"));
module.exports = __webpack_exports__;

})();