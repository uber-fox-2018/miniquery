/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
    select: (selector) => {
        
        if(selector[0] == "#") {
            selector = selector.substr(1)
            return document.getElementById(selector)
        } else if(selector[0] == ".") {
            selector = selector.substr(1)
            return document.getElementsByClassName(selector)
        } else {
            return document.getElementsByClassName(selector)
        } 
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
    hide: (selector) => {
        return SweetSelector.select(selector).style.visibility = "hidden";
    }, 
    show: (selector) => {
        return SweetSelector.select(selector).style.visibility = "visible";
    },

    addClass: (selector, name) => {
        return SweetSelector.select(selector).classList.add(name)
    },

    removeClass: (selector, name) => {
        return SweetSelector.select(selector).classList.remove(name)
    }
}


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


const EventDispatcher = {
    on: (selector, events, cb) => {
        SweetSelector.select(selector).forEach((el) => {
            el.addEventListener(events, cb, false)
        })
    },
    trigger: (selector2, events) => {
        let event = new Event(events)
        SweetSelector.selector(selector2).forEach((el) => {
            el.dispatchEvent(event)
        })
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
