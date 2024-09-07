const mongoose = require("mongoose");
personSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        },
        age:{
            type:Number,
            required:true
        },
        work:{
            type:String,
            enum: ['cheif', 'manager', 'weter' ],
            required:true
        },
        mobile:{
            type:String,
            required:true
            
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        address:{
            type:String
        },
        salary:{
            type:Number,
            required:true
        }

    });
    //Create model for person
    const Person = mongoose.model('person', personSchema);
    module.exports = Person;