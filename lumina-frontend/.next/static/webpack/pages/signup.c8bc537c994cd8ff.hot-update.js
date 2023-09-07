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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignupForm: function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SignupForm() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\",\n        gender: \"\"\n    });\n    const handleChange = (name, value)=>{\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSignup = ()=>{\n        // Access the form data\n        console.log(\"Form Data:\", formData);\n    // Add validation and further processing logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        size: 520,\n        my: 40,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                align: \"center\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                withBorder: true,\n                shadow: \"md\",\n                p: 30,\n                mt: 30,\n                radius: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"First Name\",\n                                placeholder: \"Enter your first name\",\n                                name: \"firstName\",\n                                value: formData.firstName,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Last Name\",\n                                placeholder: \"Enter your last name\",\n                                name: \"lastName\",\n                                value: formData.lastName,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Username\",\n                                placeholder: \"Create your username\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Email\",\n                                placeholder: \"Enter your email address\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.PasswordInput, {\n                                label: \"Password\",\n                                placeholder: \"Enter your password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.PasswordInput, {\n                                label: \"Confirm Password\",\n                                placeholder: \"Re-enter your password\",\n                                name: \"confirmPassword\",\n                                value: formData.confirmPassword,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                label: \"Gender\",\n                                placeholder: \"Select your gender\",\n                                name: \"gender\",\n                                value: formData.gender,\n                                onChange: handleChange,\n                                data: [\n                                    {\n                                        value: \"female\",\n                                        label: \"Female\"\n                                    },\n                                    {\n                                        value: \"male\",\n                                        label: \"Male\"\n                                    },\n                                    {\n                                        value: \"other\",\n                                        label: \"Other\"\n                                    }\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        fullWidth: true,\n                        mt: \"xl\",\n                        onClick: handleSignup,\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"dimmed\",\n                        size: \"sm\",\n                        align: \"center\",\n                        mt: 5,\n                        children: [\n                            \"Already have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"T00wjas5tVvm0Iy04nvew32NvP8=\");\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4P2RiYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVGV4dElucHV0LFxuICBQYXNzd29yZElucHV0LFxuICBQYXBlcixcbiAgVGl0bGUsXG4gIFRleHQsXG4gIENvbnRhaW5lcixcbiAgQnV0dG9uLFxuICBTdGFjayxcbn0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWdudXBGb3JtKCkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICB1c2VybmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICAgIGdlbmRlcjogJycsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIHNldEZvcm1EYXRhKHtcbiAgICAuLi5mb3JtRGF0YSxcbiAgICBbbmFtZV06IHZhbHVlLFxuICB9KTtcbn07XG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKCkgPT4ge1xuICAgIC8vIEFjY2VzcyB0aGUgZm9ybSBkYXRhXG4gICAgY29uc29sZS5sb2coJ0Zvcm0gRGF0YTonLCBmb3JtRGF0YSk7XG5cbiAgICAvLyBBZGQgdmFsaWRhdGlvbiBhbmQgZnVydGhlciBwcm9jZXNzaW5nIGxvZ2ljIGhlcmVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc2l6ZT17NTIwfSBteT17NDB9PlxuICAgICAgPFRpdGxlIGFsaWduPVwiY2VudGVyXCI+U2lnbiBVcDwvVGl0bGU+XG5cbiAgICAgIDxQYXBlciB3aXRoQm9yZGVyIHNoYWRvdz1cIm1kXCIgcD17MzB9IG10PXszMH0gcmFkaXVzPVwibWRcIj5cbiAgICAgICAgPFN0YWNrPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZmlyc3QgbmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maXJzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBsYXN0IG5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSB5b3VyIHVzZXJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYXNzd29yZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZS1lbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJHZW5kZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgeW91ciBnZW5kZXJcIlxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZ2VuZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGRhdGE9e1tcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ZlbWFsZScsIGxhYmVsOiAnRmVtYWxlJyB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAnbWFsZScsIGxhYmVsOiAnTWFsZScgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ290aGVyJywgbGFiZWw6ICdPdGhlcicgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggbXQ9XCJ4bFwiIG9uQ2xpY2s9e2hhbmRsZVNpZ251cH0+XG4gICAgICAgICAgU2lnbiBVcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPFRleHQgY29sb3I9XCJkaW1tZWRcIiBzaXplPVwic21cIiBhbGlnbj1cImNlbnRlclwiIG10PXs1fT5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0SW5wdXQiLCJQYXNzd29yZElucHV0IiwiUGFwZXIiLCJUaXRsZSIsIlRleHQiLCJDb250YWluZXIiLCJCdXR0b24iLCJTdGFjayIsIkxpbmsiLCJTZWxlY3QiLCJTaWdudXBGb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZ2VuZGVyIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU2lnbnVwIiwiY29uc29sZSIsImxvZyIsInNpemUiLCJteSIsImFsaWduIiwid2l0aEJvcmRlciIsInNoYWRvdyIsInAiLCJtdCIsInJhZGl1cyIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiZGF0YSIsImZ1bGxXaWR0aCIsIm9uQ2xpY2siLCJjb2xvciIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignupForm.tsx\n"));

/***/ })

});