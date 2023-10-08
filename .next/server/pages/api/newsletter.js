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
exports.id = "pages/api/newsletter";
exports.ids = ["pages/api/newsletter"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const userEmail = req.body.email;\n        if (!userEmail || !userEmail.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address.\"\n            });\n            return;\n        }\n        const pwParam = encodeURIComponent(process.env.MONGODB_PW);\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://two4onebill:${pwParam}@cluster0.xvwjnur.mongodb.net/newsletter?retryWrites=true&w=majority`);\n        const db = client.db();\n        await db.collection(\"emails\").insertOne({\n            email: userEmail\n        });\n        client.close();\n        res.status(201).json({\n            message: \"Signed up!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsWUFBWUgsSUFBSUksSUFBSSxDQUFDQyxLQUFLO1FBQ2hDLElBQUksQ0FBQ0YsYUFBYSxDQUFDQSxVQUFVRyxRQUFRLENBQUMsTUFBTTtZQUMxQ0wsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF5QjtZQUN6RDtRQUNGLENBQUM7UUFFRCxNQUFNQyxVQUFVQyxtQkFBbUJDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUN6RCxNQUFNQyxTQUFTLE1BQU1qQix3REFBbUIsQ0FDdEMsQ0FBQywwQkFBMEIsRUFBRVksUUFBUSxvRUFBb0UsQ0FBQztRQUU1RyxNQUFNTyxLQUFLRixPQUFPRSxFQUFFO1FBRXBCLE1BQU1BLEdBQUdDLFVBQVUsQ0FBQyxVQUFVQyxTQUFTLENBQUM7WUFBRWQsT0FBT0Y7UUFBVTtRQUUzRFksT0FBT0ssS0FBSztRQUVabkIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWE7SUFDL0MsQ0FBQztBQUNIO0FBRUEsaUVBQWVWLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ld3NsZXR0ZXIuanM/MTBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgdXNlckVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gICAgaWYgKCF1c2VyRW1haWwgfHwgIXVzZXJFbWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3MuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHdQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9jZXNzLmVudi5NT05HT0RCX1BXKTtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgYG1vbmdvZGIrc3J2Oi8vdHdvNG9uZWJpbGw6JHtwd1BhcmFtfUBjbHVzdGVyMC54dndqbnVyLm1vbmdvZGIubmV0L25ld3NsZXR0ZXI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICAgICk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2VtYWlscycpLmluc2VydE9uZSh7IGVtYWlsOiB1c2VyRW1haWwgfSk7XG5cbiAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJTaWduZWQgdXAhXCIgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VyRW1haWwiLCJib2R5IiwiZW1haWwiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHdQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1BXIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newsletter.js"));
module.exports = __webpack_exports__;

})();