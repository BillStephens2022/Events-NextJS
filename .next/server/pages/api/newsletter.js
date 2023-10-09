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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n    const pwParam = encodeURIComponent(process.env.MONGODB_PW);\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://two4onebill:${pwParam}@cluster0.xvwjnur.mongodb.net/events?retryWrites=true&w=majority`);\n    return client;\n}\nasync function insertDocument(client, document) {\n    const db = client.db();\n    await db.collection(\"newsletter\").insertOne(document);\n}\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const userEmail = req.body.email;\n        if (!userEmail || !userEmail.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address.\"\n            });\n            return;\n        }\n        let client;\n        try {\n            client = await connectDatabase();\n        } catch (error) {\n            res.status(500).json({\n                message: \"Connecting to the database failed!\"\n            });\n            return;\n        }\n        try {\n            await insertDocument(client, {\n                email: userEmail\n            });\n            client.close();\n        } catch (error1) {\n            res.status(500).json({\n                message: \"Inserting data failed!\"\n            });\n            return;\n        }\n        res.status(201).json({\n            message: \"Signed up!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsa0JBQWtCO0lBQy9CLE1BQU1DLFVBQVVDLG1CQUFtQkMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0lBQ3pELE1BQU1DLFNBQVMsTUFBTVAsd0RBQW1CLENBQ3RDLENBQUMsMEJBQTBCLEVBQUVFLFFBQVEsZ0VBQWdFLENBQUM7SUFFeEcsT0FBT0s7QUFDVDtBQUVBLGVBQWVFLGVBQWVGLE1BQU0sRUFBRUcsUUFBUSxFQUFFO0lBQzlDLE1BQU1DLEtBQUtKLE9BQU9JLEVBQUU7SUFFcEIsTUFBTUEsR0FBR0MsVUFBVSxDQUFDLGNBQWNDLFNBQVMsQ0FBQ0g7QUFDOUM7QUFFQSxlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxZQUFZSCxJQUFJSSxJQUFJLENBQUNDLEtBQUs7UUFDaEMsSUFBSSxDQUFDRixhQUFhLENBQUNBLFVBQVVHLFFBQVEsQ0FBQyxNQUFNO1lBQzFDTCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXlCO1lBQ3pEO1FBQ0YsQ0FBQztRQUVELElBQUlqQjtRQUVKLElBQUk7WUFDRkEsU0FBUyxNQUFNTjtRQUNqQixFQUFFLE9BQU93QixPQUFPO1lBQ2RULElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBcUM7WUFDckU7UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNZixlQUFlRixRQUFRO2dCQUFFYSxPQUFPRjtZQUFVO1lBQ2hEWCxPQUFPbUIsS0FBSztRQUNkLEVBQUUsT0FBT0QsUUFBTztZQUNkVCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXlCO1lBQ3pEO1FBQ0Y7UUFFQVIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWE7SUFDL0MsQ0FBQztBQUNIO0FBRUEsaUVBQWVWLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ld3NsZXR0ZXIuanM/MTBhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcbiAgY29uc3QgcHdQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9jZXNzLmVudi5NT05HT0RCX1BXKTtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBgbW9uZ29kYitzcnY6Ly90d280b25lYmlsbDoke3B3UGFyYW19QGNsdXN0ZXIwLnh2d2pudXIubW9uZ29kYi5uZXQvZXZlbnRzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgKTtcbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RG9jdW1lbnQoY2xpZW50LCBkb2N1bWVudCkge1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJuZXdzbGV0dGVyXCIpLmluc2VydE9uZShkb2N1bWVudCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgdXNlckVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gICAgaWYgKCF1c2VyRW1haWwgfHwgIXVzZXJFbWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3MuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBsZXQgY2xpZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3REYXRhYmFzZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdDb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZSBmYWlsZWQhJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgaW5zZXJ0RG9jdW1lbnQoY2xpZW50LCB7IGVtYWlsOiB1c2VyRW1haWwgfSk7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW5zZXJ0aW5nIGRhdGEgZmFpbGVkIScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIlNpZ25lZCB1cCFcIiB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdERhdGFiYXNlIiwicHdQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1BXIiwiY2xpZW50IiwiY29ubmVjdCIsImluc2VydERvY3VtZW50IiwiZG9jdW1lbnQiLCJkYiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlckVtYWlsIiwiYm9keSIsImVtYWlsIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

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