"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/SignupForm.tsx":
/*!***********************************!*\
  !*** ./components/SignupForm.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignupForm: function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SignupForm() {\n    _s();\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(-1);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (val)=>{\n        window.clearTimeout(timeoutRef.current);\n        setValue(val);\n        setData([]);\n        if (val.trim().length === 0 || val.includes(\"@\")) {\n            setLoading(false);\n        } else {\n            setLoading(true);\n            timeoutRef.current = window.setTimeout(()=>{\n                setLoading(false);\n                setData([\n                    \"gmail.com\",\n                    \"outlook.com\",\n                    \"yahoo.com\"\n                ].map((provider)=>\"\".concat(val, \"@\").concat(provider)));\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Autocomplete, {\n                value: value,\n                data: data,\n                onChange: handleChange,\n                rightSection: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Loader, {\n                    size: \"1rem\"\n                }, void 0, false, void 0, void 0) : null,\n                label: \"Email\",\n                placeholder: \"Enter your email address\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Autocomplete, {\n                value: value,\n                data: data,\n                onChange: handleChange,\n                rightSection: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Loader, {\n                    size: \"1rem\"\n                }, void 0, false, void 0, void 0) : null,\n                label: \"Email\",\n                placeholder: \"Enter your email address\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"51m6BfuXNIlj0uHuMgtd+M//BSQ=\");\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1k7QUFFOUMsU0FBU0k7O0lBQ2QsTUFBTUMsYUFBYUosNkNBQU1BLENBQVMsQ0FBQztJQUNuQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRTdDLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDcEJDLE9BQU9DLFlBQVksQ0FBQ1YsV0FBV1csT0FBTztRQUN0Q1QsU0FBU007UUFDVEYsUUFBUSxFQUFFO1FBRVYsSUFBSUUsSUFBSUksSUFBSSxHQUFHQyxNQUFNLEtBQUssS0FBS0wsSUFBSU0sUUFBUSxDQUFDLE1BQU07WUFDaERWLFdBQVc7UUFDYixPQUFPO1lBQ0xBLFdBQVc7WUFDWEosV0FBV1csT0FBTyxHQUFHRixPQUFPTSxVQUFVLENBQUM7Z0JBQ3JDWCxXQUFXO2dCQUNYRSxRQUFRO29CQUFDO29CQUFhO29CQUFlO2lCQUFZLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxXQUFhLEdBQVVBLE9BQVBULEtBQUksS0FBWSxPQUFUUztZQUNoRixHQUFHO1FBQ0w7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQzs7MEJBQ0csOERBQUNyQix1REFBWUE7Z0JBQ2ZJLE9BQU9BO2dCQUNQSSxNQUFNQTtnQkFDTmMsVUFBVVo7Z0JBQ1ZhLGNBQWNqQix3QkFBVSw4REFBQ0wsaURBQU1BO29CQUFDdUIsTUFBSztvREFBWTtnQkFDakRDLE9BQU07Z0JBQ05DLGFBQVk7Ozs7OzswQkFFZCw4REFBQzFCLHVEQUFZQTtnQkFDWEksT0FBT0E7Z0JBQ1BJLE1BQU1BO2dCQUNOYyxVQUFVWjtnQkFDVmEsY0FBY2pCLHdCQUFVLDhEQUFDTCxpREFBTUE7b0JBQUN1QixNQUFLO29EQUFZO2dCQUNqREMsT0FBTTtnQkFDTkMsYUFBWTs7Ozs7Ozs7Ozs7O0FBS2xCO0dBMUNnQnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbnVwRm9ybS50c3g/ZGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBMb2FkZXIgfSBmcm9tICdAbWFudGluZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ251cEZvcm0oKSB7XG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8bnVtYmVyPigtMSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIHNldFZhbHVlKHZhbCk7XG4gICAgc2V0RGF0YShbXSk7XG5cbiAgICBpZiAodmFsLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgdmFsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RGF0YShbJ2dtYWlsLmNvbScsICdvdXRsb29rLmNvbScsICd5YWhvby5jb20nXS5tYXAoKHByb3ZpZGVyKSA9PiBgJHt2YWx9QCR7cHJvdmlkZXJ9YCkpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgcmlnaHRTZWN0aW9uPXtsb2FkaW5nID8gPExvYWRlciBzaXplPVwiMXJlbVwiIC8+IDogbnVsbH1cbiAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgIC8+XG4gICAgPEF1dG9jb21wbGV0ZVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICByaWdodFNlY3Rpb249e2xvYWRpbmcgPyA8TG9hZGVyIHNpemU9XCIxcmVtXCIgLz4gOiBudWxsfVxuICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgLz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJBdXRvY29tcGxldGUiLCJMb2FkZXIiLCJTaWdudXBGb3JtIiwidGltZW91dFJlZiIsInZhbHVlIiwic2V0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwiY3VycmVudCIsInRyaW0iLCJsZW5ndGgiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJtYXAiLCJwcm92aWRlciIsImRpdiIsIm9uQ2hhbmdlIiwicmlnaHRTZWN0aW9uIiwic2l6ZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignupForm.tsx\n"));

/***/ })

});