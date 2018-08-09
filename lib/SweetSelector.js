/**
 * ID: SweetSelector.select('#eyed')
 * Class: SweetSelector.select('.klass')
 * Tag name: SweetSelector.select('a')
 */

class SweetSelector {
  static select(query) {
    let trigger = query.substring(0, 1)
    let element = query.substring(1)
    let output

    switch(trigger) {
      case '.':
        output = document.getElementsByClassName(element)
        break;
      case '#':
        output = document.getElementById(element)
        break;
      default:
        output = document.getElementsByTagName(query)
    }
    return output
  }
}