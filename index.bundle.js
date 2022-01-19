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





// Define the parent of the tasks
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

    // Add each task based on the info retrieved by the localStorage
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

    // Get the div inside the card linked to the task
    const element = listContainer.querySelector(`#card-${currentTask.index}`);
    listContainer.removeChild(element.parentNode);
    let index = 1;
    this.list.forEach((task) => {
      // Updates all further indexes if necessary
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
    const listParent = document.createElement('li');
    listParent.classList.add('task', 'card', 'dropparent');

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

    const dragAndRemoveButton = document.createElement('button');
    dragAndRemoveButton.appendChild(dots);
    dragAndRemoveButton.setAttribute('draggable', true);
    listItem.appendChild(dragAndRemoveButton);

    const checkBox = listItem.querySelector('.check');
    checkBox.checked = task.completed;
    (0,_completed_js__WEBPACK_IMPORTED_MODULE_3__.setStatus)(task, checkBox, description);

    listParent.appendChild(listItem);
    listContainer.appendChild(listParent);

    description.addEventListener('change', (event) => {
      task.description = event.target.value;
      this.saveStorage();
    });

    description.addEventListener('click', () => {
      listItem.style.backgroundColor = '#f1f0cc';
      dots.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    });

    dragAndRemoveButton.addEventListener('mouseup', () => {
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



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const listContainer = document.querySelector('ul');
let dragged;
let currentListItem;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tasks) => {
  listContainer.addEventListener(
    'dragstart',
    (event) => {
      dragged = event.target.parentNode.parentNode; // Selects the task card
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
      const listParents = listContainer.querySelectorAll('li');
      let index = 1;
      const checked = [];

      listParents.forEach((listParent) => {
        const listItem = listParent.firstChild;
        listItem.setAttribute('id', `card-${index}`);
        index += 1;
        const description = listItem.querySelector('.description');
        for (let i = 0; i < tasks.list.length; i += 1) {
          const task = tasks.list[i];
          if (task.description === description.value) {
            task.index = +listItem.id.substr(listItem.id.length - 1);
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
});

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
/******/ 		__webpack_require__.p = "/toDoList/";
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
/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





const tasks = new _TaskCollection_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

const addTaskForm = document.querySelector('#addForm');
const clearButton = document.querySelector('#clear');

// Creates HTML for each task saved in the array
const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    tasks.display(task);
  });
};

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = addTaskForm.querySelector('input');

  // If the form is not empty, add a Task
  if (input.value) {
    const task = tasks.addTask(input.value);
    tasks.display(task);
    input.value = '';
  }
});

// Action on window load. Renders the localStoraged array.
window.onload = () => {
  if (tasks.loadStorage()) {
    render();
  }
};

// Removes all completed tasks
clearButton.addEventListener('click', () => {
  const completedList = (0,_completed_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(tasks.list);
  completedList.forEach((task) => {
    tasks.removeTask(task);
  });
});

// Define Drag And Drop Event listeners

(0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tasks);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQSwyREFBVyxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvc3R5bGVzL21haW4uc2Nzcz80YzU1Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL1Rhc2tDb2xsZWN0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY29tcGxldGVkLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2RyYWdBbmREcm9wLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xuaW1wb3J0IERvdHMgZnJvbSAnLi9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgRGVsZXRlSW1nIGZyb20gJy4vaWNvbnMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgeyBzZXRTdGF0dXMgfSBmcm9tICcuL2NvbXBsZXRlZC5qcyc7XG5cbi8vIERlZmluZSB0aGUgcGFyZW50IG9mIHRoZSB0YXNrc1xuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cblxuICBzYXZlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sbGVjdGlvbicsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICB9XG5cbiAgYWRkVGFzayhkZXNjcmlwdGlvbiwgc3RhdHVzID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIHRoaXMubGlzdC5sZW5ndGggKyAxLCBzdGF0dXMpO1xuICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMuc2F2ZVN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIGxvYWRTdG9yYWdlKCkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xsZWN0aW9uJykpO1xuXG4gICAgLy8gQWRkIGVhY2ggdGFzayBiYXNlZCBvbiB0aGUgaW5mbyByZXRyaWV2ZWQgYnkgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBjb2xsZWN0aW9uLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5hZGRUYXNrKHRhc2suZGVzY3JpcHRpb24sIHRhc2suY29tcGxldGVkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZVRhc2soY3VycmVudFRhc2spIHtcbiAgICB0aGlzLmxpc3Quc3BsaWNlKGN1cnJlbnRUYXNrLmluZGV4IC0gMSwgMSk7XG5cbiAgICAvLyBHZXQgdGhlIGRpdiBpbnNpZGUgdGhlIGNhcmQgbGlua2VkIHRvIHRoZSB0YXNrXG4gICAgY29uc3QgZWxlbWVudCA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgI2NhcmQtJHtjdXJyZW50VGFzay5pbmRleH1gKTtcbiAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICB0aGlzLmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgLy8gVXBkYXRlcyBhbGwgZnVydGhlciBpbmRleGVzIGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHRhc2suaW5kZXggLSBpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgbmV4dFRhc2sgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCNjYXJkLSR7dGFzay5pbmRleH1gKTtcbiAgICAgICAgdGFzay5pbmRleCAtPSAxO1xuICAgICAgICBuZXh0VGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmQtJHt0YXNrLmluZGV4fWApO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gMTtcbiAgICB9KTtcbiAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gIH1cblxuICBkaXNwbGF5KHRhc2spIHtcbiAgICBjb25zdCBsaXN0UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0UGFyZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnY2FyZCcsICdkcm9wcGFyZW50Jyk7XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snLCAnZHJvcHpvbmUnKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmQtJHt0YXNrLmluZGV4fWApO1xuXG4gICAgY29uc3QgbGlzdEF0dHJpYnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGxpc3RBdHRyaWJ1dGVzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGRlc2NyaXB0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBgPGxhYmVsIGNsYXNzPVwiYm94XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjaGVja1wiICB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgIDwvbGFiZWw+YCk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0QXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBkb3RzID0gbmV3IEltYWdlKCk7XG4gICAgZG90cy5zcmMgPSBEb3RzO1xuICAgIGRvdHMuYWx0ID0gJyc7XG5cbiAgICBjb25zdCBkcmFnQW5kUmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJhZ0FuZFJlbW92ZUJ1dHRvbi5hcHBlbmRDaGlsZChkb3RzKTtcbiAgICBkcmFnQW5kUmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZHJhZ0FuZFJlbW92ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBjaGVja0JveCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjaycpO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICBzZXRTdGF0dXModGFzaywgY2hlY2tCb3gsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxpc3RQYXJlbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFBhcmVudCk7XG5cbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjFmMGNjJztcbiAgICAgIGRvdHMuc3JjID0gRGVsZXRlSW1nO1xuICAgIH0pO1xuXG4gICAgZHJhZ0FuZFJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVUYXNrKHRhc2spO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgZG90cy5zcmMgPSBEb3RzO1xuICAgIH0pO1xuXG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0U3RhdHVzKHRhc2ssIGNoZWNrQm94LCBkZXNjcmlwdGlvbik7XG4gICAgICB0aGlzLnNhdmVTdG9yYWdlKCk7XG4gICAgfSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4LCBzdGF0dXMpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBzdGF0dXM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG59IiwiZnVuY3Rpb24gc2V0U3RhdHVzKGl0ZW0sIGVsZW1lbnQsIGlucHV0KSB7XG4gIGl0ZW0uY29tcGxldGVkID0gZWxlbWVudC5jaGVja2VkO1xuICBpZiAoaXRlbS5jb21wbGV0ZWQpIHtcbiAgICBpbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkKGNvbGxlY3Rpb24pIHtcbiAgY29uc3QgbmV3Q29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCk7XG4gIHJldHVybiBuZXdDb2xsZWN0aW9uO1xufVxuXG5leHBvcnQgeyBzZXRTdGF0dXMsIGNsZWFyQ29tcGxldGVkIH07IiwiY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5sZXQgZHJhZ2dlZDtcbmxldCBjdXJyZW50TGlzdEl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0ICh0YXNrcykgPT4ge1xuICBsaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2RyYWdzdGFydCcsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBkcmFnZ2VkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTsgLy8gU2VsZWN0cyB0aGUgdGFzayBjYXJkXG4gICAgICBjdXJyZW50TGlzdEl0ZW0gPSBkcmFnZ2VkO1xuXG4gICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH0sXG4gICAgZmFsc2UsXG4gICk7XG5cbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfSk7XG5cbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgICdkcmFnb3ZlcicsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuICAgIGZhbHNlLFxuICApO1xuXG4gIGxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnZHJhZ2VudGVyJyxcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAndGFzayBkcm9wem9uZScpIHtcbiAgICAgICAgY3VycmVudExpc3RJdGVtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBjdXJyZW50TGlzdEl0ZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGN1cnJlbnRMaXN0SXRlbSk7XG4gICAgICAgIGRyYWdnZWQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkKTtcbiAgICAgICAgdGVtcC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZhbHNlLFxuICApO1xuXG4gIGxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnZHJvcCcsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIGNvbnN0IGxpc3RQYXJlbnRzID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBbXTtcblxuICAgICAgbGlzdFBhcmVudHMuZm9yRWFjaCgobGlzdFBhcmVudCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGxpc3RQYXJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkLSR7aW5kZXh9YCk7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5saXN0W2ldO1xuICAgICAgICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uID09PSBkZXNjcmlwdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdGFzay5pbmRleCA9ICtsaXN0SXRlbS5pZC5zdWJzdHIobGlzdEl0ZW0uaWQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjaGVja2VkLnB1c2godGFza3MubGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRhc2tzLmxpc3QgPSBbLi4uY2hlY2tlZF07XG4gICAgICB0YXNrcy5saXN0ID0gdGFza3MubGlzdC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gICAgICB0YXNrcy5zYXZlU3RvcmFnZSgpO1xuICAgIH0sXG4gICAgZmFsc2UsXG4gICk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvdG9Eb0xpc3QvXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IFRhc2tDb2xsZWN0aW9uIGZyb20gJy4vVGFza0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgY2xlYXJDb21wbGV0ZWQgfSBmcm9tICcuL2NvbXBsZXRlZC5qcyc7XG5pbXBvcnQgZHJhZ0FuZERyb3AgZnJvbSAnLi9kcmFnQW5kRHJvcC5qcyc7XG5cbmNvbnN0IHRhc2tzID0gbmV3IFRhc2tDb2xsZWN0aW9uKCk7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEZvcm0nKTtcbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyJyk7XG5cbi8vIENyZWF0ZXMgSFRNTCBmb3IgZWFjaCB0YXNrIHNhdmVkIGluIHRoZSBhcnJheVxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICB0YXNrcy5saXN0ID0gdGFza3MubGlzdC5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIHRhc2tzLmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2tzLmRpc3BsYXkodGFzayk7XG4gIH0pO1xufTtcblxuYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gYWRkVGFza0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAvLyBJZiB0aGUgZm9ybSBpcyBub3QgZW1wdHksIGFkZCBhIFRhc2tcbiAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmFkZFRhc2soaW5wdXQudmFsdWUpO1xuICAgIHRhc2tzLmRpc3BsYXkodGFzayk7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbi8vIEFjdGlvbiBvbiB3aW5kb3cgbG9hZC4gUmVuZGVycyB0aGUgbG9jYWxTdG9yYWdlZCBhcnJheS5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGlmICh0YXNrcy5sb2FkU3RvcmFnZSgpKSB7XG4gICAgcmVuZGVyKCk7XG4gIH1cbn07XG5cbi8vIFJlbW92ZXMgYWxsIGNvbXBsZXRlZCB0YXNrc1xuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBjbGVhckNvbXBsZXRlZCh0YXNrcy5saXN0KTtcbiAgY29tcGxldGVkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza3MucmVtb3ZlVGFzayh0YXNrKTtcbiAgfSk7XG59KTtcblxuLy8gRGVmaW5lIERyYWcgQW5kIERyb3AgRXZlbnQgbGlzdGVuZXJzXG5cbmRyYWdBbmREcm9wKHRhc2tzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=