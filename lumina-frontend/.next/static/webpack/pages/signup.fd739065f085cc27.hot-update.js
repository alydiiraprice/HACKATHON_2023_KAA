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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignupForm: function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SignupForm() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\",\n        gender: \"\"\n    });\n    const handleChange = (name, value)=>{\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSignup = ()=>{\n        // Access the form data\n        console.log(\"Form Data:\", formData);\n    // Add validation and further processing logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        size: 520,\n        my: 40,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                align: \"center\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                withBorder: true,\n                shadow: \"md\",\n                p: 30,\n                mt: 30,\n                radius: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"First Name\",\n                                placeholder: \"Enter your first name\",\n                                name: \"firstName\",\n                                value: formData.firstName,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Last Name\",\n                                placeholder: \"Enter your last name\",\n                                name: \"lastName\",\n                                value: formData.lastName,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Username\",\n                                placeholder: \"Create your username\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: handleChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Email\",\n                                placeholder: \"Enter your email address\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: (value)=>handleChange(\"gender\", value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.PasswordInput, {\n                                label: \"Password\",\n                                placeholder: \"Enter your password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: (value)=>handleChange(\"gender\", value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.PasswordInput, {\n                                label: \"Confirm Password\",\n                                placeholder: \"Re-enter your password\",\n                                name: \"confirmPassword\",\n                                value: formData.confirmPassword,\n                                onChange: (value)=>handleChange(\"gender\", value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                label: \"Gender\",\n                                placeholder: \"Select your gender\",\n                                name: \"gender\",\n                                value: formData.gender,\n                                onChange: (value)=>handleChange(\"gender\", value),\n                                data: [\n                                    {\n                                        value: \"female\",\n                                        label: \"Female\"\n                                    },\n                                    {\n                                        value: \"male\",\n                                        label: \"Male\"\n                                    },\n                                    {\n                                        value: \"other\",\n                                        label: \"Other\"\n                                    }\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        fullWidth: true,\n                        mt: \"xl\",\n                        onClick: handleSignup,\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"dimmed\",\n                        size: \"sm\",\n                        align: \"center\",\n                        mt: 5,\n                        children: [\n                            \"Already have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"T00wjas5tVvm0Iy04nvew32NvP8=\");\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSUE7Z0NBQUNrQyxNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7R0F4R2dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLnRzeD9kYmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFRleHRJbnB1dCxcbiAgUGFzc3dvcmRJbnB1dCxcbiAgUGFwZXIsXG4gIFRpdGxlLFxuICBUZXh0LFxuICBDb250YWluZXIsXG4gIEJ1dHRvbixcbiAgU3RhY2ssXG59IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lnbnVwRm9ybSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgICBnZW5kZXI6ICcnLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWdudXAgPSAoKSA9PiB7XG4gICAgLy8gQWNjZXNzIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zb2xlLmxvZygnRm9ybSBEYXRhOicsIGZvcm1EYXRhKTtcblxuICAgIC8vIEFkZCB2YWxpZGF0aW9uIGFuZCBmdXJ0aGVyIHByb2Nlc3NpbmcgbG9naWMgaGVyZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzaXplPXs1MjB9IG15PXs0MH0+XG4gICAgICA8VGl0bGUgYWxpZ249XCJjZW50ZXJcIj5TaWduIFVwPC9UaXRsZT5cblxuICAgICAgPFBhcGVyIHdpdGhCb3JkZXIgc2hhZG93PVwibWRcIiBwPXszMH0gbXQ9ezMwfSByYWRpdXM9XCJtZFwiPlxuICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGxhc3QgbmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxhc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIHlvdXIgdXNlcm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdnZW5kZXInLCB2YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2dlbmRlcicsIHZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGFzc3dvcmRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmUtZW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2dlbmRlcicsIHZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2VsZWN0XG4gIGxhYmVsPVwiR2VuZGVyXCJcbiAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgeW91ciBnZW5kZXJcIlxuICBuYW1lPVwiZ2VuZGVyXCJcbiAgdmFsdWU9e2Zvcm1EYXRhLmdlbmRlcn1cbiAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdnZW5kZXInLCB2YWx1ZSl9XG4gIGRhdGE9e1tcbiAgICB7IHZhbHVlOiAnZmVtYWxlJywgbGFiZWw6ICdGZW1hbGUnIH0sXG4gICAgeyB2YWx1ZTogJ21hbGUnLCBsYWJlbDogJ01hbGUnIH0sXG4gICAgeyB2YWx1ZTogJ290aGVyJywgbGFiZWw6ICdPdGhlcicgfSxcbiAgXX1cbi8+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIG10PVwieGxcIiBvbkNsaWNrPXtoYW5kbGVTaWdudXB9PlxuICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwiZGltbWVkXCIgc2l6ZT1cInNtXCIgYWxpZ249XCJjZW50ZXJcIiBtdD17NX0+XG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/eycgJ31cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9QYXBlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGV4dElucHV0IiwiUGFzc3dvcmRJbnB1dCIsIlBhcGVyIiwiVGl0bGUiLCJUZXh0IiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiU3RhY2siLCJMaW5rIiwiU2VsZWN0IiwiU2lnbnVwRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImdlbmRlciIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVNpZ251cCIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwibXkiLCJhbGlnbiIsIndpdGhCb3JkZXIiLCJzaGFkb3ciLCJwIiwibXQiLCJyYWRpdXMiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImRhdGEiLCJmdWxsV2lkdGgiLCJvbkNsaWNrIiwiY29sb3IiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignupForm.tsx\n"));

/***/ })

});