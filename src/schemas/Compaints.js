/** @format */

import mongoose from 'mongoose';

const complainSchema = new mongoose.Schema({
    image: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    user_chatId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    }
} ,{
    versionKey: false,
    timestamps :{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

const Complain = mongoose.model('Complain', complainSchema);

export default Complain;
