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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignupForm: function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\nfunction SignupForm() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmailInput, {}, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstNameInput, {}, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = SignupForm;\nfunction EmailInput() {\n    _s();\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(-1);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (val)=>{\n        window.clearTimeout(timeoutRef.current);\n        setValue(val);\n        setData([]);\n        if (val.trim().length === 0 || val.includes(\"@\")) {\n            setLoading(false);\n        } else {\n            setLoading(true);\n            timeoutRef.current = window.setTimeout(()=>{\n                setLoading(false);\n                setData([\n                    \"gmail.com\",\n                    \"outlook.com\",\n                    \"yahoo.com\"\n                ].map((provider)=>\"\".concat(val, \"@\").concat(provider)));\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Autocomplete, {\n        value: value,\n        data: data,\n        onChange: handleChange,\n        rightSection: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Loader, {\n            size: \"1rem\"\n        }, void 0, false, void 0, void 0) : null,\n        label: \"Email\",\n        placeholder: \"Enter your email address\",\n        required: true\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(EmailInput, \"51m6BfuXNIlj0uHuMgtd+M//BSQ=\");\n_c1 = EmailInput;\nfunction FirstNameInput() {\n    _s1();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, {\n        label: \"First Name\",\n        placeholder: \"Enter your first name\",\n        required: true,\n        value: value,\n        onChange: (event)=>setValue(event.currentTarget.value)\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s1(FirstNameInput, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n_c2 = FirstNameInput;\nfunction LastNameInput() {\n    _s2();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, {\n        label: \"Last Name\",\n        placeholder: \"Enter your last name\",\n        required: true,\n        value: value,\n        onChange: (event)=>setValue(event.currentTarget.value)\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, this);\n}\n_s2(LastNameInput, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n_c3 = LastNameInput;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"SignupForm\");\n$RefreshReg$(_c1, \"EmailInput\");\n$RefreshReg$(_c2, \"FirstNameInput\");\n$RefreshReg$(_c3, \"LastNameInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3VCO0FBRXpELFNBQVNLO0lBQ1oscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7Ozs7Ozs7Ozs7QUFHYjtLQVBnQkg7QUFTaEIsU0FBU0U7O0lBQ1AsTUFBTUUsYUFBYVIsNkNBQU1BLENBQVMsQ0FBQztJQUNuQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRTdDLE1BQU1nQixlQUFlLENBQUNDO1FBQ3BCQyxPQUFPQyxZQUFZLENBQUNWLFdBQVdXLE9BQU87UUFDdENULFNBQVNNO1FBQ1RGLFFBQVEsRUFBRTtRQUVWLElBQUlFLElBQUlJLElBQUksR0FBR0MsTUFBTSxLQUFLLEtBQUtMLElBQUlNLFFBQVEsQ0FBQyxNQUFNO1lBQ2hEVixXQUFXO1FBQ2IsT0FBTztZQUNMQSxXQUFXO1lBQ1hKLFdBQVdXLE9BQU8sR0FBR0YsT0FBT00sVUFBVSxDQUFDO2dCQUNyQ1gsV0FBVztnQkFDWEUsUUFBUTtvQkFBQztvQkFBYTtvQkFBZTtpQkFBWSxDQUFDVSxHQUFHLENBQUMsQ0FBQ0MsV0FBYSxHQUFVQSxPQUFQVCxLQUFJLEtBQVksT0FBVFM7WUFDaEYsR0FBRztRQUNMO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ3ZCLHVEQUFZQTtRQUNYTyxPQUFPQTtRQUNQSSxNQUFNQTtRQUNOYSxVQUFVWDtRQUNWWSxjQUFjaEIsd0JBQVUsOERBQUNSLGlEQUFNQTtZQUFDeUIsTUFBSzs0Q0FBWTtRQUNqREMsT0FBTTtRQUNOQyxhQUFZO1FBQ1pDLFFBQVE7Ozs7OztBQUdkO0dBaENTekI7TUFBQUE7QUFrQ1QsU0FBU0M7O0lBQ1AsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5DLHFCQUNFLDhEQUFDRSxvREFBU0E7UUFDUjRCLE9BQU07UUFDTkMsYUFBWTtRQUNaQyxRQUFRO1FBQ1J0QixPQUFPQTtRQUNQaUIsVUFBVSxDQUFDTSxRQUFVdEIsU0FBU3NCLE1BQU1DLGFBQWEsQ0FBQ3hCLEtBQUs7Ozs7OztBQUc3RDtJQVpTRjtNQUFBQTtBQWNULFNBQVMyQjs7SUFDTCxNQUFNLENBQUN6QixPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5DLHFCQUNFLDhEQUFDRSxvREFBU0E7UUFDUjRCLE9BQU07UUFDTkMsYUFBWTtRQUNaQyxRQUFRO1FBQ1J0QixPQUFPQTtRQUNQaUIsVUFBVSxDQUFDTSxRQUFVdEIsU0FBU3NCLE1BQU1DLGFBQWEsQ0FBQ3hCLEtBQUs7Ozs7OztBQUcvRDtJQVpTeUI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLnRzeD9kYmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0SW5wdXQsIEF1dG9jb21wbGV0ZSwgTG9hZGVyIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWdudXBGb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RW1haWxJbnB1dCAvPlxuICAgICAgICAgICAgPEZpcnN0TmFtZUlucHV0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIEVtYWlsSW5wdXQoKSB7XG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWY8bnVtYmVyPigtMSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIHNldFZhbHVlKHZhbCk7XG4gICAgc2V0RGF0YShbXSk7XG5cbiAgICBpZiAodmFsLnRyaW0oKS5sZW5ndGggPT09IDAgfHwgdmFsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RGF0YShbJ2dtYWlsLmNvbScsICdvdXRsb29rLmNvbScsICd5YWhvby5jb20nXS5tYXAoKHByb3ZpZGVyKSA9PiBgJHt2YWx9QCR7cHJvdmlkZXJ9YCkpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxBdXRvY29tcGxldGVcbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgcmlnaHRTZWN0aW9uPXtsb2FkaW5nID8gPExvYWRlciBzaXplPVwiMXJlbVwiIC8+IDogbnVsbH1cbiAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgcmVxdWlyZWRcbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBGaXJzdE5hbWVJbnB1dCgpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dElucHV0XG4gICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWVcIlxuICAgICAgcmVxdWlyZWRcbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExhc3ROYW1lSW5wdXQoKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dElucHV0XG4gICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGxhc3QgbmFtZVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJUZXh0SW5wdXQiLCJBdXRvY29tcGxldGUiLCJMb2FkZXIiLCJTaWdudXBGb3JtIiwiZGl2IiwiRW1haWxJbnB1dCIsIkZpcnN0TmFtZUlucHV0IiwidGltZW91dFJlZiIsInZhbHVlIiwic2V0VmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwiY3VycmVudCIsInRyaW0iLCJsZW5ndGgiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJtYXAiLCJwcm92aWRlciIsIm9uQ2hhbmdlIiwicmlnaHRTZWN0aW9uIiwic2l6ZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkxhc3ROYW1lSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignupForm.tsx\n"));

/***/ })

});