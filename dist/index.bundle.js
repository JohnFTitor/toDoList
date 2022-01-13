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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskCollection)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);





const listContainer = document.querySelector('ul');
class TaskCollection {
  constructor() {
    this.list = [];
  }

  saveStorage() {
    localStorage.setItem('collection', JSON.stringify(this.list));
    console.log(this.list);
  }

  addTask(description, status = false) {
    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, this.list.length + 1, status);
    this.list.push(task);
    this.saveStorage();
    return task;
  }

  loadStorage() {
    const collection = JSON.parse(localStorage.getItem('collection'));
    if (collection) {
      collection.forEach((task) => {
        this.addTask(task.description, task.completed);
      });
      return true;
    }
    return false;
  }

  removeTask(currentTask) {
    this.list.splice(currentTask.index - 1, 1);
    const element = listContainer.querySelector(`#card-${currentTask.index}`);
    listContainer.removeChild(element.parentNode);
    let index = 1;
    this.list.forEach((task) => {
      if (task.index - index > 0) {
        const nextTask = listContainer.querySelector(`#card-${task.index}`);
        task.index -= 1;
        nextTask.setAttribute('id', `card-${task.index}`);
      }
      index += 1;
    });
    this.saveStorage();
  }

  display(task) {
    const listDropZone = document.createElement('li');
    listDropZone.classList.add('task', 'card', 'dropzone');

    const listItem = document.createElement('div');
    listItem.classList.add('task');
    listItem.setAttribute('id', `card-${task.index}`);

    const listAttributes = document.createElement('div');

    const description = document.createElement('input');
    description.value = task.description;
    description.setAttribute('type', 'text');
    description.classList.add('description');
    listAttributes.appendChild(description);

    description.insertAdjacentHTML('beforebegin', `<label class="box">
      <input class="check"  type="checkbox">
      <span class="checkmark"></span>
    </label>`);

    listItem.appendChild(listAttributes);

    const dots = new Image();
    dots.src = _icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__;
    dots.alt = '';

    const dragButton = document.createElement('button');
    dragButton.appendChild(dots);
    dragButton.setAttribute('draggable', true);
    listItem.appendChild(dragButton);

    const checkBox = listItem.querySelector('.check');
    checkBox.checked = task.completed;
    (0,_completed_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(task, checkBox, description);

    listDropZone.appendChild(listItem);
    listContainer.appendChild(listDropZone);

    description.addEventListener('change', (event) => {
      task.description = event.target.value;
      this.saveStorage();
    });

    description.addEventListener('click', () => {
      listItem.style.backgroundColor = '#f1f0cc';
      dots.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    });

    dragButton.addEventListener('mouseup', () => {
      this.removeTask(task);
    });

    description.addEventListener('focusout', () => {
      listItem.style.backgroundColor = 'white';
      dots.src = _icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__;
    });

    checkBox.addEventListener('change', () => {
      (0,_completed_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(task, checkBox, description);
      this.saveStorage();
    });
  }
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(description, index, status) {
    this.description = description;
    this.completed = status;
    this.index = index;
  }
}

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6100604bf904f44fdaa.svg";

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f0fd617814f3dfa6aed.svg";

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStatus": () => (/* binding */ setStatus),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted)
/* harmony export */ });
function setStatus(item, element, input) {
  item.completed = element.checked;
  if (item.completed) {
    input.style.textDecoration = 'line-through';
  } else {
    input.style.textDecoration = 'none';
  }
}

function clearCompleted(collection) {
  const newCollection = collection.filter((item) => item.completed);
  return newCollection;
}



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
/* harmony import */ var _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const tasks = new _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

const addForm = document.querySelector("#addForm");
const clearButton = document.querySelector("#clear");

const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    tasks.display(task);
  });
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = addForm.querySelector("input");
  const inputValue = input.value;
  if (inputValue) {
    const task = tasks.addTask(inputValue);
    tasks.display(task);
    input.value = "";
  }
});

window.onload = () => {
  if (tasks.loadStorage()) {
    render();
  }
};

clearButton.addEventListener("click", () => {
  const completedList = (0,_completed_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(tasks.list);
  completedList.forEach((task) => {
    tasks.removeTask(task);
  });
});

const listContainer = document.querySelector('ul');
let dragged;
let currentListItem;

listContainer.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target.parentNode.parentNode; //Selects the card
    currentListItem = dragged;

    event.target.parentNode.parentNode.style.opacity = 0;
  },
  false
);

listContainer.addEventListener("dragend", (event) => {
  event.target.parentNode.parentNode.style.opacity = 1;
});

listContainer.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

listContainer.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.nodeName === "DIV") {
      currentListItem = event.target;

      let temp = currentListItem.parentNode;
      dragged.parentNode.appendChild(currentListItem);
      dragged.parentNode.removeChild(dragged);
      temp.appendChild(dragged);
    }
  },
  false
);

listContainer.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.target.parentNode.parentNode.style.opacity = 1;
    const listItems = listContainer.querySelectorAll('li');
    let index = 1;
    listItems.forEach((item) => {
      const container = item.firstChild;
      container.setAttribute('id', `card-${index}`);
      index += 1;

      const description = container.querySelector('.description');
      tasks.list.forEach((task) => {
        if(task.description === description.value){
          task.index = +container.id.substr(container.id.length - 1);
        } 
      })

    })
    tasks.list = tasks.list.sort((a, b) => a.index - b.index);
    tasks.saveStorage();
  },
  false
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPOztBQUVQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9zdHlsZXMvbWFpbi5zY3NzPzRjNTUiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvVGFza0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQgRG90cyBmcm9tICcuL2ljb25zL2RvdHMuc3ZnJztcbmltcG9ydCBEZWwgZnJvbSAnLi9pY29ucy9kZWxldGUuc3ZnJztcbmltcG9ydCB7IHNldFN0YXR1cyB9IGZyb20gJy4vY29tcGxldGVkLmpzJztcblxuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ29sbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICB9XG5cbiAgc2F2ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbGxlY3Rpb24nLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xuICB9XG5cbiAgYWRkVGFzayhkZXNjcmlwdGlvbiwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIHRoaXMubGlzdC5sZW5ndGggKyAxLCBzdGF0dXMpO1xuICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2F2ZVN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIGxvYWRTdG9yYWdlKCkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xsZWN0aW9uJykpO1xuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBjb2xsZWN0aW9uLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5hZGRUYXNrKHRhc2suZGVzY3JpcHRpb24sIHRhc2suY29tcGxldGVkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZVRhc2soY3VycmVudFRhc2spIHtcbiAgICB0aGlzLmxpc3Quc3BsaWNlKGN1cnJlbnRUYXNrLmluZGV4IC0gMSwgMSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgI2NhcmQtJHtjdXJyZW50VGFzay5pbmRleH1gKTtcbiAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaW5kZXggLSBpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV4dFRhc2sgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCNjYXJkLSR7dGFzay5pbmRleH1gKTtcbiAgICAgICAgdGFzay5pbmRleCAtPSAxO1xuICAgICAgICBuZXh0VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmQtJHt0YXNrLmluZGV4fWApO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcbiAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gIH1cblxuICBkaXNwbGF5KHRhc2spIHtcbiAgICBjb25zdCBsaXN0RHJvcFpvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3REcm9wWm9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2NhcmQnLCAnZHJvcHpvbmUnKTtcblxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2FyZC0ke3Rhc2suaW5kZXh9YCk7XG5cbiAgICBjb25zdCBsaXN0QXR0cmlidXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbGlzdEF0dHJpYnV0ZXMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgZGVzY3JpcHRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGA8bGFiZWwgY2xhc3M9XCJib3hcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNoZWNrXCIgIHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgPC9sYWJlbD5gKTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RBdHRyaWJ1dGVzKTtcblxuICAgIGNvbnN0IGRvdHMgPSBuZXcgSW1hZ2UoKTtcbiAgICBkb3RzLnNyYyA9IERvdHM7XG4gICAgZG90cy5hbHQgPSAnJztcblxuICAgIGNvbnN0IGRyYWdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkcmFnQnV0dG9uLmFwcGVuZENoaWxkKGRvdHMpO1xuICAgIGRyYWdCdXR0b24uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkcmFnQnV0dG9uKTtcblxuICAgIGNvbnN0IGNoZWNrQm94ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrJyk7XG4gICAgY2hlY2tCb3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuICAgIHNldFN0YXR1cyh0YXNrLCBjaGVja0JveCwgZGVzY3JpcHRpb24pO1xuXG4gICAgbGlzdERyb3Bab25lLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3REcm9wWm9uZSk7XG5cbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjFmMGNjJztcbiAgICAgIGRvdHMuc3JjID0gRGVsO1xuICAgIH0pO1xuXG4gICAgZHJhZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgZG90cy5zcmMgPSBEb3RzO1xuICAgIH0pO1xuXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0U3RhdHVzKHRhc2ssIGNoZWNrQm94LCBkZXNjcmlwdGlvbik7XG4gICAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4LCBzdGF0dXMpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBzdGF0dXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59IiwiZnVuY3Rpb24gc2V0U3RhdHVzKGl0ZW0sIGVsZW1lbnQsIGlucHV0KSB7XG4gIGl0ZW0uY29tcGxldGVkID0gZWxlbWVudC5jaGVja2VkO1xuICBpZiAoaXRlbS5jb21wbGV0ZWQpIHtcbiAgICBpbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkKGNvbGxlY3Rpb24pIHtcbiAgY29uc3QgbmV3Q29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCk7XG4gIHJldHVybiBuZXdDb2xsZWN0aW9uO1xufVxuXG5leHBvcnQgeyBzZXRTdGF0dXMsIGNsZWFyQ29tcGxldGVkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5pbXBvcnQgVGFza0NvbGxlY3Rpb24gZnJvbSBcIi4vVGFza0NvbGxlY3Rpb24uanNcIjtcbmltcG9ydCB7IGNsZWFyQ29tcGxldGVkIH0gZnJvbSBcIi4vY29tcGxldGVkLmpzXCI7XG5cbmNvbnN0IHRhc2tzID0gbmV3IFRhc2tDb2xsZWN0aW9uKCk7XG5cbmNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEZvcm1cIik7XG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXJcIik7XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgdGFza3MubGlzdCA9IHRhc2tzLmxpc3Quc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICB0YXNrcy5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrcy5kaXNwbGF5KHRhc2spO1xuICB9KTtcbn07XG5cbmFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5hZGRUYXNrKGlucHV0VmFsdWUpO1xuICAgIHRhc2tzLmRpc3BsYXkodGFzayk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgaWYgKHRhc2tzLmxvYWRTdG9yYWdlKCkpIHtcbiAgICByZW5kZXIoKTtcbiAgfVxufTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgY29tcGxldGVkTGlzdCA9IGNsZWFyQ29tcGxldGVkKHRhc2tzLmxpc3QpO1xuICBjb21wbGV0ZWRMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrcy5yZW1vdmVUYXNrKHRhc2spO1xuICB9KTtcbn0pO1xuXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbmxldCBkcmFnZ2VkO1xubGV0IGN1cnJlbnRMaXN0SXRlbTtcblxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImRyYWdzdGFydFwiLFxuICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBkcmFnZ2VkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTsgLy9TZWxlY3RzIHRoZSBjYXJkXG4gICAgY3VycmVudExpc3RJdGVtID0gZHJhZ2dlZDtcblxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gIH0sXG4gIGZhbHNlXG4pO1xuXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChldmVudCkgPT4ge1xuICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufSk7XG5cbmxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJkcmFnb3ZlclwiLFxuICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG4gIGZhbHNlXG4pO1xuXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiZHJhZ2VudGVyXCIsXG4gIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiRElWXCIpIHtcbiAgICAgIGN1cnJlbnRMaXN0SXRlbSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgbGV0IHRlbXAgPSBjdXJyZW50TGlzdEl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgIGRyYWdnZWQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjdXJyZW50TGlzdEl0ZW0pO1xuICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xuICAgICAgdGVtcC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcbiAgICB9XG4gIH0sXG4gIGZhbHNlXG4pO1xuXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiZHJvcFwiLFxuICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBsZXQgaW5kZXggPSAxO1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBpdGVtLmZpcnN0Q2hpbGQ7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkLSR7aW5kZXh9YCk7XG4gICAgICBpbmRleCArPSAxO1xuXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbiAgICAgIHRhc2tzLmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZih0YXNrLmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbi52YWx1ZSl7XG4gICAgICAgICAgdGFzay5pbmRleCA9ICtjb250YWluZXIuaWQuc3Vic3RyKGNvbnRhaW5lci5pZC5sZW5ndGggLSAxKTtcbiAgICAgICAgfSBcbiAgICAgIH0pXG5cbiAgICB9KVxuICAgIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgICB0YXNrcy5zYXZlU3RvcmFnZSgpO1xuICB9LFxuICBmYWxzZVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==