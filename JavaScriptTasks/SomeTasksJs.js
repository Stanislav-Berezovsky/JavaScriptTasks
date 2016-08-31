(function(window) {
    function JQuery(str) {
    }

    var elements;
    var setElements = function(str){
    	elements = document.querySelectorAll(str);
    }

    JQuery.prototype.addClass = function(str) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add(str);
        }
        return this;
    };

    JQuery.prototype.css = function(key, value) {
        for (var i = 0; i < elements.length; i++) {
            var arr = key.split("-");
            for (var j = 1; j < arr.length; j++) {
                arr[j] = arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
            }
            key = arr.join('');
            elements[i].style[key] = value;
        }
        return this;
    };

    var instance;

    window._ = function(str) {
        if (!instance){
            instance = new JQuery(str);
        }
        setElements(str);
        return instance;
    }

 

})(window);
