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
    const listContainer = document.querySelector('ul');
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
    const listContainer = document.querySelector('ul');

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
  const newCollection = collection.list.filter((item) => item.completed);
  newCollection.forEach((task) => {
    collection.removeTask(task);
  });
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
  (0,_completed_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(tasks);
});

// Define Drag And Drop Event listeners

(0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tasks);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYztBQUNoQixDQUFDOztBQUVEOztBQUVBLDJEQUFXLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9zdHlsZXMvbWFpbi5zY3NzPzRjNTUiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvVGFza0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2t0ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XG5pbXBvcnQgRG90cyBmcm9tICcuL2ljb25zL2RvdHMuc3ZnJztcbmltcG9ydCBEZWxldGVJbWcgZnJvbSAnLi9pY29ucy9kZWxldGUuc3ZnJztcbmltcG9ydCB7IHNldFN0YXR1cyB9IGZyb20gJy4vY29tcGxldGVkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbGxlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIHNhdmVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xsZWN0aW9uJywgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gIH1cblxuICBhZGRUYXNrKGRlc2NyaXB0aW9uLCBzdGF0dXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbiwgdGhpcy5saXN0Lmxlbmd0aCArIDEsIHN0YXR1cyk7XG4gICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgdGhpcy5zYXZlU3RvcmFnZSgpO1xuICAgIHJldHVybiB0YXNrO1xuICB9XG5cbiAgbG9hZFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbGxlY3Rpb24nKSk7XG5cbiAgICAvLyBBZGQgZWFjaCB0YXNrIGJhc2VkIG9uIHRoZSBpbmZvIHJldHJpZXZlZCBieSB0aGUgbG9jYWxTdG9yYWdlXG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIGNvbGxlY3Rpb24uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICB0aGlzLmFkZFRhc2sodGFzay5kZXNjcmlwdGlvbiwgdGFzay5jb21wbGV0ZWQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlVGFzayhjdXJyZW50VGFzaykge1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIHRoaXMubGlzdC5zcGxpY2UoY3VycmVudFRhc2suaW5kZXggLSAxLCAxKTtcblxuICAgIC8vIEdldCB0aGUgZGl2IGluc2lkZSB0aGUgY2FyZCBsaW5rZWQgdG8gdGhlIHRhc2tcbiAgICBjb25zdCBlbGVtZW50ID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjY2FyZC0ke2N1cnJlbnRUYXNrLmluZGV4fWApO1xuICAgIGxpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICBsZXQgaW5kZXggPSAxO1xuICAgIHRoaXMubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAvLyBVcGRhdGVzIGFsbCBmdXJ0aGVyIGluZGV4ZXMgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAodGFzay5pbmRleCAtIGluZGV4ID4gMCkge1xuICAgICAgICBjb25zdCBuZXh0VGFzayA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgI2NhcmQtJHt0YXNrLmluZGV4fWApO1xuICAgICAgICB0YXNrLmluZGV4IC09IDE7XG4gICAgICAgIG5leHRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2FyZC0ke3Rhc2suaW5kZXh9YCk7XG4gICAgICB9XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0pO1xuICAgIHRoaXMuc2F2ZVN0b3JhZ2UoKTtcbiAgfVxuXG4gIGRpc3BsYXkodGFzaykge1xuICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuXG4gICAgY29uc3QgbGlzdFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdFBhcmVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2NhcmQnLCAnZHJvcHBhcmVudCcpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJywgJ2Ryb3B6b25lJyk7XG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkLSR7dGFzay5pbmRleH1gKTtcblxuICAgIGNvbnN0IGxpc3RBdHRyaWJ1dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBsaXN0QXR0cmlidXRlcy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBkZXNjcmlwdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgYDxsYWJlbCBjbGFzcz1cImJveFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiY2hlY2tcIiAgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICA8L2xhYmVsPmApO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3QgZG90cyA9IG5ldyBJbWFnZSgpO1xuICAgIGRvdHMuc3JjID0gRG90cztcbiAgICBkb3RzLmFsdCA9ICcnO1xuXG4gICAgY29uc3QgZHJhZ0FuZFJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyYWdBbmRSZW1vdmVCdXR0b24uYXBwZW5kQ2hpbGQoZG90cyk7XG4gICAgZHJhZ0FuZFJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRyYWdBbmRSZW1vdmVCdXR0b24pO1xuXG4gICAgY29uc3QgY2hlY2tCb3ggPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcbiAgICBjaGVja0JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XG4gICAgc2V0U3RhdHVzKHRhc2ssIGNoZWNrQm94LCBkZXNjcmlwdGlvbik7XG5cbiAgICBsaXN0UGFyZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RQYXJlbnQpO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5zYXZlU3RvcmFnZSgpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YxZjBjYyc7XG4gICAgICBkb3RzLnNyYyA9IERlbGV0ZUltZztcbiAgICB9KTtcblxuICAgIGRyYWdBbmRSZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVGFzayh0YXNrKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgIGRvdHMuc3JjID0gRG90cztcbiAgICB9KTtcblxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFN0YXR1cyh0YXNrLCBjaGVja0JveCwgZGVzY3JpcHRpb24pO1xuICAgICAgdGhpcy5zYXZlU3RvcmFnZSgpO1xuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBpbmRleCwgc3RhdHVzKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gc3RhdHVzO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufSIsImZ1bmN0aW9uIHNldFN0YXR1cyhpdGVtLCBlbGVtZW50LCBpbnB1dCkge1xuICBpdGVtLmNvbXBsZXRlZCA9IGVsZW1lbnQuY2hlY2tlZDtcbiAgaWYgKGl0ZW0uY29tcGxldGVkKSB7XG4gICAgaW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckNvbXBsZXRlZChjb2xsZWN0aW9uKSB7XG4gIGNvbnN0IG5ld0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCk7XG4gIG5ld0NvbGxlY3Rpb24uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbGxlY3Rpb24ucmVtb3ZlVGFzayh0YXNrKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHNldFN0YXR1cywgY2xlYXJDb21wbGV0ZWQgfTsiLCJjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbmxldCBkcmFnZ2VkO1xubGV0IGN1cnJlbnRMaXN0SXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgKHRhc2tzKSA9PiB7XG4gIGxpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnZHJhZ3N0YXJ0JyxcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGRyYWdnZWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlOyAvLyBTZWxlY3RzIHRoZSB0YXNrIGNhcmRcbiAgICAgIGN1cnJlbnRMaXN0SXRlbSA9IGRyYWdnZWQ7XG5cbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfSxcbiAgICBmYWxzZSxcbiAgKTtcblxuICBsaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9KTtcblxuICBsaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2RyYWdvdmVyJyxcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG4gICAgZmFsc2UsXG4gICk7XG5cbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgICdkcmFnZW50ZXInLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICd0YXNrIGRyb3B6b25lJykge1xuICAgICAgICBjdXJyZW50TGlzdEl0ZW0gPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgY29uc3QgdGVtcCA9IGN1cnJlbnRMaXN0SXRlbS5wYXJlbnROb2RlO1xuICAgICAgICBkcmFnZ2VkLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY3VycmVudExpc3RJdGVtKTtcbiAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xuICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKGRyYWdnZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFsc2UsXG4gICk7XG5cbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgICdkcm9wJyxcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKG9wZW4gYXMgbGluayBmb3Igc29tZSBlbGVtZW50cylcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgY29uc3QgbGlzdFBhcmVudHMgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgICBsZXQgaW5kZXggPSAxO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IFtdO1xuXG4gICAgICBsaXN0UGFyZW50cy5mb3JFYWNoKChsaXN0UGFyZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gbGlzdFBhcmVudC5maXJzdENoaWxkO1xuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmQtJHtpbmRleH1gKTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmxpc3RbaV07XG4gICAgICAgICAgaWYgKHRhc2suZGVzY3JpcHRpb24gPT09IGRlc2NyaXB0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICB0YXNrLmluZGV4ID0gK2xpc3RJdGVtLmlkLnN1YnN0cihsaXN0SXRlbS5pZC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNoZWNrZWQucHVzaCh0YXNrcy5saXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGFza3MubGlzdCA9IFsuLi5jaGVja2VkXTtcbiAgICAgIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgICAgIHRhc2tzLnNhdmVTdG9yYWdlKCk7XG4gICAgfSxcbiAgICBmYWxzZSxcbiAgKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi90b0RvTGlzdC9cIjsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgVGFza0NvbGxlY3Rpb24gZnJvbSAnLi9UYXNrQ29sbGVjdGlvbi5qcyc7XG5pbXBvcnQgeyBjbGVhckNvbXBsZXRlZCB9IGZyb20gJy4vY29tcGxldGVkLmpzJztcbmltcG9ydCBkcmFnQW5kRHJvcCBmcm9tICcuL2RyYWdBbmREcm9wLmpzJztcblxuY29uc3QgdGFza3MgPSBuZXcgVGFza0NvbGxlY3Rpb24oKTtcblxuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRm9ybScpO1xuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXInKTtcblxuLy8gQ3JlYXRlcyBIVE1MIGZvciBlYWNoIHRhc2sgc2F2ZWQgaW4gdGhlIGFycmF5XG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIHRhc2tzLmxpc3QgPSB0YXNrcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgdGFza3MubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFza3MuZGlzcGxheSh0YXNrKTtcbiAgfSk7XG59O1xuXG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBhZGRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG4gIC8vIElmIHRoZSBmb3JtIGlzIG5vdCBlbXB0eSwgYWRkIGEgVGFza1xuICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICBjb25zdCB0YXNrID0gdGFza3MuYWRkVGFzayhpbnB1dC52YWx1ZSk7XG4gICAgdGFza3MuZGlzcGxheSh0YXNrKTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59KTtcblxuLy8gQWN0aW9uIG9uIHdpbmRvdyBsb2FkLiBSZW5kZXJzIHRoZSBsb2NhbFN0b3JhZ2VkIGFycmF5Llxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgaWYgKHRhc2tzLmxvYWRTdG9yYWdlKCkpIHtcbiAgICByZW5kZXIoKTtcbiAgfVxufTtcblxuLy8gUmVtb3ZlcyBhbGwgY29tcGxldGVkIHRhc2tzXG5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xlYXJDb21wbGV0ZWQodGFza3MpO1xufSk7XG5cbi8vIERlZmluZSBEcmFnIEFuZCBEcm9wIEV2ZW50IGxpc3RlbmVyc1xuXG5kcmFnQW5kRHJvcCh0YXNrcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9