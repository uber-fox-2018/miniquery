const SweetSelector = {
    select: (element) => {
        if (element[0] === '#') {
            return document.querySelector(element);
        } else {
            return document.querySelectorAll(element);
        }

    }
}

const DOM = {
    hide: (input) => {
        let elements = document.querySelectorAll(input)
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.visibility = "hidden";
        }
    },
    show: (input) => {
        let elements = document.querySelectorAll(input)
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.visibility = "visible";
        }
    },
    addClass: (element, nameClass) => {
        let elements = document.querySelectorAll(element)
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add(nameClass);
        }
    },
    removeClass: (element, nameClass) => {
        let elements = document.querySelectorAll(element)
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(nameClass);
        }
    }
}

const EventDispatcher = {
    on: (element, eventName, callback) => {
        let elements = document.querySelectorAll(element)
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener(eventName, callback)
        }
    },
    trigger: (element, eventName) => {
        let elements = document.querySelectorAll(element)
        for (let i = 0; i < elements.length; i++) {
            let event = new Event(eventName);
            elements[i].dispatchEvent(event)
        }
    }
}

const AjaxWrapper = {
    request: function (obj) {
        const objReq = new XMLHttpRequest()
        objReq.open(obj.type, obj.url)
        objReq.addEventListener("load", obj.success)
        objReq.addEventListener("load", obj.error)
        objReq.send()
    }
}

//release 4

const miniquery = function (input) {
    this.element = SweetSelector.select(input)
    console.log(this.element)
    this.hide = function () {
        DOM.hide(input)
    }
    this.show = function () {
        DOM.show(input)
    }
    this.addClass = function (className) {
        DOM.addClass(input, className)
    }
    this.removeClass = function (className) {
        DOM.removeClass(input, className)
    }
    this.on = function (event, callback) {
        EventDispatcher.on(input, event, callback)
    }
    this.trigger = function (event) {
        EventDispatcher.trigger(input, event)
    }
    this.ajax = function (obj) {
        AjaxWrapper.request(obj)
    }
    return this
}