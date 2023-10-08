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

/***/ "(api)/./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction handler(req, res) {\n    const eventId = req.query.eventId;\n    if (req.method === \"POST\") {\n        // add server-side validation\n        const { email , name , text  } = req.body;\n        if (!email.includes(\"@\") || !name || name.trim() === \"\" || !text || text.trim === \"\") {\n            res.status(422).json({\n                message: \"Invalid input.\"\n            });\n            return;\n        }\n        const newComment = {\n            id: new Date().toISOString(),\n            email,\n            name,\n            text\n        };\n        console.log(newComment);\n        res.status(201).json({\n            message: \"Added comment.\",\n            comment: newComment\n        });\n    }\n    if (req.method === \"GET\") {\n        const dummyList = [\n            {\n                id: \"c1\",\n                name: \"Bill\",\n                text: \"first comment\"\n            },\n            {\n                id: \"c2\",\n                name: \"Carolyn\",\n                text: \"second comment\"\n            }\n        ];\n        res.status(200).json({\n            comments: dummyList\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN6QixNQUFNQyxVQUFVRixJQUFJRyxLQUFLLENBQUNELE9BQU87SUFFakMsSUFBSUYsSUFBSUksTUFBTSxLQUFLLFFBQVE7UUFDekIsNkJBQTZCO1FBQzdCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLEtBQUksRUFBRSxHQUFHUCxJQUFJUSxJQUFJO1FBRXRDLElBQUksQ0FBQ0gsTUFBTUksUUFBUSxDQUFDLFFBQVEsQ0FBQ0gsUUFBUUEsS0FBS0ksSUFBSSxPQUFPLE1BQU0sQ0FBQ0gsUUFBUUEsS0FBS0csSUFBSSxLQUFLLElBQUk7WUFDcEZULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUI7WUFDakQ7UUFDRixDQUFDO1FBRUQsTUFBTUMsYUFBYTtZQUNmQyxJQUFJLElBQUlDLE9BQU9DLFdBQVc7WUFDMUJaO1lBQ0FDO1lBQ0FDO1FBQ0o7UUFDQVcsUUFBUUMsR0FBRyxDQUFDTDtRQUVaYixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBa0JPLFNBQVNOO1FBQVc7SUFDeEUsQ0FBQztJQUVELElBQUlkLElBQUlJLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1pQixZQUFZO1lBQ2Q7Z0JBQUVOLElBQUk7Z0JBQU1ULE1BQU07Z0JBQVFDLE1BQU07WUFBZ0I7WUFDaEQ7Z0JBQUVRLElBQUk7Z0JBQU1ULE1BQU07Z0JBQVdDLE1BQU07WUFBaUI7U0FFdkQ7UUFDRE4sSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFVSxVQUFVRDtRQUFVO0lBQzdDLENBQUM7QUFDSDtBQUVFLGlFQUFldEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzPzhiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBldmVudElkID0gcmVxLnF1ZXJ5LmV2ZW50SWQ7XG4gIFxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAvLyBhZGQgc2VydmVyLXNpZGUgdmFsaWRhdGlvblxuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIHRleHQgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCFlbWFpbC5pbmNsdWRlcygnQCcpIHx8ICFuYW1lIHx8IG5hbWUudHJpbSgpID09PSAnJyB8fCAhdGV4dCB8fCB0ZXh0LnRyaW0gPT09ICcnKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0LicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICAgIGlkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0ZXh0LFxuICAgIH07XG4gICAgY29uc29sZS5sb2cobmV3Q29tbWVudCk7XG4gICAgXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnQWRkZWQgY29tbWVudC4nLCBjb21tZW50OiBuZXdDb21tZW50IH0pO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBkdW1teUxpc3QgPSBbXG4gICAgICAgIHsgaWQ6ICdjMScsIG5hbWU6ICdCaWxsJywgdGV4dDogJ2ZpcnN0IGNvbW1lbnQnIH0sXG4gICAgICAgIHsgaWQ6ICdjMicsIG5hbWU6ICdDYXJvbHluJywgdGV4dDogJ3NlY29uZCBjb21tZW50JyB9XG5cbiAgICBdO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29tbWVudHM6IGR1bW15TGlzdCB9KTtcbiAgfVxufVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImV2ZW50SWQiLCJxdWVyeSIsIm1ldGhvZCIsImVtYWlsIiwibmFtZSIsInRleHQiLCJib2R5IiwiaW5jbHVkZXMiLCJ0cmltIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJuZXdDb21tZW50IiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiY29tbWVudCIsImR1bW15TGlzdCIsImNvbW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[eventId].js\n");

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