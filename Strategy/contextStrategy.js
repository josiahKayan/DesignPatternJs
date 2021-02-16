class ContextStrategy extends IDB{
    constructor(database){
        super();
        this._database = database;
    }

    connect(){
        return this._database.connect();
    }
    insert(item){
        return this._database.insert(item);
    }
    list(){
        return this._database.list();
        
    }
    delete(id){
        return this._database.delete(id);
    }
    update(id, item){
        return this._database.update(id, item);
    }
}