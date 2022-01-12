/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6100604bf904f44fdaa.svg";

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskCollection)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




const listContainer = document.querySelector('ul');
class TaskCollection {
  
  constructor() {
    this.list = [];
  }

  addTask(description){
    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, this.list.length + 1);
    this.list.push(task);
    return task;
  }

  static removeTask(event) {
    listContainer.removeChild(event.currentTarget.parentNode);
  }

  static display(task) {
    const listItem = document.createElement('li');
    listItem.classList.add('task', 'card');

    const listAttributes = document.createElement('div');

    const description = document.createElement('input');
    description.value = task.description;
    description.setAttribute('type', 'text');
    description.classList.add('description');
    listAttributes.appendChild(description);

    description.insertAdjacentHTML('beforebegin', `<label class="box">
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>`);

    listItem.appendChild(listAttributes);
    
    const dots = new Image();
    dots.src = _icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__;
    dots.alt = '';

    const dragButton = document.createElement('button');
    dragButton.appendChild(dots);
    listItem.appendChild(dragButton);
    
    listContainer.appendChild(listItem);

    description.addEventListener('change', (event) => {
      task.description = event.target.value;
    })
    
    description.addEventListener('click', () => {
      listItem.style.backgroundColor = '#f1f0cc';
      dots.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
      dragButton.addEventListener('click', TaskCollection.removeTask);
    })

    description.addEventListener('focusout', () => { 
      listItem.style.backgroundColor = 'white';    
      dots.src = _icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__;
    })
  }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f0fd617814f3dfa6aed.svg";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const tasks = new _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

const addForm = document.querySelector('#addForm');

tasks.addTask('Something to Do'); 

const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__["default"].display(task);
  });
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = addForm.querySelector('input');
  const inputValue = input.value;
  if (inputValue){
    const task = tasks.addTask(inputValue);
    _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__["default"].display(task);
    input.value = '';
  }
})

window.onload = () => {
  render();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ087QUFDQzs7QUFFckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBSTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFHO0FBQ3BCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsaUJBQWlCLDRDQUFJO0FBQ3JCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7O0FDakVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7O0FDZjRCO0FBQ3FCOztBQUVqRCxrQkFBa0IsMERBQWM7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQXNCO0FBQzFCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3N0eWxlcy9tYWluLnNjc3M/NGM1NSIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9UYXNrQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9UYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xuaW1wb3J0IERvdHMgZnJvbSAnLi9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgRGVsIGZyb20gJy4vaWNvbnMvZGVsZXRlLnN2Zyc7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbGxlY3Rpb24ge1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cblxuICBhZGRUYXNrKGRlc2NyaXB0aW9uKXtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIHRoaXMubGlzdC5sZW5ndGggKyAxKTtcbiAgICB0aGlzLmxpc3QucHVzaCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUYXNrKGV2ZW50KSB7XG4gICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXkodGFzaykge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2NhcmQnKTtcblxuICAgIGNvbnN0IGxpc3RBdHRyaWJ1dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBsaXN0QXR0cmlidXRlcy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBkZXNjcmlwdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgYDxsYWJlbCBjbGFzcz1cImJveFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgPC9sYWJlbD5gKTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RBdHRyaWJ1dGVzKTtcbiAgICBcbiAgICBjb25zdCBkb3RzID0gbmV3IEltYWdlKCk7XG4gICAgZG90cy5zcmMgPSBEb3RzO1xuICAgIGRvdHMuYWx0ID0gJyc7XG5cbiAgICBjb25zdCBkcmFnQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJhZ0J1dHRvbi5hcHBlbmRDaGlsZChkb3RzKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkcmFnQnV0dG9uKTtcbiAgICBcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9KVxuICAgIFxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMWYwY2MnO1xuICAgICAgZG90cy5zcmMgPSBEZWw7XG4gICAgICBkcmFnQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVGFza0NvbGxlY3Rpb24ucmVtb3ZlVGFzayk7XG4gICAgfSlcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4geyBcbiAgICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7ICAgIFxuICAgICAgZG90cy5zcmMgPSBEb3RzO1xuICAgIH0pXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IFRhc2tDb2xsZWN0aW9uIGZyb20gJy4vVGFza0NvbGxlY3Rpb24uanMnO1xuXG5jb25zdCB0YXNrcyA9IG5ldyBUYXNrQ29sbGVjdGlvbigpO1xuXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEZvcm0nKTtcblxudGFza3MuYWRkVGFzaygnU29tZXRoaW5nIHRvIERvJyk7IFxuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgdGFza3MubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgVGFza0NvbGxlY3Rpb24uZGlzcGxheSh0YXNrKTtcbiAgfSk7XG59O1xuXG5hZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICBpZiAoaW5wdXRWYWx1ZSl7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmFkZFRhc2soaW5wdXRWYWx1ZSk7XG4gICAgVGFza0NvbGxlY3Rpb24uZGlzcGxheSh0YXNrKTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59KVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICByZW5kZXIoKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9