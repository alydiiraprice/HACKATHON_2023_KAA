/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FHackathon%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Findex.tsx&page=%2F!":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FHackathon%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Findex.tsx&page=%2F! ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmFyb3VzaGElMkZIYWNrYXRob24lMkZIQUNLQVRIT05fMjAyM19LQUElMkZsdW1pbmEtZnJvbnRlbmQlMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2VkNmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FHackathon%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroTitle: function() { return /* binding */ HeroTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({\n        wrapper: {\n            position: \"relative\",\n            boxSizing: \"border-box\",\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.white\n        },\n        inner: {\n            position: \"relative\",\n            paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(200),\n            paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(120),\n            [theme.fn.smallerThan(\"sm\")]: {\n                paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(80),\n                paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(80)\n            }\n        },\n        title: {\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(62),\n            fontWeight: 900,\n            lineHeight: 1.1,\n            margin: 0,\n            padding: 0,\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black,\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(42),\n                lineHeight: 1.2\n            }\n        },\n        description: {\n            marginTop: theme.spacing.xl,\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(24),\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(18)\n            }\n        },\n        controls: {\n            marginTop: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            [theme.fn.smallerThan(\"sm\")]: {\n                marginTop: theme.spacing.xl\n            }\n        },\n        control: {\n            height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(54),\n            paddingLeft: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(38),\n            paddingRight: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(38),\n            [theme.fn.smallerThan(\"sm\")]: {\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(54),\n                paddingLeft: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(18),\n                paddingRight: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(18),\n                flex: 1\n            }\n        }\n    }));\nfunction HeroTitle() {\n    _s();\n    const { classes } = useStyles();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const signupClick = ()=>{\n        router.push(\"/signup\");\n    };\n    const loginClick = ()=>{\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classes.wrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            size: 700,\n            className: classes.inner,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: classes.title,\n                    children: [\n                        \"Welcome to\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            component: \"span\",\n                            variant: \"gradient\",\n                            gradient: {\n                                from: \"purple\",\n                                to: \"pink\"\n                            },\n                            inherit: true,\n                            children: \"lumina\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    className: classes.description,\n                    color: \"dimmed\",\n                    children: \"Your Wellness, Your Way: Lumina Lights Your Path.\"\n                }, void 0, false, {\n                    fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                    className: classes.controls,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"xl\",\n                            className: classes.control,\n                            variant: \"gradient\",\n                            gradient: {\n                                from: \"purple\",\n                                to: \"pink\"\n                            },\n                            onClick: signupClick,\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"xl\",\n                            className: classes.control,\n                            variant: \"gradient\",\n                            gradient: {\n                                from: \"purple\",\n                                to: \"pink\"\n                            },\n                            onClick: loginClick,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroTitle, \"UgBU8TFkjiuhb2TeWuvRH9YeVRU=\", false, function() {\n    return [\n        useStyles,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = HeroTitle;\nvar _c;\n$RefreshReg$(_c, \"HeroTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixnREFBS0E7b0JBQUM0QyxXQUFXTixRQUFRUCxRQUFROztzQ0FDaEMsOERBQUNoQyxpREFBTUE7NEJBQ0w4QyxNQUFLOzRCQUNMRCxXQUFXTixRQUFRTixPQUFPOzRCQUMxQmdCLFNBQVE7NEJBQ1JDLFVBQVU7Z0NBQUVDLE1BQU07Z0NBQVVDLElBQUk7NEJBQU87NEJBQ3ZDRSxTQUFTYjtzQ0FDVjs7Ozs7O3NDQUlELDhEQUFDekMsaURBQU1BOzRCQUNMOEMsTUFBSzs0QkFDTEQsV0FBV04sUUFBUU4sT0FBTzs0QkFDMUJnQixTQUFROzRCQUNSQyxVQUFVO2dDQUFFQyxNQUFNO2dDQUFVQyxJQUFJOzRCQUFPOzRCQUN2Q0UsU0FBU1g7c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuRGdCTDs7UUFDTWxDO1FBRUxELGtEQUFTQTs7O0tBSFZtQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8udHN4P2U3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBDb250YWluZXIsIFRleHQsIEJ1dHRvbiwgR3JvdXAsIHJlbSB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgfSxcblxuICBpbm5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdUb3A6IHJlbSgyMDApLFxuICAgIHBhZGRpbmdCb3R0b206IHJlbSgxMjApLFxuXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKCdzbScpXToge1xuICAgICAgcGFkZGluZ0JvdHRvbTogcmVtKDgwKSxcbiAgICAgIHBhZGRpbmdUb3A6IHJlbSg4MCksXG4gICAgfSxcbiAgfSxcblxuICB0aXRsZToge1xuICAgIGZvbnRGYW1pbHk6IGBHcmV5Y2xpZmYgQ0YsICR7dGhlbWUuZm9udEZhbWlseX1gLFxuICAgIGZvbnRTaXplOiByZW0oNjIpLFxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICBsaW5lSGVpZ2h0OiAxLjEsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKCdzbScpXToge1xuICAgICAgZm9udFNpemU6IHJlbSg0MiksXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgfSxcblxuICBkZXNjcmlwdGlvbjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy54bCxcbiAgICBmb250U2l6ZTogcmVtKDI0KSxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbignc20nKV06IHtcbiAgICAgIGZvbnRTaXplOiByZW0oMTgpLFxuICAgIH0sXG4gIH0sXG5cbiAgY29udHJvbHM6IHtcbiAgICBtYXJnaW5Ub3A6IGBjYWxjKCR7dGhlbWUuc3BhY2luZy54bH0gKiAyKWAsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgfSxcbiAgfSxcblxuICBjb250cm9sOiB7XG4gICAgaGVpZ2h0OiByZW0oNTQpLFxuICAgIHBhZGRpbmdMZWZ0OiByZW0oMzgpLFxuICAgIHBhZGRpbmdSaWdodDogcmVtKDM4KSxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbignc20nKV06IHtcbiAgICAgIGhlaWdodDogcmVtKDU0KSxcbiAgICAgIHBhZGRpbmdMZWZ0OiByZW0oMTgpLFxuICAgICAgcGFkZGluZ1JpZ2h0OiByZW0oMTgpLFxuICAgICAgZmxleDogMSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVyb1RpdGxlKCkge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNpZ251cENsaWNrID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH07XG5cbiAgY29uc3QgbG9naW5DbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cbiAgICAgIDxDb250YWluZXIgc2l6ZT17NzAwfSBjbGFzc05hbWU9e2NsYXNzZXMuaW5uZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRveycgJ31cbiAgICAgICAgICA8VGV4dCBjb21wb25lbnQ9XCJzcGFuXCIgdmFyaWFudD1cImdyYWRpZW50XCIgZ3JhZGllbnQ9e3sgZnJvbTogJ3B1cnBsZScsIHRvOiAncGluaycgfX0gaW5oZXJpdD5cbiAgICAgICAgICAgIGx1bWluYVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IGNvbG9yPVwiZGltbWVkXCI+XG4gICAgICAgICAgICBZb3VyIFdlbGxuZXNzLCBZb3VyIFdheTogTHVtaW5hIExpZ2h0cyBZb3VyIFBhdGguXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICA8R3JvdXAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9XG4gICAgICAgICAgICB2YXJpYW50PVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgZ3JhZGllbnQ9e3sgZnJvbTogJ3B1cnBsZScsIHRvOiAncGluaycgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ251cENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJncmFkaWVudFwiXG4gICAgICAgICAgICBncmFkaWVudD17eyBmcm9tOiAncHVycGxlJywgdG86ICdwaW5rJyB9fVxuICAgICAgICAgICAgb25DbGljaz17bG9naW5DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0eWxlcyIsIkNvbnRhaW5lciIsIlRleHQiLCJCdXR0b24iLCJHcm91cCIsInJlbSIsInVzZVJvdXRlciIsInVzZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsInBvc2l0aW9uIiwiYm94U2l6aW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJkYXJrIiwid2hpdGUiLCJpbm5lciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZm4iLCJzbWFsbGVyVGhhbiIsInRpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJibGFjayIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInhsIiwiY29udHJvbHMiLCJjb250cm9sIiwiaGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJmbGV4IiwiSGVyb1RpdGxlIiwiY2xhc3NlcyIsInJvdXRlciIsInNpZ251cENsaWNrIiwicHVzaCIsImxvZ2luQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwiaDEiLCJjb21wb25lbnQiLCJ2YXJpYW50IiwiZ3JhZGllbnQiLCJmcm9tIiwidG8iLCJpbmhlcml0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Landing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Hero */ \"./components/Hero.tsx\");\n\n\n\n\nfunction Landing() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__.HeroTitle, {}, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Landing;\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9NQTtBQVBzQjtBQUtpQjtBQUk5QixTQUFTRztJQUN0QixxQkFDRTs7MEJBQ0UsOERBQUNGLGtEQUFJQTs7a0NBQ0gsOERBQUNHO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNSLHVEQUFTQTs7Ozs7OztBQUdoQjtLQWJ3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IE5hdmJhclNpbXBsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgeyBIZXJvVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVybydcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVyb1RpdGxlIC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJIZXJvVGl0bGUiLCJMYW5kaW5nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FHackathon%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);