"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Medicare",{

/***/ "./components/MedicareModule.tsx":
/*!***************************************!*\
  !*** ./components/MedicareModule.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Module; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/carousel */ \"./node_modules/@mantine/carousel/esm/index.js\");\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/hooks */ \"./node_modules/@mantine/hooks/esm/index.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({\n        card: {\n            height: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(440),\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"space-between\",\n            alignItems: \"flex-start\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            backgroundColor: theme.colors.violet[5]\n        },\n        carousel: {\n            marginLeft: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(200),\n            marginRight: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(200),\n            marginTop: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(200)\n        },\n        title: {\n            fontFamily: \"Greycliff CF, \".concat(theme.fontFamily),\n            fontWeight: 900,\n            color: theme.white,\n            lineHeight: 1.2,\n            fontSize: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(32),\n            marginTop: theme.spacing.xs\n        },\n        category: {\n            color: theme.white,\n            opacity: 0.7,\n            fontWeight: 700,\n            textTransform: \"uppercase\"\n        }\n    }));\nfunction Card(param) {\n    let { title, category, text_content, btnLink } = param;\n    _s();\n    const { classes } = useStyles();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {\n        shadow: \"xl\",\n        p: \"xl\",\n        radius: \"md\",\n        className: classes.card,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        className: classes.category,\n                        size: \"xs\",\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        order: 3,\n                        className: classes.title,\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        children: text_content\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                variant: \"white\",\n                color: \"dark\",\n                component: \"a\",\n                href: btnLink,\n                children: \"Read more\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"pLBpBp6WiWV8odSNq6A1zI9Ay/Y=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Card;\nconst data = [\n    {\n        image: \" \",\n        title: \"Who can enrol?\",\n        category: \"Enrolling in Medicare\",\n        text_content: \"You can enrol in Medicare if you live in Australia and you’re any of these:\",\n        btnLink: \"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#whocan\"\n    },\n    {\n        title: \"What do you need to enrol...\",\n        category: \"Enrolling in Medicare\",\n        text_content: \"You need to give us different documents depending on your circumstances. Read about the documents you need if:\",\n        btnLink: \"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#a2\"\n    },\n    {\n        title: \"How to enrol?\",\n        category: \"Enrolling in Medicare\",\n        text_content: \"Enrol in Medicare by following these steps:    \",\n        btnLink: \"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#howtoenrol\"\n    },\n    {\n        title: \"When you will get a medicare card?\",\n        category: \"Enrolling in Medicare\",\n        text_content: \"Literally never\",\n        btnLink: \"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#a4\"\n    }\n];\nfunction Module() {\n    _s1();\n    const { classes } = useStyles();\n    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();\n    const mobile = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(\"(max-width: \".concat(theme.breakpoints.sm, \")\"));\n    const slides = data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel.Slide, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                ...item\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        }, item.title, false, {\n            fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n            lineNumber: 112,\n            columnNumber: 5\n        }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n        slideSize: \"100%\",\n        breakpoints: [\n            {\n                maxWidth: \"sm\",\n                slideSize: \"100%\",\n                slideGap: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(1)\n            }\n        ],\n        slideGap: \"xl\",\n        align: \"start\",\n        slidesToScroll: mobile ? 1 : 1,\n        className: classes.carousel,\n        children: slides\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/MedicareModule.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s1(Module, \"etmTmKdW/zK9mkR4nhSIPmM8DlA=\", false, function() {\n    return [\n        useStyles,\n        _mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme,\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery\n    ];\n});\n_c1 = Module;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"Module\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtRQUN0RXdELFVBQVM7UUFDVEMsT0FBTTtRQUNOQyxnQkFBZ0JYLFNBQVMsSUFBSTtRQUM3QlYsV0FBV0osUUFBUW5CLFFBQVE7a0JBRTFCb0M7Ozs7OztBQUdQO0lBdEJ3Qko7O1FBQ0o3QztRQUNKRiwwREFBZUE7UUFDZE4seURBQWFBOzs7TUFITnFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVkaWNhcmVNb2R1bGUudHN4P2ZiOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdAbWFudGluZS9jYXJvdXNlbCc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG1hbnRpbmUvaG9va3MnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBQYXBlciwgVGV4dCwgVGl0bGUsIEJ1dHRvbiwgdXNlTWFudGluZVRoZW1lLCByZW0gfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IHRleHQgfSBmcm9tICdub2RlOnN0cmVhbS9jb25zdW1lcnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBjYXJkOiB7XG4gICAgaGVpZ2h0OiByZW0oNDQwKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy52aW9sZXRbNV0sXG4gIH0sXG5cbiAgY2Fyb3VzZWw6IHtcbiAgICBtYXJnaW5MZWZ0OiByZW0oMjAwKSxcbiAgICBtYXJnaW5SaWdodDogcmVtKDIwMCksXG4gICAgbWFyZ2luVG9wOiByZW0oMjAwKVxuICB9LFxuXG5cbiAgdGl0bGU6IHtcbiAgICBmb250RmFtaWx5OiBgR3JleWNsaWZmIENGLCAke3RoZW1lLmZvbnRGYW1pbHl9YCxcbiAgICBmb250V2VpZ2h0OiA5MDAsXG4gICAgY29sb3I6IHRoZW1lLndoaXRlLFxuICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICBmb250U2l6ZTogcmVtKDMyKSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcueHMsXG4gIH0sXG5cbiAgY2F0ZWdvcnk6IHtcbiAgICBjb2xvcjogdGhlbWUud2hpdGUsXG4gICAgb3BhY2l0eTogMC43LFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRleHRfY29udGVudDogc3RyaW5nO1xuICBidG5MaW5rOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIENhcmQoeyB0aXRsZSwgY2F0ZWdvcnksIHRleHRfY29udGVudCwgYnRuTGluayB9OiBDYXJkUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlclxuICAgICAgc2hhZG93PVwieGxcIlxuICAgICAgcD1cInhsXCJcbiAgICAgIHJhZGl1cz1cIm1kXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfVxuICAgICAgXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhdGVnb3J5fSBzaXplPVwieHNcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRpdGxlIG9yZGVyPXszfSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAge3RleHRfY29udGVudH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZVwiIGNvbG9yPVwiZGFya1wiIGNvbXBvbmVudD0nYScgaHJlZj17YnRuTGlua30+XG4gICAgICAgIFJlYWQgbW9yZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGltYWdlOiAnICcsXG4gICAgdGl0bGU6ICdXaG8gY2FuIGVucm9sPycsXG4gICAgY2F0ZWdvcnk6ICdFbnJvbGxpbmcgaW4gTWVkaWNhcmUnLFxuICAgIHRleHRfY29udGVudDpcIllvdSBjYW4gZW5yb2wgaW4gTWVkaWNhcmUgaWYgeW91IGxpdmUgaW4gQXVzdHJhbGlhIGFuZCB5b3XigJlyZSBhbnkgb2YgdGhlc2U6XCIsXG4gICAgYnRuTGluazpcImh0dHBzOi8vd3d3LnNlcnZpY2VzYXVzdHJhbGlhLmdvdi5hdS9lbnJvbGxpbmctbWVkaWNhcmU/Y29udGV4dD02MDA5MiN3aG9jYW5cIlxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXaGF0IGRvIHlvdSBuZWVkIHRvIGVucm9sLi4uJyxcbiAgICBjYXRlZ29yeTogJ0Vucm9sbGluZyBpbiBNZWRpY2FyZScsXG4gICAgdGV4dF9jb250ZW50OlwiWW91IG5lZWQgdG8gZ2l2ZSB1cyBkaWZmZXJlbnQgZG9jdW1lbnRzIGRlcGVuZGluZyBvbiB5b3VyIGNpcmN1bXN0YW5jZXMuIFJlYWQgYWJvdXQgdGhlIGRvY3VtZW50cyB5b3UgbmVlZCBpZjpcIixcbiAgICBidG5MaW5rOlwiaHR0cHM6Ly93d3cuc2VydmljZXNhdXN0cmFsaWEuZ292LmF1L2Vucm9sbGluZy1tZWRpY2FyZT9jb250ZXh0PTYwMDkyI2EyXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSG93IHRvIGVucm9sPycsXG4gICAgY2F0ZWdvcnk6ICdFbnJvbGxpbmcgaW4gTWVkaWNhcmUnLFxuICAgIHRleHRfY29udGVudDpcIkVucm9sIGluIE1lZGljYXJlIGJ5IGZvbGxvd2luZyB0aGVzZSBzdGVwczogICAgXCIsXG4gICAgYnRuTGluazpcImh0dHBzOi8vd3d3LnNlcnZpY2VzYXVzdHJhbGlhLmdvdi5hdS9lbnJvbGxpbmctbWVkaWNhcmU/Y29udGV4dD02MDA5MiNob3d0b2Vucm9sXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2hlbiB5b3Ugd2lsbCBnZXQgYSBtZWRpY2FyZSBjYXJkPycsXG4gICAgY2F0ZWdvcnk6ICdFbnJvbGxpbmcgaW4gTWVkaWNhcmUnLFxuICAgIHRleHRfY29udGVudDpcIkxpdGVyYWxseSBuZXZlclwiLFxuICAgIGJ0bkxpbms6XCJodHRwczovL3d3dy5zZXJ2aWNlc2F1c3RyYWxpYS5nb3YuYXUvZW5yb2xsaW5nLW1lZGljYXJlP2NvbnRleHQ9NjAwOTIjYTRcIlxuXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2R1bGUoKSB7XG5jb25zdCB7IGNsYXNzZXMgfSA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZU1hbnRpbmVUaGVtZSgpO1xuICBjb25zdCBtb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KGAobWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnNtfSlgKTtcbiAgY29uc3Qgc2xpZGVzID0gZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICA8Q2Fyb3VzZWwuU2xpZGUga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgIDxDYXJkIHsuLi5pdGVtfSAvPlxuICAgIDwvQ2Fyb3VzZWwuU2xpZGU+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsXG4gICAgICBzbGlkZVNpemU9XCIxMDAlXCJcbiAgICAgIGJyZWFrcG9pbnRzPXtbeyBtYXhXaWR0aDogJ3NtJywgc2xpZGVTaXplOiAnMTAwJScsIHNsaWRlR2FwOiByZW0oMSkgfV19XG4gICAgICBzbGlkZUdhcD1cInhsXCJcbiAgICAgIGFsaWduPVwic3RhcnRcIlxuICAgICAgc2xpZGVzVG9TY3JvbGw9e21vYmlsZSA/IDEgOiAxfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsfVxuICAgID5cbiAgICAgIHtzbGlkZXN9XG4gICAgPC9DYXJvdXNlbD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJ1c2VNZWRpYVF1ZXJ5IiwiY3JlYXRlU3R5bGVzIiwiUGFwZXIiLCJUZXh0IiwiVGl0bGUiLCJCdXR0b24iLCJ1c2VNYW50aW5lVGhlbWUiLCJyZW0iLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImNhcmQiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwidmlvbGV0IiwiY2Fyb3VzZWwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ3aGl0ZSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInNwYWNpbmciLCJ4cyIsImNhdGVnb3J5Iiwib3BhY2l0eSIsInRleHRUcmFuc2Zvcm0iLCJDYXJkIiwidGV4dF9jb250ZW50IiwiYnRuTGluayIsImNsYXNzZXMiLCJzaGFkb3ciLCJwIiwicmFkaXVzIiwiY2xhc3NOYW1lIiwiZGl2Iiwic2l6ZSIsIm9yZGVyIiwidmFyaWFudCIsImNvbXBvbmVudCIsImhyZWYiLCJkYXRhIiwiaW1hZ2UiLCJNb2R1bGUiLCJtb2JpbGUiLCJicmVha3BvaW50cyIsInNtIiwic2xpZGVzIiwibWFwIiwiaXRlbSIsIlNsaWRlIiwic2xpZGVTaXplIiwibWF4V2lkdGgiLCJzbGlkZUdhcCIsImFsaWduIiwic2xpZGVzVG9TY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MedicareModule.tsx\n"));

/***/ })

});