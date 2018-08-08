/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
    static select(value) {
        return document.querySelectorAll(value)
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
    static hide(value) {
        return document.querySelector(value).style.display= "none"
    }

    static show(value) {
        return document.querySelector(value).style.display= "block"
    }

    static addClass(class1, class2) {
        return document.querySelector(class1).classList.add(class2)
    }

    static removeClass(class1, class2) {
        return document.querySelector(class1).classList.remove(class2)
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
    static on(className, eventName, cb){
        const elem = SweetSelector.select(className)
            for(let i=0; i<elem.length ; i++){
                elem[i].addEventListener(eventName, cb)
            }
    }
        
    static trigger(className, actionName){
        const event = new Event(actionName)
        const elem = SweetSelector.select(className)
        for(let i=0; i<elem.length ; i++){
            elem[i].dispatchEvent(event)
        }
    }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 class AjaxWrapper {
    static request(oReq){
        const btn = document.querySelector('button');
        const dataDisplay = document.querySelector('#result');

        btn.addEventListener("click", function(){
        const XHR = new XMLHttpRequest();
        XHR.onreadystatechange = function(){
            if(XHR.readyState == 4 && XHR.status == 200){
                //For testing bitcoin api, pls uncomment and use the following 4 lines of code instead:
                // const data = JSON.parse(XHR.responseText);
                // const price = data.bpi.GBP.rate
                // dataDisplay.innerText = price;
                // dataDisplay.innerText = data
                dataDisplay.innerText = XHR.responseText
                oReq.success(XHR.responseText)
            }

            if(XHR.readyState == 4 && XHR.status !== 200){
                dataDisplay.innerText = "no data"
                oReq.fail()
            }
        }
        XHR.open(oReq.type,oReq.url);
        XHR.send();
        })
    }
 }

 /*
 * ----------------------------------------------------------------------------
 * miniquery
 * ----------------------------------------------------------------------------
 */
class Miniquery {
    constructor(object){
        this.object = object
    }

    hide(){
        DOM.hide(this.object)
    }

    show(){
        DOM.show(this.object)
    }

    addClass(className){
        DOM.addClass(this.object, className)
    }

    removeClass(className){
        DOM.removeClass(this.object, className)
    }

    on(eventName, cb){
        EventDispatcher.on(this.object, eventName, cb)
    }

    trigger(eventName){
        EventDispatcher.trigger(this.object, eventName)
    }

    ajax(oReq){
        AjaxWrapper.request(oReq)
    }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
