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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignupForm: function() { return /* binding */ SignupForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SignupForm() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        confirmPassword: \"\",\n        gender: \"\"\n    });\n    const handleChange = (name, value)=>{\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSignup = ()=>{\n        // Access the form data\n        console.log(\"Form Data:\", formData);\n    // Add validation and further processing logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        size: 520,\n        my: 40,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                align: \"center\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                withBorder: true,\n                shadow: \"md\",\n                p: 30,\n                mt: 30,\n                radius: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"First Name\",\n                                placeholder: \"Enter your first name\",\n                                name: \"firstName\",\n                                value: formData.firstName,\n                                onChange: (event)=>handleChange(\"firstName\", event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Last Name\",\n                                placeholder: \"Enter your last name\",\n                                name: \"lastName\",\n                                value: formData.lastName,\n                                onChange: (event)=>handleChange(\"lastName\", event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Username\",\n                                placeholder: \"Create your username\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: (event)=>handleChange(\"username\", event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                label: \"Email\",\n                                placeholder: \"Enter your email address\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: (event)=>handleChange(\"email\", event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.PasswordInput, {\n                                label: \"Password\",\n                                placeholder: \"Enter your password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: (event)=>handleChange(\"password\", event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.PasswordInput, {\n                                label: \"Confirm Password\",\n                                placeholder: \"Re-enter your password\",\n                                name: \"confirmPassword\",\n                                value: formData.confirmPassword,\n                                onChange: (event)=>handleChange(\"confirmPassword\", event.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n                                label: \"Gender\",\n                                placeholder: \"Select your gender\",\n                                name: \"gender\",\n                                value: formData.gender,\n                                onChange: (value)=>handleChange(\"gender\", value),\n                                data: [\n                                    {\n                                        value: \"female\",\n                                        label: \"Female\"\n                                    },\n                                    {\n                                        value: \"male\",\n                                        label: \"Male\"\n                                    },\n                                    {\n                                        value: \"other\",\n                                        label: \"Other\"\n                                    }\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        fullWidth: true,\n                        mt: \"xl\",\n                        onClick: handleSignup,\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        color: \"dimmed\",\n                        size: \"sm\",\n                        align: \"center\",\n                        mt: 5,\n                        children: [\n                            \"Already have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Hackathon/HACKATHON_2023_KAA/lumina-frontend/components/SignupForm.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupForm, \"T00wjas5tVvm0Iy04nvew32NvP8=\");\n_c = SignupForm;\nvar _c;\n$RefreshReg$(_c, \"SignupForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dDQUFFWixPQUFPO3dDQUFTWSxPQUFPO29DQUFRO2lDQUNsQzs7Ozs7Ozs7Ozs7O2tDQUdMLDhEQUFDNUIsaURBQU1BO3dCQUFDbUMsU0FBUzt3QkFBQ1QsSUFBRzt3QkFBS1UsU0FBU25CO2tDQUFjOzs7Ozs7a0NBR2pELDhEQUFDbkIsK0NBQUlBO3dCQUFDdUMsT0FBTTt3QkFBU2pCLE1BQUs7d0JBQUtFLE9BQU07d0JBQVNJLElBQUk7OzRCQUFHOzRCQUMxQjswQ0FDekIsOERBQUN4QixrREFBSUE7Z0NBQUNvQyxNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7R0F4R2dCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLnRzeD9kYmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFRleHRJbnB1dCxcbiAgUGFzc3dvcmRJbnB1dCxcbiAgUGFwZXIsXG4gIFRpdGxlLFxuICBUZXh0LFxuICBDb250YWluZXIsXG4gIEJ1dHRvbixcbiAgU3RhY2ssXG59IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lnbnVwRm9ybSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgICBnZW5kZXI6ICcnLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWdudXAgPSAoKSA9PiB7XG4gICAgLy8gQWNjZXNzIHRoZSBmb3JtIGRhdGFcbiAgICBjb25zb2xlLmxvZygnRm9ybSBEYXRhOicsIGZvcm1EYXRhKTtcblxuICAgIC8vIEFkZCB2YWxpZGF0aW9uIGFuZCBmdXJ0aGVyIHByb2Nlc3NpbmcgbG9naWMgaGVyZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzaXplPXs1MjB9IG15PXs0MH0+XG4gICAgICA8VGl0bGUgYWxpZ249XCJjZW50ZXJcIj5TaWduIFVwPC9UaXRsZT5cblxuICAgICAgPFBhcGVyIHdpdGhCb3JkZXIgc2hhZG93PVwibWRcIiBwPXszMH0gbXQ9ezMwfSByYWRpdXM9XCJtZFwiPlxuICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnZmlyc3ROYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbGFzdCBuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoJ2xhc3ROYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIHlvdXIgdXNlcm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgndXNlcm5hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZSgnZW1haWwnLCBldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYXNzd29yZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlLWVudGVyIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKCdjb25maXJtUGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IHlvdXIgZ2VuZGVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmdlbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnZ2VuZGVyJywgdmFsdWUpfVxuICAgICAgICAgICAgZGF0YT17W1xuICAgICAgICAgICAgICB7IHZhbHVlOiAnZmVtYWxlJywgbGFiZWw6ICdGZW1hbGUnIH0sXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdtYWxlJywgbGFiZWw6ICdNYWxlJyB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAnb3RoZXInLCBsYWJlbDogJ090aGVyJyB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCBtdD1cInhsXCIgb25DbGljaz17aGFuZGxlU2lnbnVwfT5cbiAgICAgICAgICBTaWduIFVwXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImRpbW1lZFwiIHNpemU9XCJzbVwiIGFsaWduPVwiY2VudGVyXCIgbXQ9ezV9PlxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRleHRJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJQYXBlciIsIlRpdGxlIiwiVGV4dCIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIlN0YWNrIiwiTGluayIsIlNlbGVjdCIsIlNpZ251cEZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJnZW5kZXIiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTaWdudXAiLCJjb25zb2xlIiwibG9nIiwic2l6ZSIsIm15IiwiYWxpZ24iLCJ3aXRoQm9yZGVyIiwic2hhZG93IiwicCIsIm10IiwicmFkaXVzIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImRhdGEiLCJmdWxsV2lkdGgiLCJvbkNsaWNrIiwiY29sb3IiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignupForm.tsx\n"));

/***/ })

});