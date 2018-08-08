/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
    select: function (selector) {
        if(selector[0] = '#')
            return document.getElementById(selector.slice(1))
        else
            return document.querySelectorAll(selector.slice(1))
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
    hide: function (selector) {
        const elements = document.querySelectorAll(selector)
        for (e of elements) e.style.display = 'none'
    },
    show: function (selector) {
        const elements = document.querySelectorAll(selector)
        for (e of elements) e.style.display = 'block'
    },
    addClass: function (selector, className) {
        const elements = document.querySelectorAll(selector)
        for (e of elements) e.classList.add(className)
    },
    removeClass: function (selector, className) {
        const elements = document.querySelectorAll(selector)
        for (e of elements) e.classList.remove(className)
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
    on: function (selector, eventName, func) {
        const elements = document.querySelectorAll(selector)
        for (e of elements) e.addEventListener(eventName, func, false)
    },
    trigger: function (selector, eventName) {
        const event = new Event(eventName)
        e.dispatchEvent(event)
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
    request: function (obj) {
        let method = obj.type || 'GET'
        let url = obj.url
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    obj.success(this.responseText)
                } else {
                    obj.fail(this.responseText)
                }
            }
        };
        xhttp.open(method, url, true);
        xhttp.send();
    }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

const miniquery = (selector) => ({
    hide: () => {
        DOM.hide(selector)
        return miniquery(selector)
    },
    show: () => {
        DOM.show(selector)
        return miniquery(selector)
    },
    addClass: (className) => {
        DOM.addClass(selector, className)
        return miniquery(selector)
    },
    removeClass: (className) => {
        DOM.removeClass(selector, className)
        return miniquery(selector)
    },
    on: (eventName, func) => {
        EventDispatcher.on(selector, eventName, func)
        return miniquery(selector)
    },
    trigger: (eventName) => {
        EventDispatcher.trigger(selector, eventName)
        return miniquery(selector)
    },
    ajax: (param) => {
        AjaxWrapper.request(param)
        return miniquery(selector)
    }
})