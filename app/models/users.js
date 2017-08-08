const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        min: 4
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
});

//// middleware
//
// TBD
//

// create the model
const userModel = mongoose.model('User', userSchema);

// export the model
module.exports = userModel;

