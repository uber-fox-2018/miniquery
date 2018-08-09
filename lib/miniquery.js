/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * data Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(input) {
    const select = document.querySelector(input)
    console.log(select)
    return select
  }
}
/*
* -----------------------------------------------------------------------------
* DOM Manipulators
* -----------------------------------------------------------------------------
*/
class DOM {
  static hide (input) {
    const hidden = document.querySelector(input)
    hidden.style.visibility = "hidden"
    return hidden
  }

  static show (input) {
    const show = document.querySelector(input)
    show.style.visibility = "visible"
    return show
  }
}
/*
* ----------------------------------------------------------------------------
* Event Dispatcher
* ----------------------------------------------------------------------------
*/