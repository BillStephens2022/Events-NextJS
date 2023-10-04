exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 4279:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__fP_PG"
};


/***/ }),

/***/ 9754:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "event-item_item__fVtqa",
	"content": "event-item_content__SQSF9",
	"date": "event-item_date__4WZ_m",
	"address": "event-item_address__tF6LM",
	"actions": "event-item_actions__FMKJ9",
	"icon": "event-item_icon__Dun0S"
};


/***/ }),

/***/ 1455:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "event-list_list__cHFCu"
};


/***/ }),

/***/ 4992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4279);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Button(props) {
    if (props.link) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: props.link,
            className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
            children: props.children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),
        onClick: props.onClick,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ event_list)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/events/event-item.module.css
var event_item_module = __webpack_require__(9754);
var event_item_module_default = /*#__PURE__*/__webpack_require__.n(event_item_module);
// EXTERNAL MODULE: ./components/UI/button.js
var UI_button = __webpack_require__(4992);
// EXTERNAL MODULE: ./components/icons/date-icon.js
var date_icon = __webpack_require__(6447);
// EXTERNAL MODULE: ./components/icons/address-icon.js
var address_icon = __webpack_require__(6860);
;// CONCATENATED MODULE: ./components/icons/arrow-right-icon.js

function ArrowRightIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
            clipRule: "evenodd"
        })
    });
}
/* harmony default export */ const arrow_right_icon = (ArrowRightIcon);

;// CONCATENATED MODULE: ./components/events/event-item.js







function EventItem(props) {
    const { title , image , date , location , id  } = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (event_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/" + image,
                alt: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (event_item_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (event_item_module_default()).summary,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (event_item_module_default()).date,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(date_icon/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                        children: humanReadableDate
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (event_item_module_default()).address,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(address_icon/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("address", {
                                        children: formattedAddress
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (event_item_module_default()).actions,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UI_button/* default */.Z, {
                            link: exploreLink,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Explore Event"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (event_item_module_default()).icon,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(arrow_right_icon, {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const event_item = (EventItem);

// EXTERNAL MODULE: ./components/events/event-list.module.css
var event_list_module = __webpack_require__(1455);
var event_list_module_default = /*#__PURE__*/__webpack_require__.n(event_list_module);
;// CONCATENATED MODULE: ./components/events/event-list.js



function EventList(props) {
    const { items  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (event_list_module_default()).list,
        children: items.map((event)=>/*#__PURE__*/ jsx_runtime_.jsx(event_item, {
                id: event.id,
                title: event.title,
                location: event.location,
                date: event.date,
                image: event.image
            }, event.id))
    });
}
/* harmony default export */ const event_list = (EventList);


/***/ })

};
;