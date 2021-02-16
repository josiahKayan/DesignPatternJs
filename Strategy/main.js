window.addEventListener('load',()=>{

    let sqlContext = new ContextStrategy( new SqlServerStrategy() );
    sqlContext.connect();

    let mongoContext = new ContextStrategy( new MongoDbStrategy() );
    mongoContext.connect();

});