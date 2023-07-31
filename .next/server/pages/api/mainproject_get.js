"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mainproject_get";
exports.ids = ["pages/api/mainproject_get"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/lib/mongodb_connect.js":
/*!************************************!*\
  !*** ./src/lib/mongodb_connect.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectMongoDB\": () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    }\n    return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL21vbmdvZGJfY29ubmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDeEMsSUFBSUQsdUVBQThCLEtBQUssQ0FBQyxFQUFFO1FBQ3hDLE9BQU9BLG9FQUE2QixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU8sTUFBTUEsdURBQWdCLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvbGliL21vbmdvZGJfY29ubmVjdC5qcz84Yjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0TW9uZ29EQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/mongodb_connect.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/mainproject_get.js":
/*!******************************************!*\
  !*** ./src/pages/api/mainproject_get.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb_connect */ \"(api)/./src/lib/mongodb_connect.js\");\n\n// import main_project from \"../../model/schema5\";\nasync function handler(req, res) {\n    //   res.status(200).json({ name: \"John Doe\" });\n    if (req.method !== \"GET\") {\n        res.status(405).send({\n            msg: \"Only GET request are allowed!\"\n        });\n        return;\n    }\n    try {\n        await (0,_lib_mongodb_connect__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n        const tasks = await main_project.find();\n        const project_bahria = await main_project.find({\n            location: /Bahria Town/i,\n            property_city: /Lahore/i\n        });\n        const project_DHA = await main_project.find({\n            location: /DHA/i,\n            property_city: /Lahore/i\n        });\n        const project_JT = await main_project.find({\n            location: /Johar Town/i,\n            property_city: /Lahore/i\n        });\n        const project_gulberg = await main_project.find({\n            location: /Gulberg/i,\n            property_city: /Lahore/i\n        });\n        const project_mm = await main_project.find({\n            location: /M.M Alam/i,\n            property_city: /Lahore/i\n        });\n        const project_wt = await main_project.find({\n            location: /Wapda Town/i,\n            property_city: /Lahore/i\n        });\n        const data = {\n            tasks,\n            project_bahria,\n            project_DHA,\n            project_JT,\n            project_gulberg,\n            project_mm,\n            project_wt\n        };\n        res.status(200).send(data);\n    } catch (err) {\n        console.log(err);\n        res.status(400).send({\n            err,\n            msg: \"Something went wrong!\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL21haW5wcm9qZWN0X2dldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyRDtBQUMzRCxrREFBa0Q7QUFFbkMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxnREFBZ0Q7SUFFaEQsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEdBQUcsRUFBRSwrQkFBK0I7U0FBRSxDQUFDLENBQUM7UUFDL0QsT0FBTztJQUNULENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTVAsb0VBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU1RLEtBQUssR0FBRyxNQUFNQyxZQUFZLENBQUNDLElBQUksRUFBRTtRQUN2QyxNQUFNQyxjQUFjLEdBQUcsTUFBTUYsWUFBWSxDQUFDQyxJQUFJLENBQUM7WUFDN0NFLFFBQVEsZ0JBQWdCO1lBQ3hCQyxhQUFhLFdBQVc7U0FDekIsQ0FBQztRQUNGLE1BQU1DLFdBQVcsR0FBRyxNQUFNTCxZQUFZLENBQUNDLElBQUksQ0FBQztZQUMxQ0UsUUFBUSxRQUFRO1lBQ2hCQyxhQUFhLFdBQVc7U0FDekIsQ0FBQztRQUNGLE1BQU1FLFVBQVUsR0FBRyxNQUFNTixZQUFZLENBQUNDLElBQUksQ0FBQztZQUN6Q0UsUUFBUSxlQUFlO1lBQ3ZCQyxhQUFhLFdBQVc7U0FDekIsQ0FBQztRQUNGLE1BQU1HLGVBQWUsR0FBRyxNQUFNUCxZQUFZLENBQUNDLElBQUksQ0FBQztZQUM5Q0UsUUFBUSxZQUFZO1lBQ3BCQyxhQUFhLFdBQVc7U0FDekIsQ0FBQztRQUNGLE1BQU1JLFVBQVUsR0FBRyxNQUFNUixZQUFZLENBQUNDLElBQUksQ0FBQztZQUN6Q0UsUUFBUSxhQUFhO1lBQ3JCQyxhQUFhLFdBQVc7U0FDekIsQ0FBQztRQUNGLE1BQU1LLFVBQVUsR0FBRyxNQUFNVCxZQUFZLENBQUNDLElBQUksQ0FBQztZQUN6Q0UsUUFBUSxlQUFlO1lBQ3ZCQyxhQUFhLFdBQVc7U0FDekIsQ0FBQztRQUNGLE1BQU1NLElBQUksR0FBRztZQUNYWCxLQUFLO1lBQ0xHLGNBQWM7WUFDZEcsV0FBVztZQUNYQyxVQUFVO1lBQ1ZDLGVBQWU7WUFDZkMsVUFBVTtZQUNWQyxVQUFVO1NBQ1g7UUFDRGYsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2EsSUFBSSxDQUFDLENBQUM7SUFDN0IsRUFBRSxPQUFPQyxHQUFHLEVBQUU7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCakIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFYyxHQUFHO1lBQUViLEdBQUcsRUFBRSx1QkFBdUI7U0FBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kaG91c2UvLi9zcmMvcGFnZXMvYXBpL21haW5wcm9qZWN0X2dldC5qcz8zMzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RNb25nb0RCIH0gZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiX2Nvbm5lY3RcIjtcclxuLy8gaW1wb3J0IG1haW5fcHJvamVjdCBmcm9tIFwiLi4vLi4vbW9kZWwvc2NoZW1hNVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBcIkpvaG4gRG9lXCIgfSk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuc2VuZCh7IG1zZzogXCJPbmx5IEdFVCByZXF1ZXN0IGFyZSBhbGxvd2VkIVwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICBjb25zdCB0YXNrcyA9IGF3YWl0IG1haW5fcHJvamVjdC5maW5kKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0X2JhaHJpYSA9IGF3YWl0IG1haW5fcHJvamVjdC5maW5kKHtcclxuICAgICAgbG9jYXRpb246IC9CYWhyaWEgVG93bi9pLFxyXG4gICAgICBwcm9wZXJ0eV9jaXR5OiAvTGFob3JlL2ksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb2plY3RfREhBID0gYXdhaXQgbWFpbl9wcm9qZWN0LmZpbmQoe1xyXG4gICAgICBsb2NhdGlvbjogL0RIQS9pLFxyXG4gICAgICBwcm9wZXJ0eV9jaXR5OiAvTGFob3JlL2ksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb2plY3RfSlQgPSBhd2FpdCBtYWluX3Byb2plY3QuZmluZCh7XHJcbiAgICAgIGxvY2F0aW9uOiAvSm9oYXIgVG93bi9pLFxyXG4gICAgICBwcm9wZXJ0eV9jaXR5OiAvTGFob3JlL2ksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb2plY3RfZ3VsYmVyZyA9IGF3YWl0IG1haW5fcHJvamVjdC5maW5kKHtcclxuICAgICAgbG9jYXRpb246IC9HdWxiZXJnL2ksXHJcbiAgICAgIHByb3BlcnR5X2NpdHk6IC9MYWhvcmUvaSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcHJvamVjdF9tbSA9IGF3YWl0IG1haW5fcHJvamVjdC5maW5kKHtcclxuICAgICAgbG9jYXRpb246IC9NLk0gQWxhbS9pLFxyXG4gICAgICBwcm9wZXJ0eV9jaXR5OiAvTGFob3JlL2ksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb2plY3Rfd3QgPSBhd2FpdCBtYWluX3Byb2plY3QuZmluZCh7XHJcbiAgICAgIGxvY2F0aW9uOiAvV2FwZGEgVG93bi9pLFxyXG4gICAgICBwcm9wZXJ0eV9jaXR5OiAvTGFob3JlL2ksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHRhc2tzLFxyXG4gICAgICBwcm9qZWN0X2JhaHJpYSxcclxuICAgICAgcHJvamVjdF9ESEEsXHJcbiAgICAgIHByb2plY3RfSlQsXHJcbiAgICAgIHByb2plY3RfZ3VsYmVyZyxcclxuICAgICAgcHJvamVjdF9tbSxcclxuICAgICAgcHJvamVjdF93dCxcclxuICAgIH07XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IGVyciwgbXNnOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvREIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1zZyIsInRhc2tzIiwibWFpbl9wcm9qZWN0IiwiZmluZCIsInByb2plY3RfYmFocmlhIiwibG9jYXRpb24iLCJwcm9wZXJ0eV9jaXR5IiwicHJvamVjdF9ESEEiLCJwcm9qZWN0X0pUIiwicHJvamVjdF9ndWxiZXJnIiwicHJvamVjdF9tbSIsInByb2plY3Rfd3QiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/mainproject_get.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/mainproject_get.js"));
module.exports = __webpack_exports__;

})();