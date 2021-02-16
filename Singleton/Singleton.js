var Singleton = 

(function () {
    var instance;
    
    function createInstance() {
        var object = {title: "I am object"};
        return object;
    };
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

})();

