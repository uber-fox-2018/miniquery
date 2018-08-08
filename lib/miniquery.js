var SweetSelector = {
    select: function (value) {
        let input = value.split('')
        if(input[0] === "#"){
            var eye = document.getElementById('eyed')
            console.log(eye)
        }
        else if(input[0] === "."){
            var klas = document.getElementsByClassName('klass')
            console.log(klas)
        }
        else {
            var element = document.getElementsByTagName('a')
            console.log(element)
        }
        
    }
}

var DOM = {
    hide: function(value){
        document.getElementsByClassName('klass')[0].style.display = "none"
    },
    show: function(value){
        document.getElementsByClassName('klass')[0].style.display = "block"
    },
    addClass: function(type, value){
            const div = document.getElementsByClassName('klass')[0]
            div.classList.add(value)
    },
    removeClass: function(type, value){
        const div = document.getElementsByClassName('klass')[0]
        div.classList.remove(value)
    }
}

var EventDispatcher = {
    on : function(type, action, callback){
        document.getElementsByClassName('klass')[0].addEventListener(action, function(){
            callback()
        })
    },
    trigger: function(type, action){
        document.getElementsByClassName('klass')[0].addEventListener(action, function(){
            console.log('awesome');
        })
    }
}

function reqListener(){
        console.log(this.responseText);
}

var AjaxWrapper = {
    request: (obj) => {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open(obj.type, obj.url);
        oReq.send(obj.success());
    }
}

SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')

DOM.hide('.klass')
DOM.show('.klass')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')

EventDispatcher.on('.klass', 'click', function(){
    console.log('awesome')
})
EventDispatcher.trigger('.klass', 'click')

AjaxWrapper.request({
    url: 'someurl',
    type: 'GET',
    success: () => {
        console.log('Berhasilll!')
    },
    fail: () => {
        console.log('Gagal!');
    }
})

function test () {
    console.log('hahaha')
}