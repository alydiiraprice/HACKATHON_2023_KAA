"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroTitle: function() { return /* binding */ HeroTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _mantine_ds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/ds */ \"./node_modules/@mantine/ds/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.createStyles)((theme)=>({\n        wrapper: {\n            position: \"relative\",\n            boxSizing: \"border-box\",\n            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.white\n        },\n        inner: {\n            position: \"relative\",\n            paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(200),\n            paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(120),\n            [theme.fn.smallerThan(\"sm\")]: {\n                paddingBottom: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(80),\n                paddingTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(80)\n            }\n        },\n        title: {\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(62),\n            fontWeight: 900,\n            lineHeight: 1.1,\n            margin: 0,\n            padding: 0,\n            color: theme.colorScheme === \"dark\" ? theme.white : theme.black,\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(42),\n                lineHeight: 1.2\n            }\n        },\n        description: {\n            marginTop: theme.spacing.xl,\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(24),\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(18)\n            }\n        },\n        controls: {\n            marginTop: \"calc(\".concat(theme.spacing.xl, \" * 2)\"),\n            [theme.fn.smallerThan(\"sm\")]: {\n                marginTop: theme.spacing.xl\n            }\n        },\n        control: {\n            height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(54),\n            paddingLeft: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(38),\n            paddingRight: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(38),\n            [theme.fn.smallerThan(\"sm\")]: {\n                height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(54),\n                paddingLeft: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(18),\n                paddingRight: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.rem)(18),\n                flex: 1\n            }\n        }\n    }));\nfunction HeroTitle() {\n    _s();\n    const { classes } = useStyles();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const signupClick = ()=>{\n        router.push(\"/signup\");\n    };\n    const loginClick = ()=>{\n        router.push(\"/signup\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classes.wrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            size: 700,\n            className: classes.inner,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: classes.title,\n                    children: [\n                        \"Welcome to\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            component: \"span\",\n                            variant: \"gradient\",\n                            gradient: {\n                                from: \"purple\",\n                                to: \"pink\"\n                            },\n                            inherit: true,\n                            children: \"lumina\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    className: classes.description,\n                    color: \"dimmed\",\n                    children: \"Your Wellness, Your Way: Lumina Lights Your Path.\"\n                }, void 0, false, {\n                    fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                    className: classes.controls,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"xl\",\n                            className: classes.control,\n                            variant: \"gradient\",\n                            gradient: {\n                                from: \"purple\",\n                                to: \"pink\"\n                            },\n                            onClick: signupClick,\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            component: \"a\",\n                            href: \"https://github.com/mantinedev/mantine\",\n                            size: \"xl\",\n                            variant: \"default\",\n                            className: classes.control,\n                            leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_ds__WEBPACK_IMPORTED_MODULE_3__.GithubIcon, {\n                                size: 20\n                            }, void 0, false, void 0, void 0),\n                            children: \"GitHub\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/Hero.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(HeroTitle, \"UgBU8TFkjiuhb2TeWuvRH9YeVRU=\", false, function() {\n    return [\n        useStyles,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = HeroTitle;\nvar _c;\n$RefreshReg$(_c, \"HeroTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUMxQixnREFBS0E7b0JBQUM2QyxXQUFXTixRQUFRUCxRQUFROztzQ0FDaEMsOERBQUNqQyxpREFBTUE7NEJBQ0wrQyxNQUFLOzRCQUNMRCxXQUFXTixRQUFRTixPQUFPOzRCQUMxQmdCLFNBQVE7NEJBQ1JDLFVBQVU7Z0NBQUVDLE1BQU07Z0NBQVVDLElBQUk7NEJBQU87NEJBQ3ZDRSxTQUFTYjtzQ0FDVjs7Ozs7O3NDQUlELDhEQUFDMUMsaURBQU1BOzRCQUNMaUQsV0FBVTs0QkFDVk8sTUFBSzs0QkFDTFQsTUFBSzs0QkFDTEcsU0FBUTs0QkFDUkosV0FBV04sUUFBUU4sT0FBTzs0QkFDMUJ1Qix3QkFBVSw4REFBQ3RELG1EQUFVQTtnQ0FBQzRDLE1BQU07O3NDQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXBEZ0JSOztRQUNNbEM7UUFFTEQsa0RBQVNBOzs7S0FIVm1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby50c3g/ZTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIENvbnRhaW5lciwgVGV4dCwgQnV0dG9uLCBHcm91cCwgcmVtIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5pbXBvcnQgeyBHaXRodWJJY29uIH0gZnJvbSAnQG1hbnRpbmUvZHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS53aGl0ZSxcbiAgfSxcblxuICBpbm5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdUb3A6IHJlbSgyMDApLFxuICAgIHBhZGRpbmdCb3R0b206IHJlbSgxMjApLFxuXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKCdzbScpXToge1xuICAgICAgcGFkZGluZ0JvdHRvbTogcmVtKDgwKSxcbiAgICAgIHBhZGRpbmdUb3A6IHJlbSg4MCksXG4gICAgfSxcbiAgfSxcblxuICB0aXRsZToge1xuICAgIGZvbnRGYW1pbHk6IGBHcmV5Y2xpZmYgQ0YsICR7dGhlbWUuZm9udEZhbWlseX1gLFxuICAgIGZvbnRTaXplOiByZW0oNjIpLFxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICBsaW5lSGVpZ2h0OiAxLjEsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS53aGl0ZSA6IHRoZW1lLmJsYWNrLFxuXG4gICAgW3RoZW1lLmZuLnNtYWxsZXJUaGFuKCdzbScpXToge1xuICAgICAgZm9udFNpemU6IHJlbSg0MiksXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgfSxcbiAgfSxcblxuICBkZXNjcmlwdGlvbjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy54bCxcbiAgICBmb250U2l6ZTogcmVtKDI0KSxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbignc20nKV06IHtcbiAgICAgIGZvbnRTaXplOiByZW0oMTgpLFxuICAgIH0sXG4gIH0sXG5cbiAgY29udHJvbHM6IHtcbiAgICBtYXJnaW5Ub3A6IGBjYWxjKCR7dGhlbWUuc3BhY2luZy54bH0gKiAyKWAsXG5cbiAgICBbdGhlbWUuZm4uc21hbGxlclRoYW4oJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgfSxcbiAgfSxcblxuICBjb250cm9sOiB7XG4gICAgaGVpZ2h0OiByZW0oNTQpLFxuICAgIHBhZGRpbmdMZWZ0OiByZW0oMzgpLFxuICAgIHBhZGRpbmdSaWdodDogcmVtKDM4KSxcblxuICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbignc20nKV06IHtcbiAgICAgIGhlaWdodDogcmVtKDU0KSxcbiAgICAgIHBhZGRpbmdMZWZ0OiByZW0oMTgpLFxuICAgICAgcGFkZGluZ1JpZ2h0OiByZW0oMTgpLFxuICAgICAgZmxleDogMSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVyb1RpdGxlKCkge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNpZ251cENsaWNrID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH07XG5cbiAgY29uc3QgbG9naW5DbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XG4gICAgICA8Q29udGFpbmVyIHNpemU9ezcwMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0b3snICd9XG4gICAgICAgICAgPFRleHQgY29tcG9uZW50PVwic3BhblwiIHZhcmlhbnQ9XCJncmFkaWVudFwiIGdyYWRpZW50PXt7IGZyb206ICdwdXJwbGUnLCB0bzogJ3BpbmsnIH19IGluaGVyaXQ+XG4gICAgICAgICAgICBsdW1pbmFcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufSBjb2xvcj1cImRpbW1lZFwiPlxuICAgICAgICAgICAgWW91ciBXZWxsbmVzcywgWW91ciBXYXk6IEx1bWluYSBMaWdodHMgWW91ciBQYXRoLlxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPEdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sc30+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfVxuICAgICAgICAgICAgdmFyaWFudD1cImdyYWRpZW50XCJcbiAgICAgICAgICAgIGdyYWRpZW50PXt7IGZyb206ICdwdXJwbGUnLCB0bzogJ3BpbmsnIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtzaWdudXBDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFudGluZWRldi9tYW50aW5lXCJcbiAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH1cbiAgICAgICAgICAgIGxlZnRJY29uPXs8R2l0aHViSWNvbiBzaXplPXsyMH0gLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3R5bGVzIiwiQ29udGFpbmVyIiwiVGV4dCIsIkJ1dHRvbiIsIkdyb3VwIiwicmVtIiwiR2l0aHViSWNvbiIsInVzZVJvdXRlciIsInVzZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsInBvc2l0aW9uIiwiYm94U2l6aW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJkYXJrIiwid2hpdGUiLCJpbm5lciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZm4iLCJzbWFsbGVyVGhhbiIsInRpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJibGFjayIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInhsIiwiY29udHJvbHMiLCJjb250cm9sIiwiaGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJmbGV4IiwiSGVyb1RpdGxlIiwiY2xhc3NlcyIsInJvdXRlciIsInNpZ251cENsaWNrIiwicHVzaCIsImxvZ2luQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwiaDEiLCJjb21wb25lbnQiLCJ2YXJpYW50IiwiZ3JhZGllbnQiLCJmcm9tIiwidG8iLCJpbmhlcml0Iiwib25DbGljayIsImhyZWYiLCJsZWZ0SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n"));

/***/ })

});