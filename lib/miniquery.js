/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {

  static select(input){
    if(input[0] == '#'){
      return document.querySelector(input);
    }
    return document.querySelectorAll(input);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {

  static hide (selector){
    if(selector[0] == '#'){
      return SweetSelector.select(selector).style.visibility = 'hidden';
    }
    return SweetSelector.select(selector).forEach(selected=>{
      selected.style.visibility = 'hidden';
    })
  }

  static show (selector){
    if(selector[0] == '#'){
      return SweetSelector.select(selector).style.visibility = 'visible';
    }
    return SweetSelector.select(selector).forEach(selected=>{
      selected.style.visibility = 'visible';
    })
  }

  static addClass (selector, addedClass){
    if(selector[0] == '#'){
      return SweetSelector.select(selector).classList.add(addedClass)
    }
    return SweetSelector.select(selector).forEach(selected=>{
      selected.classList.add(addedClass)
    })
  }

  static removeClass (selector, removedClass){
    if(selector[0] == '#'){
      return SweetSelector.select(selector).classList.remove(removedClass)
    }
    return SweetSelector.select(selector).forEach(selected=>{
      selected.classList.remove(removedClass)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

class EventDispatcher{

  static on (selector, eventType, cb) {
    if(selector[0] == '#'){
      return SweetSelector.select(selector).addEventListener(eventType, cb());
    }
    return SweetSelector.select(selector).forEach(selected=>{
      selected.addEventListener(eventType, cb())
    })
  }

  static trigger (selector, eventType){
    if(selector[0] == '#'){
      let newEvent = new Event (eventType)
      return SweetSelector.select(selector).dispatchEvent(newEvent)
    }
    return SweetSelector.select(selector).forEach(selected=>{
      selected.dispatchEvent(newEvent)
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
