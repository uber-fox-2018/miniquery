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
    return document.querySelector(input);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {

  static hide (selector){
    return SweetSelector.select(selector).style.visibility = 'hidden';
  }

  static show (selector){
    return SweetSelector.select(selector).style.visibility = 'visible';
  }

  static addClass (selector, addedClass){
    return SweetSelector.select(selector).classList.add(addedClass)
  }

  static removeClass (selector, removedClass){
    return SweetSelector.select(selector).classList.remove(removedClass)
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


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
