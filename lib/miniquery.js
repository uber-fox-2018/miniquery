function miniquery(selector) {
  let elements
  let prefix = selector[0]

  switch(prefix) {
    case '#':
      elements = document.getElementById(selector.slice(1))
      break;
    case '.':
      elements = document.getElementsByClassName(selector.slice(1))
      break;
    default:
      elements = document.getElementsByTagName(selector)
  }

  elements.hide = function() {
    if (elements.length === undefined) {
      elements.style.display = "none"
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"
      }
    }
    return elements
  }

  elements.show = function() {
    if (elements.length === undefined) {
      elements.style.display = "block"
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block"
      }
    }
    return elements
  }

  elements.addClass = function(addedClass) {
    if (elements.length === undefined) {
      elements.classList.add(addedClass)
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(addedClass)
      }
    }
    return elements
  }

  elements.removeClass = function(addedClass) {
    if (elements.length === undefined) {
      elements.classList.remove(addedClass)
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(addedClass)
      }
    }
    return elements
  }

  elements.on = function(event, callback) {
    if (elements.length === undefined) {
      elements.addEventListener(event, callback)
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, callback)
      }
    }
  }

  elements.trigger = function(event) {
    let eventTrigger = new Event(event)
    if (elements.length === undefined) {
      elements.dispatchEvent(eventTrigger)
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].dispatchEvent(eventTrigger)
      }
    }
    return elements
  }

  elements.ajax = function(obj) {
    const { type, url, success, fail } = obj
    const xhr = new XMLHttpRequest()

    xhr.open(type, url)
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        success()
      } else {
        fail()
      }
    }
    
    xhr.send()
  }
 
  return elements
}

const $ = miniquery