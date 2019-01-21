import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    login: String,
    password: String,
    event: [{
        start: Number,
        duration: Number,
        title: String
    }]
});

export const User = mongoose.model('User', UserSchema);
