class Facade{

    constructor(){
        this.sefazIntegration = new SefazIntegration();
        this.companyIntegration = new CompanyIntegration();
    }

    init(){
        console.log('Setting enviroments variables');
        this.companyIntegration.setupCompany();
        this.sefazIntegration.setupSefaz();
    }

    connectSystem(){
        console.log('Connecting in systems');
        this.companyIntegration.connectCompany();
        this.sefazIntegration.connectSefaz();
    }

    fillSystem(){
        console.log('filling Systems');
        this.companyIntegration.fillData();
        this.sefazIntegration.fillData();
    }

    sendDocument(){
        console.log('Sending documents');
        this.companyIntegration.sendDocument();
        this.sefazIntegration.sendDocument();
    }



}