/** @format */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    role: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default : "user" ,
        enum: ['user', 'admin'],
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
        
    },
} ,{
    versionKey: false,
    timestamps :{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

const User = mongoose.model('User', userSchema);

export default User;
