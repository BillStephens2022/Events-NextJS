(() => {
var exports = {};
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 4788:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "event-content_content__N8f4Q"
};


/***/ }),

/***/ 8675:
/***/ ((module) => {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__nnLSE",
	"image": "event-logistics_image__cldYm",
	"list": "event-logistics_list__flNvw"
};


/***/ }),

/***/ 3266:
/***/ ((module) => {

// Exports
module.exports = {
	"summary": "event-summary_summary__rmm9D"
};


/***/ }),

/***/ 2063:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "logistics-item_item__jiFzn",
	"icon": "logistics-item_icon__o2W_d"
};


/***/ }),

/***/ 4446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP": () => (/* binding */ getAllEvents),
/* harmony export */   "N6": () => (/* binding */ getFeaturedEvents),
/* harmony export */   "Y": () => (/* binding */ getEventById)
/* harmony export */ });
/* unused harmony export getFilteredEvents */
async function getAllEvents() {
    const response = await fetch("https://nextjs-course-ce00b-default-rtdb.firebaseio.com/events.json");
    const data = await response.json();
    const events = [];
    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}
async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event)=>event.isFeatured);
}
async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event)=>event.id === id);
}
async function getFilteredEvents(dateFilter) {
    const { year , month  } = dateFilter;
    const allEvents = await getAllEvents();
    let filteredEvents = allEvents.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _eventId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(4446);
// EXTERNAL MODULE: ./components/event-detail/event-summary.module.css
var event_summary_module = __webpack_require__(3266);
var event_summary_module_default = /*#__PURE__*/__webpack_require__.n(event_summary_module);
;// CONCATENATED MODULE: ./components/event-detail/event-summary.js


function EventSummary(props) {
    const { title  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (event_summary_module_default()).summary,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: title
        })
    });
}
/* harmony default export */ const event_summary = (EventSummary);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/icons/address-icon.js
var address_icon = __webpack_require__(6860);
// EXTERNAL MODULE: ./components/icons/date-icon.js
var date_icon = __webpack_require__(6447);
// EXTERNAL MODULE: ./components/event-detail/logistics-item.module.css
var logistics_item_module = __webpack_require__(2063);
var logistics_item_module_default = /*#__PURE__*/__webpack_require__.n(logistics_item_module);
;// CONCATENATED MODULE: ./components/event-detail/logistics-item.js


function LogisticsItem(props) {
    const { icon: Icon  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (logistics_item_module_default()).item,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (logistics_item_module_default()).icon,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (logistics_item_module_default()).content,
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const logistics_item = (LogisticsItem);

// EXTERNAL MODULE: ./components/event-detail/event-logistics.module.css
var event_logistics_module = __webpack_require__(8675);
var event_logistics_module_default = /*#__PURE__*/__webpack_require__.n(event_logistics_module);
;// CONCATENATED MODULE: ./components/event-detail/event-logistics.js






function EventLogistics(props) {
    const { date , address , image , imageAlt  } = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const addressText = address.replace(", ", "\n");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (event_logistics_module_default()).logistics,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (event_logistics_module_default()).image,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `/${image}`,
                    alt: imageAlt,
                    width: 400,
                    height: 400
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (event_logistics_module_default()).list,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logistics_item, {
                        icon: date_icon/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                            children: humanReadableDate
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(logistics_item, {
                        icon: address_icon/* default */.Z,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: addressText
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const event_logistics = (EventLogistics);

// EXTERNAL MODULE: ./components/event-detail/event-content.module.css
var event_content_module = __webpack_require__(4788);
var event_content_module_default = /*#__PURE__*/__webpack_require__.n(event_content_module);
;// CONCATENATED MODULE: ./components/event-detail/event-content.js


function EventContent(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (event_content_module_default()).content,
        children: props.children
    });
}
/* harmony default export */ const event_content = (EventContent);

;// CONCATENATED MODULE: ./pages/events/[eventId].js







function EventDetailPage(props) {
    const event = props.selectedEvent;
    if (!event) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Loading!"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: event.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: event.description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_summary, {
                title: event.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_logistics, {
                date: event.date,
                address: event.location,
                image: event.image,
                imageAlt: event.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(event_content, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: event.description
                })
            })
        ]
    });
}
async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await (0,api_util/* getEventById */.Y)(eventId);
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
}
async function getStaticPaths() {
    const events = await (0,api_util/* getFeaturedEvents */.N6)();
    const paths = events.map((event)=>({
            params: {
                eventId: event.id
            }
        }));
    return {
        paths: paths,
        fallback: "blocking"
    };
}
/* harmony default export */ const _eventId_ = (EventDetailPage);


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,694], () => (__webpack_exec__(660)));
module.exports = __webpack_exports__;

})();