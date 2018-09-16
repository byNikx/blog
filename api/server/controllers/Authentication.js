'use strict';

var utils = require('../utils/writer.js');
var Authentication = require('../service/AuthenticationService');

module.exports.tokensigninPOST = function tokensigninPOST (req, res, next) {
  var token = req.swagger.params['token'].value;
  Authentication.tokensigninPOST(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
