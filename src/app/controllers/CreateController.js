const BlogPost = require('../models/BlogPost')
class CreateController {
    create(req, res) {
       res.render('create')
    }
}

module.exports = new CreateController();
