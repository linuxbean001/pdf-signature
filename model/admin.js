const mongoose=require('mongoose');

var AddUserSchema=mongoose.Schema({
    name:{
        type:String,
         required:true
    },
    password:{
            type:String,
            required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    alternativeEmail:{
            type:String,
            required:true
    },
    phone:{
        type:Number,
        required:true
    },
    alternativePhone:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true
    },

    Address:{
        'street':{
           'type': {type:String},
           'value':[String]

        },
        'city':{
            'type':{type:String},
            'value':[String]
        },
        'state':{
            ' type':{type:String},
            'value':[String]
        },
        'zip':{
            'type':{type:Number},
            'value':[Number]
        }
    }

});
module.exports=mongoose.model('AddUser',AddUserSchema);