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
    const checked = [];

    listItems.forEach((item) => {
      const container = item.firstChild;
      container.setAttribute('id', `card-${index}`);
      index += 1;
      const description = container.querySelector('.description');
      for (let i = 0; i < tasks.list.length; i += 1) {
        const task = tasks.list[i];
        if(task.description === description.value){
          task.index = +container.id.substr(container.id.length - 1);
          checked.push(tasks.list.splice(i,1)[0]);
          break;
        } 
      }
    })
    tasks.list = [...checked];
    tasks.list = tasks.list.sort((a, b) => a.index - b.index);
    tasks.saveStorage();
  },
  false
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvc3R5bGVzL21haW4uc2Nzcz80YzU1Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL1Rhc2tDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY29tcGxldGVkLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xuaW1wb3J0IERvdHMgZnJvbSAnLi9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgRGVsIGZyb20gJy4vaWNvbnMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgeyBzZXRTdGF0dXMgfSBmcm9tICcuL2NvbXBsZXRlZC5qcyc7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIHNhdmVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xsZWN0aW9uJywgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgfVxuXG4gIGFkZFRhc2soZGVzY3JpcHRpb24sIHN0YXR1cyA9IGZhbHNlKSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLCB0aGlzLmxpc3QubGVuZ3RoICsgMSwgc3RhdHVzKTtcbiAgICB0aGlzLmxpc3QucHVzaCh0YXNrKTtcbiAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cblxuICBsb2FkU3RvcmFnZSgpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sbGVjdGlvbicpKTtcbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgY29sbGVjdGlvbi5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkVGFzayh0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmNvbXBsZXRlZCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW1vdmVUYXNrKGN1cnJlbnRUYXNrKSB7XG4gICAgdGhpcy5saXN0LnNwbGljZShjdXJyZW50VGFzay5pbmRleCAtIDEsIDEpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCNjYXJkLSR7Y3VycmVudFRhc2suaW5kZXh9YCk7XG4gICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgIGxldCBpbmRleCA9IDE7XG4gICAgdGhpcy5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmluZGV4IC0gaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5leHRUYXNrID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjY2FyZC0ke3Rhc2suaW5kZXh9YCk7XG4gICAgICAgIHRhc2suaW5kZXggLT0gMTtcbiAgICAgICAgbmV4dFRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkLSR7dGFzay5pbmRleH1gKTtcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSk7XG4gICAgdGhpcy5zYXZlU3RvcmFnZSgpO1xuICB9XG5cbiAgZGlzcGxheSh0YXNrKSB7XG4gICAgY29uc3QgbGlzdERyb3Bab25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0RHJvcFpvbmUuY2xhc3NMaXN0LmFkZCgndGFzaycsICdjYXJkJywgJ2Ryb3B6b25lJyk7XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmQtJHt0YXNrLmluZGV4fWApO1xuXG4gICAgY29uc3QgbGlzdEF0dHJpYnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGxpc3RBdHRyaWJ1dGVzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGRlc2NyaXB0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBgPGxhYmVsIGNsYXNzPVwiYm94XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjaGVja1wiICB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgIDwvbGFiZWw+YCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0QXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBkb3RzID0gbmV3IEltYWdlKCk7XG4gICAgZG90cy5zcmMgPSBEb3RzO1xuICAgIGRvdHMuYWx0ID0gJyc7XG5cbiAgICBjb25zdCBkcmFnQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJhZ0J1dHRvbi5hcHBlbmRDaGlsZChkb3RzKTtcbiAgICBkcmFnQnV0dG9uLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZHJhZ0J1dHRvbik7XG5cbiAgICBjb25zdCBjaGVja0JveCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjaycpO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICBzZXRTdGF0dXModGFzaywgY2hlY2tCb3gsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxpc3REcm9wWm9uZS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RHJvcFpvbmUpO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5zYXZlU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YxZjBjYyc7XG4gICAgICBkb3RzLnNyYyA9IERlbDtcbiAgICB9KTtcblxuICAgIGRyYWdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVGFzayh0YXNrKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgIGRvdHMuc3JjID0gRG90cztcbiAgICB9KTtcblxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFN0YXR1cyh0YXNrLCBjaGVja0JveCwgZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy5zYXZlU3RvcmFnZSgpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBpbmRleCwgc3RhdHVzKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gc3RhdHVzO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufSIsImZ1bmN0aW9uIHNldFN0YXR1cyhpdGVtLCBlbGVtZW50LCBpbnB1dCkge1xuICBpdGVtLmNvbXBsZXRlZCA9IGVsZW1lbnQuY2hlY2tlZDtcbiAgaWYgKGl0ZW0uY29tcGxldGVkKSB7XG4gICAgaW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckNvbXBsZXRlZChjb2xsZWN0aW9uKSB7XG4gIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQpO1xuICByZXR1cm4gbmV3Q29sbGVjdGlvbjtcbn1cblxuZXhwb3J0IHsgc2V0U3RhdHVzLCBjbGVhckNvbXBsZXRlZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IFRhc2tDb2xsZWN0aW9uIGZyb20gXCIuL1Rhc2tDb2xsZWN0aW9uLmpzXCI7XG5pbXBvcnQgeyBjbGVhckNvbXBsZXRlZCB9IGZyb20gXCIuL2NvbXBsZXRlZC5qc1wiO1xuXG5jb25zdCB0YXNrcyA9IG5ldyBUYXNrQ29sbGVjdGlvbigpO1xuXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRGb3JtXCIpO1xuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyXCIpO1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgdGFza3MubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza3MuZGlzcGxheSh0YXNrKTtcbiAgfSk7XG59O1xuXG5hZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICBjb25zdCB0YXNrID0gdGFza3MuYWRkVGFzayhpbnB1dFZhbHVlKTtcbiAgICB0YXNrcy5kaXNwbGF5KHRhc2spO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGlmICh0YXNrcy5sb2FkU3RvcmFnZSgpKSB7XG4gICAgcmVuZGVyKCk7XG4gIH1cbn07XG5cbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBjbGVhckNvbXBsZXRlZCh0YXNrcy5saXN0KTtcbiAgY29tcGxldGVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza3MucmVtb3ZlVGFzayh0YXNrKTtcbiAgfSk7XG59KTtcblxuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5sZXQgZHJhZ2dlZDtcbmxldCBjdXJyZW50TGlzdEl0ZW07XG5cbmxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJkcmFnc3RhcnRcIixcbiAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZHJhZ2dlZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7IC8vU2VsZWN0cyB0aGUgY2FyZFxuICAgIGN1cnJlbnRMaXN0SXRlbSA9IGRyYWdnZWQ7XG5cbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICB9LFxuICBmYWxzZVxuKTtcblxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbn0pO1xuXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiZHJhZ292ZXJcIixcbiAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuICBmYWxzZVxuKTtcblxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImRyYWdlbnRlclwiLFxuICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkRJVlwiKSB7XG4gICAgICBjdXJyZW50TGlzdEl0ZW0gPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIGxldCB0ZW1wID0gY3VycmVudExpc3RJdGVtLnBhcmVudE5vZGU7XG4gICAgICBkcmFnZ2VkLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY3VycmVudExpc3RJdGVtKTtcbiAgICAgIGRyYWdnZWQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkKTtcbiAgICAgIHRlbXAuYXBwZW5kQ2hpbGQoZHJhZ2dlZCk7XG4gICAgfVxuICB9LFxuICBmYWxzZVxuKTtcblxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImRyb3BcIixcbiAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICBjb25zdCBjaGVja2VkID0gW107XG5cbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gaXRlbS5maXJzdENoaWxkO1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2FyZC0ke2luZGV4fWApO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5saXN0W2ldO1xuICAgICAgICBpZih0YXNrLmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbi52YWx1ZSl7XG4gICAgICAgICAgdGFzay5pbmRleCA9ICtjb250YWluZXIuaWQuc3Vic3RyKGNvbnRhaW5lci5pZC5sZW5ndGggLSAxKTtcbiAgICAgICAgICBjaGVja2VkLnB1c2godGFza3MubGlzdC5zcGxpY2UoaSwxKVswXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfSlcbiAgICB0YXNrcy5saXN0ID0gWy4uLmNoZWNrZWRdO1xuICAgIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgICB0YXNrcy5zYXZlU3RvcmFnZSgpO1xuICB9LFxuICBmYWxzZVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==