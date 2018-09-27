'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.postPOST = function postPOST (req, res, next) {
  var data = req.swagger.params['data'].value;
  Post.postPOST(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
