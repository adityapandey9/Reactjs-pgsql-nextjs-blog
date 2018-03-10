const Posts = require('../models').Posts;

/*
* Implementing the different database function used by the apis.
*/
module.exports = {
    create(req) {
    var d = new Date();
    let url = req.body.title.replace(/\s+/g, '-');
    url=url+'-'+d.getTime();
    return Posts
        .create({
          title: req.body.title,
          body: req.body.body,
          url: url
        });
    },
    list() {
        return Posts.all();
    },
    single(id) {
        return Posts.find({
            where: {
                url: id
            }
        });
    },
};