"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/DashboardCard.tsx":
/*!**************************************!*\
  !*** ./components/DashboardCard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardCard: function() { return /* binding */ DashboardCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n/* harmony import */ var _public_girl_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../public/girl.svg */ \"./public/girl.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({\n        inner: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            paddingTop: \"calc(\".concat(theme.spacing.xl, \" * 4)\"),\n            paddingBottom: \"calc(\".concat(theme.spacing.xl, \" * 2)\")\n        },\n        content: {\n            maxWidth: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(480),\n            marginRight: \"calc(\".concat(theme.spacing.xl, \" * 3)\"),\n            [theme.fn.smallerThan(\"md\")]: {\n                maxWidth: \"100%\",\n                marginRight: 0\n            }\n        },\n        title: {\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black,\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(44),\n            lineHeight: 1.2,\n            fontWeight: 900,\n            [theme.fn.smallerThan(\"xs\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(28)\n            }\n        },\n        control: {\n            [theme.fn.smallerThan(\"xs\")]: {\n                flex: 1\n            }\n        },\n        image: {\n            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(50),\n            flex: 1,\n            [theme.fn.smallerThan(\"md\")]: {\n                display: \"none\"\n            }\n        },\n        highlight: {\n            position: \"relative\",\n            backgroundColor: theme.fn.variant({\n                variant: \"light\",\n                color: theme.primaryColor\n            }).background,\n            borderRadius: theme.radius.sm,\n            padding: \"\".concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(4), \" \").concat((0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(12))\n        }\n    }));\nfunction DashboardCard(param) {\n    let { username } = param;\n    _s();\n    const { classes } = useStyles();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.inner,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classes.content,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                                className: classes.title,\n                                children: [\n                                    \"Welcome \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: classes.highlight,\n                                        children: \"Katherine\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" to your Lumina dashbaord\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.List, {\n                                mt: 30,\n                                spacing: \"sm\",\n                                size: \"sm\",\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ThemeIcon, {\n                                    size: 20,\n                                    radius: \"xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconCheck, {\n                                        size: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(12),\n                                        stroke: 1.5\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"TypeScript based\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" – build type safe applications, all components and hooks export types\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Free and open source\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" – all packages have MIT license, you can use Mantine in any project\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"No annoying focus ring\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" – focus ring will appear only when user navigates with keyboard\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: _public_girl_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n                        className: classes.image\n                    }, void 0, false, {\n                        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n                lineNumber: 74,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n            lineNumber: 73,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/katherinegibson/unsw/hackathon/WIT2023/HACKATHON_2023_KAA/lumina-frontend/components/DashboardCard.tsx\",\n        lineNumber: 72,\n        columnNumber: 7\n    }, this);\n}\n_s(DashboardCard, \"pLBpBp6WiWV8odSNq6A1zI9Ay/Y=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = DashboardCard;\nvar _c;\n$RefreshReg$(_c, \"DashboardCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSUEsQ0FBQ21ELElBQUk7OzBEQUNSLDhEQUFDQzswREFBRTs7Ozs7OzRDQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNbkMsOERBQUN2RCxnREFBS0E7d0JBQUN3RCxLQUFLakQsNERBQVM7d0JBQUV5QyxXQUFXRixRQUFRdkMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6RDtHQXpDZ0JxQzs7UUFDTXBDOzs7S0FETm9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkQ2FyZC50c3g/ZjBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGNyZWF0ZVN0eWxlcyxcbiAgICBJbWFnZSxcbiAgICBDb250YWluZXIsXG4gICAgVGl0bGUsXG4gICAgQnV0dG9uLFxuICAgIEdyb3VwLFxuICAgIFRleHQsXG4gICAgTGlzdCxcbiAgICBUaGVtZUljb24sXG4gICAgcmVtLFxuICB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuICBpbXBvcnQgeyBJY29uQ2hlY2sgfSBmcm9tICdAdGFibGVyL2ljb25zLXJlYWN0JztcbiAgaW1wb3J0IGltYWdlIGZyb20gJy4vLi4vcHVibGljL2dpcmwuc3ZnJztcbiAgXG4gIGNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgaW5uZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBwYWRkaW5nVG9wOiBgY2FsYygke3RoZW1lLnNwYWNpbmcueGx9ICogNClgLFxuICAgICAgcGFkZGluZ0JvdHRvbTogYGNhbGMoJHt0aGVtZS5zcGFjaW5nLnhsfSAqIDIpYCxcbiAgICB9LFxuICBcbiAgICBjb250ZW50OiB7XG4gICAgICBtYXhXaWR0aDogcmVtKDQ4MCksXG4gICAgICBtYXJnaW5SaWdodDogYGNhbGMoJHt0aGVtZS5zcGFjaW5nLnhsfSAqIDMpYCxcbiAgXG4gICAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oJ21kJyldOiB7XG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICBcbiAgICB0aXRsZToge1xuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuICAgICAgZm9udEZhbWlseTogYEdyZXljbGlmZiBDRiwgJHt0aGVtZS5mb250RmFtaWx5fWAsXG4gICAgICBmb250U2l6ZTogcmVtKDQ0KSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgXG4gICAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oJ3hzJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiByZW0oMjgpLFxuICAgICAgfSxcbiAgICB9LFxuICBcbiAgICBjb250cm9sOiB7XG4gICAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oJ3hzJyldOiB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIFxuICAgIGltYWdlOiB7XG4gICAgICBtYXJnaW5Ub3A6cmVtKDUwKSxcbiAgICAgIGZsZXg6IDEsXG4gIFxuICAgICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKCdtZCcpXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIFxuICAgIGhpZ2hsaWdodDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmZuLnZhcmlhbnQoeyB2YXJpYW50OiAnbGlnaHQnLCBjb2xvcjogdGhlbWUucHJpbWFyeUNvbG9yIH0pLmJhY2tncm91bmQsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5zbSxcbiAgICAgIHBhZGRpbmc6IGAke3JlbSg0KX0gJHtyZW0oMTIpfWAsXG4gICAgfSxcbiAgfSkpO1xuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIERhc2hib2FyZENhcmQoeyB1c2VybmFtZSB9KSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgV2VsY29tZSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaGlnaGxpZ2h0fT5LYXRoZXJpbmU8L3NwYW4+IHRvIHlvdXIgTHVtaW5hIGRhc2hiYW9yZFxuICAgICAgICAgICAgICA8L1RpdGxlPlxuICBcbiAgICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgICBtdD17MzB9XG4gICAgICAgICAgICAgICAgc3BhY2luZz1cInNtXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgPFRoZW1lSWNvbiBzaXplPXsyMH0gcmFkaXVzPVwieGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25DaGVjayBzaXplPXtyZW0oMTIpfSBzdHJva2U9ezEuNX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvVGhlbWVJY29uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Yj5UeXBlU2NyaXB0IGJhc2VkPC9iPiDigJMgYnVpbGQgdHlwZSBzYWZlIGFwcGxpY2F0aW9ucywgYWxsIGNvbXBvbmVudHMgYW5kIGhvb2tzXG4gICAgICAgICAgICAgICAgICBleHBvcnQgdHlwZXNcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPGI+RnJlZSBhbmQgb3BlbiBzb3VyY2U8L2I+IOKAkyBhbGwgcGFja2FnZXMgaGF2ZSBNSVQgbGljZW5zZSwgeW91IGNhbiB1c2UgTWFudGluZSBpblxuICAgICAgICAgICAgICAgICAgYW55IHByb2plY3RcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPGI+Tm8gYW5ub3lpbmcgZm9jdXMgcmluZzwvYj4g4oCTIGZvY3VzIHJpbmcgd2lsbCBhcHBlYXIgb25seSB3aGVuIHVzZXIgbmF2aWdhdGVzIHdpdGhcbiAgICAgICAgICAgICAgICAgIGtleWJvYXJkXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlLnNyY30gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0iXSwibmFtZXMiOlsiY3JlYXRlU3R5bGVzIiwiSW1hZ2UiLCJDb250YWluZXIiLCJUaXRsZSIsIkxpc3QiLCJUaGVtZUljb24iLCJyZW0iLCJJY29uQ2hlY2siLCJpbWFnZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiaW5uZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nVG9wIiwic3BhY2luZyIsInhsIiwicGFkZGluZ0JvdHRvbSIsImNvbnRlbnQiLCJtYXhXaWR0aCIsIm1hcmdpblJpZ2h0IiwiZm4iLCJzbWFsbGVyVGhhbiIsInRpdGxlIiwiY29sb3IiLCJjb2xvclNjaGVtZSIsIndoaXRlIiwiYmxhY2siLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImNvbnRyb2wiLCJmbGV4IiwibWFyZ2luVG9wIiwiaGlnaGxpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YXJpYW50IiwicHJpbWFyeUNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsInNtIiwicGFkZGluZyIsIkRhc2hib2FyZENhcmQiLCJ1c2VybmFtZSIsImNsYXNzZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwibXQiLCJzaXplIiwiaWNvbiIsInN0cm9rZSIsIkl0ZW0iLCJiIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DashboardCard.tsx\n"));

/***/ })

});