const mongoose= require('mongoose');
    //define the mongoDB connection url
    const mongoUrl= 'mongodb://localhost:27017/hotel';

    //set mongo connrction
    mongoose.connect(mongoUrl, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

    //get defult connection
    const db =mongoose.connection;
    db.on('connected', ()=>
    {
       console.log('Server connected mongo'); 
    });
    db.on('error', (err)=>
        {
           console.log('Server connection mongo error',err); 
        });
        db.on('disconnected', ()=>
            {
               console.log('Server disconnected mongo'); 
            });
    module.exports = db;