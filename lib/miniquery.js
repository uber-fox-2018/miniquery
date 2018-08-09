/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
    static select(input) {
        let type = input[0]
        let new_input = ''

        for (let i = 1; i < input.length; i++) {
            new_input += input[i]
        }

        if (type === '#') {
            return document.getElementById(new_input);
        } else if (type === '.') {
            return document.querySelector(input);
        } else {
            return document.querySelector(input);
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM {
     static hide(input){
        let new_input = SweetSelector.select(input)

        return new_input.style.visibility = 'hidden'
     }

     static show(input){
        let new_input = SweetSelector.select(input)

        return new_input.style.visibility = 'visible'
     }

     static addClass(input, value){
         let new_input = SweetSelector.select(input)

         return new_input.classList.add(value)
     }

     static removeClass(input, value){
        let new_input = SweetSelector.select(input)

        return new_input.classList.remove(value)
     }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {
     static on(input,type,callback){
        let new_input = SweetSelector.select(input)

        return new_input.addEventListener(type, callback)

     }

     static trigger(input,type){
        let new_input = SweetSelector.select(input)
        // console.log(new_input);
        
        return new_input.addEventListener(type, function() {
            console.log('awesome');
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
