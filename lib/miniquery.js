/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
    static select(param) {
        if (param[0] === '#') {
            let x = document.querySelector(param)
            return x
        } else {
            let x = document.querySelectorAll(param)
            return x
        }
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
    static hide(param) {
        if (param[0] === '#') {
            let x = SweetSelector.select(param).style.visibility = "hidden"
            return x
        } else {
            return SweetSelector.select(param).forEach(element => {
                element.style.visibility = "hidden"
            })
        }
    }

    static show(param) {
        if (param[0] === '#') {
            let x = SweetSelector.select(param).style.visibility = "visible"
            return x
        } else {
            return SweetSelector.select(param).forEach(element => {
                element.style.visibility = "visible"
            })
        }
    }

    static addClass(param1, param2) {
        if (param1[0] === '#') {
            let x = SweetSelector.select(param1).classList.add(param2)
            return x
        } else {
            return SweetSelector.select(param1).forEach(element => {
                element.classList.add(param2)
            })
        }
    }

    static removeClass(param1, param2) {
        if (param1[0] === '#') {
            let x = SweetSelector.select(param1).classList.remove(param2)
            return x
        } else {
            return SweetSelector.select(param1).forEach(element => {
                element.classList.remove(param2)
            })
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
    static on(param1, param2, cb) {
        if (param1[0] === '#') {
            let x = SweetSelector.select(param1).addEventListener(param2, cb)
            return x
        } else {
            return SweetSelector.select(param1).forEach(element => {
                element.addEventListener(param2, cb)
            })
        }
    }

    static trigger(param1, param2) {
        let event = new Event(param2)
        if (param1[0] === '#') {
            let x = SweetSelector.select(param1).dispatchEvent(event)
            return x
        } else {
            return SweetSelector.select(param1).forEach(element => {
                element.dispatchEvent(event)
            })
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
    static request(obj) {
        let method = obj.type || "GET"
        let url = obj.url
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                obj.success = this.responseText
            }
        }
        xhttp.open(method, url, true)
        xhttp.send();
    }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */


