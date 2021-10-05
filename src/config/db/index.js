const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/BLOG_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect!!!');
    } catch (error) {
        console.log('Disconnect!!!');
    }
}

module.exports = { connect };