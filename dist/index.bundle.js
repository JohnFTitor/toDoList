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
    listDropZone.classList.add('task', 'card', 'dropparent');

    const listItem = document.createElement('div');
    listItem.classList.add('task', 'dropzone');
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

const addForm = document.querySelector('#addForm');
const clearButton = document.querySelector('#clear');

const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    tasks.display(task);
  });
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = addForm.querySelector('input');
  const inputValue = input.value;
  if (inputValue) {
    const task = tasks.addTask(inputValue);
    tasks.display(task);
    input.value = '';
  }
});

window.onload = () => {
  if (tasks.loadStorage()) {
    render();
  }
};

clearButton.addEventListener('click', () => {
  const completedList = (0,_completed_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(tasks.list);
  completedList.forEach((task) => {
    tasks.removeTask(task);
  });
});

const listContainer = document.querySelector('ul');
let dragged;
let currentListItem;

listContainer.addEventListener(
  'dragstart',
  (event) => {
    dragged = event.target.parentNode.parentNode; // Selects the card
    currentListItem = dragged;

    event.target.parentNode.parentNode.style.opacity = 0;
  },
  false,
);

listContainer.addEventListener('dragend', (event) => {
  event.target.parentNode.parentNode.style.opacity = 1;
});

listContainer.addEventListener(
  'dragover',
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);

listContainer.addEventListener(
  'dragenter',
  (event) => {
    if (event.target.className === 'task dropzone') {
      currentListItem = event.target;

      const temp = currentListItem.parentNode;
      dragged.parentNode.appendChild(currentListItem);
      dragged.parentNode.removeChild(dragged);
      temp.appendChild(dragged);
    }
  },
  false,
);

listContainer.addEventListener(
  'drop',
  (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.target.parentNode.parentNode.style.opacity = 1;
    const listItems = listContainer.querySelectorAll('li');
    let index = 1;
    const checked = [];

    listItems.forEach((item) => {
      const container = item.firstChild;
      container.setAttribute('id', `card-${index}`);
      index += 1;
      const description = container.querySelector('.description');
      for (let i = 0; i < tasks.list.length; i += 1) {
        const task = tasks.list[i];
        if (task.description === description.value) {
          task.index = +container.id.substr(container.id.length - 1);
          checked.push(tasks.list.splice(i, 1)[0]);
          break;
        }
      }
    });
    tasks.list = [...checked];
    tasks.list = tasks.list.sort((a, b) => a.index - b.index);
    tasks.saveStorage();
  },
  false,
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3N0eWxlcy9tYWluLnNjc3M/NGM1NSIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9UYXNrQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9UYXNrLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcbmltcG9ydCBEb3RzIGZyb20gJy4vaWNvbnMvZG90cy5zdmcnO1xuaW1wb3J0IERlbCBmcm9tICcuL2ljb25zL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IHsgc2V0U3RhdHVzIH0gZnJvbSAnLi9jb21wbGV0ZWQuanMnO1xuXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cblxuICBzYXZlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sbGVjdGlvbicsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICB9XG5cbiAgYWRkVGFzayhkZXNjcmlwdGlvbiwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIHRoaXMubGlzdC5sZW5ndGggKyAxLCBzdGF0dXMpO1xuICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2F2ZVN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIGxvYWRTdG9yYWdlKCkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xsZWN0aW9uJykpO1xuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBjb2xsZWN0aW9uLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5hZGRUYXNrKHRhc2suZGVzY3JpcHRpb24sIHRhc2suY29tcGxldGVkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZVRhc2soY3VycmVudFRhc2spIHtcbiAgICB0aGlzLmxpc3Quc3BsaWNlKGN1cnJlbnRUYXNrLmluZGV4IC0gMSwgMSk7XG4gICAgY29uc3QgZWxlbWVudCA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgI2NhcmQtJHtjdXJyZW50VGFzay5pbmRleH1gKTtcbiAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaW5kZXggLSBpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV4dFRhc2sgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCNjYXJkLSR7dGFzay5pbmRleH1gKTtcbiAgICAgICAgdGFzay5pbmRleCAtPSAxO1xuICAgICAgICBuZXh0VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmQtJHt0YXNrLmluZGV4fWApO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcbiAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gIH1cblxuICBkaXNwbGF5KHRhc2spIHtcbiAgICBjb25zdCBsaXN0RHJvcFpvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3REcm9wWm9uZS5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2NhcmQnLCAnZHJvcHBhcmVudCcpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2Ryb3B6b25lJyk7XG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkLSR7dGFzay5pbmRleH1gKTtcblxuICAgIGNvbnN0IGxpc3RBdHRyaWJ1dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBsaXN0QXR0cmlidXRlcy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBkZXNjcmlwdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgYDxsYWJlbCBjbGFzcz1cImJveFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiY2hlY2tcIiAgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICA8L2xhYmVsPmApO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3QgZG90cyA9IG5ldyBJbWFnZSgpO1xuICAgIGRvdHMuc3JjID0gRG90cztcbiAgICBkb3RzLmFsdCA9ICcnO1xuXG4gICAgY29uc3QgZHJhZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyYWdCdXR0b24uYXBwZW5kQ2hpbGQoZG90cyk7XG4gICAgZHJhZ0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRyYWdCdXR0b24pO1xuXG4gICAgY29uc3QgY2hlY2tCb3ggPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcbiAgICBjaGVja0JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG4gICAgc2V0U3RhdHVzKHRhc2ssIGNoZWNrQm94LCBkZXNjcmlwdGlvbik7XG5cbiAgICBsaXN0RHJvcFpvbmUuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdERyb3Bab25lKTtcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuc2F2ZVN0b3JhZ2UoKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMWYwY2MnO1xuICAgICAgZG90cy5zcmMgPSBEZWw7XG4gICAgfSk7XG5cbiAgICBkcmFnQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVRhc2sodGFzayk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICBkb3RzLnNyYyA9IERvdHM7XG4gICAgfSk7XG5cbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBzZXRTdGF0dXModGFzaywgY2hlY2tCb3gsIGRlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMuc2F2ZVN0b3JhZ2UoKTtcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgaW5kZXgsIHN0YXR1cykge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHN0YXR1cztcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cbn0iLCJmdW5jdGlvbiBzZXRTdGF0dXMoaXRlbSwgZWxlbWVudCwgaW5wdXQpIHtcbiAgaXRlbS5jb21wbGV0ZWQgPSBlbGVtZW50LmNoZWNrZWQ7XG4gIGlmIChpdGVtLmNvbXBsZXRlZCkge1xuICAgIGlucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJDb21wbGV0ZWQoY29sbGVjdGlvbikge1xuICBjb25zdCBuZXdDb2xsZWN0aW9uID0gY29sbGVjdGlvbi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkKTtcbiAgcmV0dXJuIG5ld0NvbGxlY3Rpb247XG59XG5cbmV4cG9ydCB7IHNldFN0YXR1cywgY2xlYXJDb21wbGV0ZWQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgVGFza0NvbGxlY3Rpb24gZnJvbSAnLi9UYXNrQ29sbGVjdGlvbi5qcyc7XG5pbXBvcnQgeyBjbGVhckNvbXBsZXRlZCB9IGZyb20gJy4vY29tcGxldGVkLmpzJztcblxuY29uc3QgdGFza3MgPSBuZXcgVGFza0NvbGxlY3Rpb24oKTtcblxuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRGb3JtJyk7XG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcicpO1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgdGFza3MubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza3MuZGlzcGxheSh0YXNrKTtcbiAgfSk7XG59O1xuXG5hZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5hZGRUYXNrKGlucHV0VmFsdWUpO1xuICAgIHRhc2tzLmRpc3BsYXkodGFzayk7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGlmICh0YXNrcy5sb2FkU3RvcmFnZSgpKSB7XG4gICAgcmVuZGVyKCk7XG4gIH1cbn07XG5cbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gY2xlYXJDb21wbGV0ZWQodGFza3MubGlzdCk7XG4gIGNvbXBsZXRlZExpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2tzLnJlbW92ZVRhc2sodGFzayk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xubGV0IGRyYWdnZWQ7XG5sZXQgY3VycmVudExpc3RJdGVtO1xuXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICdkcmFnc3RhcnQnLFxuICAoZXZlbnQpID0+IHtcbiAgICBkcmFnZ2VkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTsgLy8gU2VsZWN0cyB0aGUgY2FyZFxuICAgIGN1cnJlbnRMaXN0SXRlbSA9IGRyYWdnZWQ7XG5cbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICB9LFxuICBmYWxzZSxcbik7XG5cbmxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChldmVudCkgPT4ge1xuICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xufSk7XG5cbmxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2RyYWdvdmVyJyxcbiAgKGV2ZW50KSA9PiB7XG4gICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuICBmYWxzZSxcbik7XG5cbmxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2RyYWdlbnRlcicsXG4gIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAndGFzayBkcm9wem9uZScpIHtcbiAgICAgIGN1cnJlbnRMaXN0SXRlbSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgY29uc3QgdGVtcCA9IGN1cnJlbnRMaXN0SXRlbS5wYXJlbnROb2RlO1xuICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGN1cnJlbnRMaXN0SXRlbSk7XG4gICAgICBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XG4gICAgICB0ZW1wLmFwcGVuZENoaWxkKGRyYWdnZWQpO1xuICAgIH1cbiAgfSxcbiAgZmFsc2UsXG4pO1xuXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICdkcm9wJyxcbiAgKGV2ZW50KSA9PiB7XG4gICAgLy8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICBjb25zdCBjaGVja2VkID0gW107XG5cbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gaXRlbS5maXJzdENoaWxkO1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2FyZC0ke2luZGV4fWApO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5saXN0W2ldO1xuICAgICAgICBpZiAodGFzay5kZXNjcmlwdGlvbiA9PT0gZGVzY3JpcHRpb24udmFsdWUpIHtcbiAgICAgICAgICB0YXNrLmluZGV4ID0gK2NvbnRhaW5lci5pZC5zdWJzdHIoY29udGFpbmVyLmlkLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIGNoZWNrZWQucHVzaCh0YXNrcy5saXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0YXNrcy5saXN0ID0gWy4uLmNoZWNrZWRdO1xuICAgIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgICB0YXNrcy5zYXZlU3RvcmFnZSgpO1xuICB9LFxuICBmYWxzZSxcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=