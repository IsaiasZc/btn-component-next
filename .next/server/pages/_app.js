(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/common/NavLink.js


const NavLink = ({ name  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "#",
        className: "text-neutral-400 font-medium hover:text-black",
        children: name
    });
};
/* harmony default export */ const common_NavLink = (NavLink);

;// CONCATENATED MODULE: ./src/layout/Header.js



const options = [
    "Colors",
    "Typography",
    "Spaces",
    "Buttons",
    "Inputs",
    "Grid"
];
const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "w-1/5 max-w-max min-h-screen p-7 bg-neutral-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-lg font-bold pb-32",
                children: "Button Web Page"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col gap-5",
                children: options.map((option, idx)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(common_NavLink, {
                        name: option
                    }, `nav-${idx}}`);
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 689:
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(662));
module.exports = __webpack_exports__;

})();