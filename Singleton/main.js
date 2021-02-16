window.addEventListener('load',()=>{

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    // console.log(instance2.getTeste());
    console.log("Same instance? " + (instance1 === instance2)); // True

});