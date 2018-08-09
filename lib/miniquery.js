/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 class SweetSelector{
     static select(input){
         if(input[0] === '#'){
            return document.querySelector(input)
         }else{
            return document.querySelectorAll(input)
         }
     }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM{
     static hide(input){
        var result = SweetSelector.select(input)
        if (typeof result === String) {
            result.style.visibility = "hidden"
        } else {
           result.forEach(res => {
             res.style.visibility = "hidden"
           });
        }
     }

     static show(input){
        var result = SweetSelector.select(input)
        if (typeof result === String) {
            result.style.visibility = "visible"
        } else {
           result.forEach(res => {
             res.style.visibility = "visible"
           });
        }
     }

     static addClass(input, newClass){
         var result = SweetSelector.select(input)
         if (typeof result === String) {
            result.addClass(newClass)
         } else {  
            result.forEach(res => {
                res.classList.add(newClass)
                console.log(res);
                
              });
         }
     }

     static remove(input, pairClass){
        let result = SweetSelector.select(input)
        result.forEach(res =>{
            res.classList.remove(pairClass)
            console.log(res);
            
        })
     }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class evenDispatcher{
     static on(className, event, callback){
        let result = SweetSelector.select(className)
        result.forEach(res => {
            res.addEventListener(event, callback)
        });
     }

     static trigger(className, event){
        let result = SweetSelector.select(className)
        result.forEach(res => {
            let newEvent = new Event(event)
            res.dispatchEvent(newEvent)
        });
     }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
    static request(){
        var xhr = new XMLHttpRequest()
        xhr.open()
        xhr.send()
    }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
