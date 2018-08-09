/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select: (input) => {
    let prefix = input[0]
    let param = input.slice(1)
    if (prefix == '#') {
      return document.getElementById(param)
    } else if (prefix === '.') {
      let arrayOutput = []
      Array.from(document.getElementsByClassName(param)).forEach(output => {
        arrayOutput.push(output)
      })
      return arrayOutput
    } else {
      let arrayOutput = []
      Array.from(document.getElementsByTagName(input)).forEach(output => {
        arrayOutput.push(output)
      })
      return arrayOutput
    }
  }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
  hide: function (value) {
    return document.querySelectorAll(value).forEach(data=>{
      data.style.visibility = "hidden"})
  },
  show: function (value) {
    return document.querySelectorAll(value).forEach(data=>{
      data.style.visibility = "visible"})
  },
  addClass: function (value, additional) {
    return document.querySelectorAll(value).forEach(data=>{
      data.classList.add(additional)
    })
  },
  removeClass: function (value, additional) {
    return document.querySelectorAll(value).forEach(data=>{
      data.classList.remove(additional)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: function (value, event, callback) {
    document.querySelector(value).addEventListener(event, callback())
  },
  trigger: function (value,event){
    EventDispatcher.on(value,event,function(){
      console.log('awesome')
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const ajaxWrapper = (object) => {
  var request = new XMLHttpRequest()
  request.open(object.type, object.url, true)
  request.addEventListener('load', (object.success))
  request.addEventListener('error', (object.fail))
  request.send()
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
function miniquery(value) {
  this.hide = function () {
    DOM.hide(value);
  }

  this.show = function () {
    DOM.show(value);
  }
  this.addClass = function (additional) {
    DOM.addClass(value, additional);
  }

  this.removeClass = function (additional) {
    DOM.removeClass(value, additional);
  }

  this.on = function (event, callback) {
    EventDispatcher.on(value, event, callback());
  }

  this.trigger = function (event) {
    EventDispatcher.trigger(value, event, function () {
      console.log('awesome');
    })
  }

  this.ajax = function (obj) {
    AjaxWrapper.request(obj);
  }

  return this
}

const $ = miniquery;
