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

/***/ "(api)/./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDatabase\": () => (/* binding */ connectDatabase),\n/* harmony export */   \"getAllDocuments\": () => (/* binding */ getAllDocuments),\n/* harmony export */   \"insertDocument\": () => (/* binding */ insertDocument)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n    const pwParam = encodeURIComponent(process.env.MONGODB_PW);\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://two4onebill:${pwParam}@cluster0.xvwjnur.mongodb.net/events?retryWrites=true&w=majority`);\n    return client;\n}\nasync function insertDocument(client, collection, document) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(document);\n    return result;\n}\nasync function getAllDocuments(client, collection, sort, filter = {}) {\n    const db = client.db();\n    const documents = await db.collection(collection).find(filter).sort(sort).toArray();\n    return documents;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFFL0IsZUFBZUMsa0JBQWtCO0lBQ3RDLE1BQU1DLFVBQVVDLG1CQUFtQkMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0lBQ3pELE1BQU1DLFNBQVMsTUFBTVAsd0RBQW1CLENBQ3RDLENBQUMsMEJBQTBCLEVBQUVFLFFBQVEsZ0VBQWdFLENBQUM7SUFFeEcsT0FBT0s7QUFDVCxDQUFDO0FBRU0sZUFBZUUsZUFBZUYsTUFBTSxFQUFFRyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUNqRSxNQUFNQyxLQUFLTCxPQUFPSyxFQUFFO0lBRXBCLE1BQU1DLFNBQVMsTUFBTUQsR0FBR0YsVUFBVSxDQUFDQSxZQUFZSSxTQUFTLENBQUNIO0lBQ3pELE9BQU9FO0FBQ1QsQ0FBQztBQUVNLGVBQWVFLGdCQUFnQlIsTUFBTSxFQUFFRyxVQUFVLEVBQUVNLElBQUksRUFBRUMsU0FBUyxDQUFDLENBQUMsRUFBRTtJQUN6RSxNQUFNTCxLQUFLTCxPQUFPSyxFQUFFO0lBRXBCLE1BQU1NLFlBQVksTUFBTU4sR0FDckJGLFVBQVUsQ0FBQ0EsWUFDWFMsSUFBSSxDQUFDRixRQUNMRCxJQUFJLENBQUNBLE1BQ0xJLE9BQU87SUFFVixPQUFPRjtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vaGVscGVycy9kYi11dGlsLmpzP2Y1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYXRhYmFzZSgpIHtcbiAgY29uc3QgcHdQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9jZXNzLmVudi5NT05HT0RCX1BXKTtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBgbW9uZ29kYitzcnY6Ly90d280b25lYmlsbDoke3B3UGFyYW19QGNsdXN0ZXIwLnh2d2pudXIubW9uZ29kYi5uZXQvZXZlbnRzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcbiAgKTtcbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydERvY3VtZW50KGNsaWVudCwgY29sbGVjdGlvbiwgZG9jdW1lbnQpIHtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShkb2N1bWVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEb2N1bWVudHMoY2xpZW50LCBjb2xsZWN0aW9uLCBzb3J0LCBmaWx0ZXIgPSB7fSkge1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAgIC5maW5kKGZpbHRlcilcbiAgICAgIC5zb3J0KHNvcnQpXG4gICAgICAudG9BcnJheSgpO1xuICAgIFxuICAgIHJldHVybiBkb2N1bWVudHM7XG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiY29ubmVjdERhdGFiYXNlIiwicHdQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1BXIiwiY2xpZW50IiwiY29ubmVjdCIsImluc2VydERvY3VtZW50IiwiY29sbGVjdGlvbiIsImRvY3VtZW50IiwiZGIiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJnZXRBbGxEb2N1bWVudHMiLCJzb3J0IiwiZmlsdGVyIiwiZG9jdW1lbnRzIiwiZmluZCIsInRvQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/newsletter.js":
/*!*********************************!*\
  !*** ./pages/api/newsletter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const userEmail = req.body.email;\n        if (!userEmail || !userEmail.includes(\"@\")) {\n            res.status(422).json({\n                message: \"Invalid email address.\"\n            });\n            return;\n        }\n        let client;\n        try {\n            client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__.connectDatabase)();\n        } catch (error) {\n            res.status(500).json({\n                message: \"Connecting to the database failed!\"\n            });\n            return;\n        }\n        try {\n            await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_0__.insertDocument)(client, \"newsletter\", {\n                email: userEmail\n            });\n            client.close();\n        } catch (error1) {\n            res.status(500).json({\n                message: \"Inserting data failed!\"\n            });\n            return;\n        }\n        res.status(201).json({\n            message: \"Signed up!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3c2xldHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RTtBQUV4RSxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxZQUFZSCxJQUFJSSxJQUFJLENBQUNDLEtBQUs7UUFDaEMsSUFBSSxDQUFDRixhQUFhLENBQUNBLFVBQVVHLFFBQVEsQ0FBQyxNQUFNO1lBQzFDTCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXlCO1lBQ3pEO1FBQ0YsQ0FBQztRQUVELElBQUlDO1FBRUosSUFBSTtZQUNGQSxTQUFTLE1BQU1iLGlFQUFlQTtRQUNoQyxFQUFFLE9BQU9jLE9BQU87WUFDZFYsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFxQztZQUNyRTtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1YLGdFQUFjQSxDQUFDWSxRQUFRLGNBQWM7Z0JBQUVMLE9BQU9GO1lBQVU7WUFDOURPLE9BQU9FLEtBQUs7UUFDZCxFQUFFLE9BQU9ELFFBQU87WUFDZFYsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF5QjtZQUN6RDtRQUNGO1FBRUFSLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFhO0lBQy9DLENBQUM7QUFDSDtBQUVBLGlFQUFlVixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXdzbGV0dGVyLmpzPzEwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdERhdGFiYXNlLCBpbnNlcnREb2N1bWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2RiLXV0aWxcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB1c2VyRW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgICBpZiAoIXVzZXJFbWFpbCB8fCAhdXNlckVtYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgYWRkcmVzcy5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGxldCBjbGllbnQ7XG5cbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFiYXNlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0Nvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlIGZhaWxlZCEnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBpbnNlcnREb2N1bWVudChjbGllbnQsIFwibmV3c2xldHRlclwiLCB7IGVtYWlsOiB1c2VyRW1haWwgfSk7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW5zZXJ0aW5nIGRhdGEgZmFpbGVkIScgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIlNpZ25lZCB1cCFcIiB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvbm5lY3REYXRhYmFzZSIsImluc2VydERvY3VtZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJFbWFpbCIsImJvZHkiLCJlbWFpbCIsImluY2x1ZGVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbGllbnQiLCJlcnJvciIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newsletter.js\n");

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