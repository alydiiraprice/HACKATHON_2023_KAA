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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FloatingLabelInput: function() { return /* binding */ FloatingLabelInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction EmailInput() {\n    _s();\n    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(-1);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (val)=>{\n        window.clearTimeout(timeoutRef.current);\n        setValue(val);\n        setData([]);\n        if (val.trim().length === 0 || val.includes(\"@\")) {\n            setLoading(false);\n        } else {\n            setLoading(true);\n            timeoutRef.current = window.setTimeout(()=>{\n                setLoading(false);\n                setData([\n                    \"gmail.com\",\n                    \"outlook.com\",\n                    \"yahoo.com\"\n                ].map((provider)=>\"\".concat(val, \"@\").concat(provider)));\n            }, 1000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Autocomplete, {\n        value: value,\n        data: data,\n        onChange: handleChange,\n        rightSection: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Loader, {\n            size: \"1rem\"\n        }, void 0, false, void 0, void 0) : null,\n        label: \"Email\",\n        placeholder: \"Enter your email address\",\n        required: true\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(EmailInput, \"51m6BfuXNIlj0uHuMgtd+M//BSQ=\");\n_c = EmailInput;\n\nfunction FloatingLabelInput() {\n    _s1();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.TextInput, {\n        label: \"First Name\",\n        placeholder: \"Enter your first name\",\n        required: true,\n        value: value,\n        onChange: (event)=>setValue(event.currentTarget.value)\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s1(FloatingLabelInput, \"A2PXPeq8TepW328gUMM4+o8Xryo=\");\n_c1 = FloatingLabelInput;\nvar _c, _c1;\n$RefreshReg$(_c, \"EmailInput\");\n$RefreshReg$(_c1, \"FloatingLabelInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1k7QUFFckQsU0FBU0k7O0lBQ1AsTUFBTUMsYUFBYUosNkNBQU1BLENBQVMsQ0FBQztJQUNuQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRTdDLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDcEJDLE9BQU9DLFlBQVksQ0FBQ1YsV0FBV1csT0FBTztRQUN0Q1QsU0FBU007UUFDVEYsUUFBUSxFQUFFO1FBRVYsSUFBSUUsSUFBSUksSUFBSSxHQUFHQyxNQUFNLEtBQUssS0FBS0wsSUFBSU0sUUFBUSxDQUFDLE1BQU07WUFDaERWLFdBQVc7UUFDYixPQUFPO1lBQ0xBLFdBQVc7WUFDWEosV0FBV1csT0FBTyxHQUFHRixPQUFPTSxVQUFVLENBQUM7Z0JBQ3JDWCxXQUFXO2dCQUNYRSxRQUFRO29CQUFDO29CQUFhO29CQUFlO2lCQUFZLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxXQUFhLEdBQVVBLE9BQVBULEtBQUksS0FBWSxPQUFUUztZQUNoRixHQUFHO1FBQ0w7SUFDRjtJQUNBLHFCQUNFLDhEQUFDcEIsdURBQVlBO1FBQ1hJLE9BQU9BO1FBQ1BJLE1BQU1BO1FBQ05hLFVBQVVYO1FBQ1ZZLGNBQWNoQix3QkFBVSw4REFBQ0wsaURBQU1BO1lBQUNzQixNQUFLOzRDQUFZO1FBQ2pEQyxPQUFNO1FBQ05DLGFBQVk7UUFDWkMsUUFBUTs7Ozs7O0FBR2Q7R0FoQ1N4QjtLQUFBQTtBQWtDb0Q7QUFHdEQsU0FBUzBCOztJQUNkLE1BQU0sQ0FBQ3hCLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMscUJBQ0UsOERBQUM2QixvREFBU0E7UUFDUkgsT0FBTTtRQUNOQyxhQUFZO1FBQ1pDLFFBQVE7UUFDUnRCLE9BQU9BO1FBQ1BpQixVQUFVLENBQUNRLFFBQVV4QixTQUFTd0IsTUFBTUMsYUFBYSxDQUFDMUIsS0FBSzs7Ozs7O0FBRzdEO0lBWmdCd0I7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLnRzeD9kYmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGUsIExvYWRlciB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuXG5mdW5jdGlvbiBFbWFpbElucHV0KCkge1xuICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmPG51bWJlcj4oLTEpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICBzZXRWYWx1ZSh2YWwpO1xuICAgIHNldERhdGEoW10pO1xuXG4gICAgaWYgKHZhbC50cmltKCkubGVuZ3RoID09PSAwIHx8IHZhbC5pbmNsdWRlcygnQCcpKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldERhdGEoWydnbWFpbC5jb20nLCAnb3V0bG9vay5jb20nLCAneWFob28uY29tJ10ubWFwKChwcm92aWRlcikgPT4gYCR7dmFsfUAke3Byb3ZpZGVyfWApKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8QXV0b2NvbXBsZXRlXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBkYXRhPXtkYXRhfVxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIHJpZ2h0U2VjdGlvbj17bG9hZGluZyA/IDxMb2FkZXIgc2l6ZT1cIjFyZW1cIiAvPiA6IG51bGx9XG4gICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgIHJlcXVpcmVkXG4gICAgLz5cbiAgKTtcbn1cblxuaW1wb3J0IHsgVGV4dElucHV0LCBjcmVhdGVTdHlsZXMsIHJlbSB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBGbG9hdGluZ0xhYmVsSW5wdXQoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHJldHVybiAoXG4gICAgPFRleHRJbnB1dFxuICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCJcbiAgICAgIHJlcXVpcmVkXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkF1dG9jb21wbGV0ZSIsIkxvYWRlciIsIkVtYWlsSW5wdXQiLCJ0aW1lb3V0UmVmIiwidmFsdWUiLCJzZXRWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVDaGFuZ2UiLCJ2YWwiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50IiwidHJpbSIsImxlbmd0aCIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsIm1hcCIsInByb3ZpZGVyIiwib25DaGFuZ2UiLCJyaWdodFNlY3Rpb24iLCJzaXplIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiVGV4dElucHV0IiwiRmxvYXRpbmdMYWJlbElucHV0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignupForm.tsx\n"));

/***/ })

});