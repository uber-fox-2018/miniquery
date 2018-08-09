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
        var selector = document.querySelector(input)
        console.log(selector);
        return selector   
    }

}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM {
     static hide(input) {
         let hide = document.querySelector(input)
                    .style
                    .visibility = "hidden";
                    return hide
     }

     static show(input) {
        let show = document.querySelector(input)
                   .style
                   .visibility = "visible";
                   return show
    }

    static addClass(firstInput, secondInput) {
        let addClass = document.querySelector(firstInput)
                       .classList
                       .add(secondInput);
                       return addClass
    }

    static removeClass(firstInput, secondInput) {
        let removeClass = document.querySelector(firstInput)
                          .classList
                          .remove(secondInput);
                          return removeClass
    }

 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {

     static on (input, action, callback) {
        let data = document.querySelectorAll(input)
        for (let i = 0; i < data.length; i++) {
            data[i].addEventListener(action, callback)
        }
     }

     static trigger(input, action) {
        let data = document.querySelectorAll(input)
        for (let i = 0; i < data.length; i++) {
            let event = new Event(action)
            data[i].dispatchEvent(event)
        }
    }

 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
