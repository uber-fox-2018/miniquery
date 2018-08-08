const SweetSelector = {
    select: (selector) => {
        if(selector[0] == ".") {
            selector = selector.substr(1)
            return document.getElementsByClassName(selector)
        }
    }
}