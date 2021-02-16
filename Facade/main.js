window.addEventListener('load',()=>{

    let facade = new Facade();

    //Init
    facade.init();

    //Connect
    facade.connectSystem();

    //Fill
    facade.fillSystem();

    //Send
    facade.sendDocument();
    

});