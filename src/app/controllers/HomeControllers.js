const BlogPost = require('../models/BlogPost')
const {mutipleMongooseToObject} = require('../../utils/mongoose')
class NewsController {
    index(req, res, next) {
        BlogPost.find({})
        .then(blogpost => {
            res.render('home', {blogpost: mutipleMongooseToObject(blogpost)})
        })
        .catch(next)
    }
}

module.exports = new NewsController();
