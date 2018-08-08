/*!
 * miniquery
 */

 const miniquery = function (input) {
     this.actions = SweetSelector.select(input);

     this.hide = function () {
         DOM.hide(input);
     }
     this.show = function () {
         DOM.show(input);
     }
     this.addClass = function(className) {
         DOM.addClass(currentClass, className);
     }
     this.removeClass = function (className) {
         DOM.removeClass(currentClass, className);
     }
     this.on = function(action, callback) {
         EventDispatcher.on(currentClass, action, callback);
     }
     this.trigger = function(action) {
         EventDispatcher.trigger(input, action);
     }
     this.ajax = function(inputObj) {
         AjaxWrapper.request(inputObj);
     }
     return this;
 }

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {

    static select(input) {
        let output = document.querySelector(input);
        return output;
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {

    static hide(input) {
        let data = document.querySelectorAll(input);
        data.forEach(singledata => {
            singledata.style.visibility = 'hidden';
        })
    }

    static show(input) {
        let data = document.querySelectorAll(input);
        data.forEach(singledata => {
            singledata.style.visibility = 'visible';
        })
    }

    static addClass(currentClass, addedClass) {
        let currentClassData = document.querySelectorAll(currentClass);
        currentClassData.forEach(data => {
            data.classList.add(addedClass);
        })
    }

    static removeClass(currentClass, addedClass) {
        let currentClassData = document.querySelectorAll(currentClass);
        currentClassData.forEach(data => {
            data.classList.remove(addedClass);
        })

    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher {

    static on(currentClass, action, callback) {
        document.querySelector(currentClass).addEventListener(action, callback())
    }

    static trigger(currentClass, action) {
        EventDispatcher.on(currentClass, action, () => {
            console.log('Awesome');
        })
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
    
    static request(input) {
        let req = new XMLHttpRequest();
        req.open(input.type, input.url, true);
        req.addEventListener('load', input.success);
        req.addEventListener('error', input.fail);
        req.send();
    }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
