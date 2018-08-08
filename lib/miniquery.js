/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 class SweetSelector {
    static select(input) {
        return document.querySelector(input)
    }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
    static hide(input) {
        return document.querySelector(input).style.visibility="hidden"
    }

    static show(input) {
        return document.querySelector(input).style.visibility="visible"
    }

    static addClass(input1, input2) {
        return document.querySelector(input1).classList.add(input2)
    }

    static removeClass(input1, input2) {
        return document.querySelector(input1).classList.remove(input2)
    }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EvenDispatcher {
    
    static on(className, action, callback) {
        let element = document.querySelectorAll(className)
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(action, callback)
        }
    }

    static trigger(className, action) {
        let element = document.querySelectorAll(className)
        for (let i = 0; i < element.length; i++) {
            let event = new Event(action)
            element[i].dispatchEvent(event)
        }
    }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

//  class AjaxWrapper {
//     static request(obj) {
//         const objReq = new XML
//     }
//  }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
