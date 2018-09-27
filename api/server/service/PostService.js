'use strict';


/**
 * Create new post
 * Send POST request with payload to create new post
 *
 * data String  (optional)
 * no response value expected for this operation
 **/
exports.postPOST = function (data) {
  return new Promise(function (resolve, reject) {
    //    const a = JSON.parse(data);
    //    console.log(a);
    resolve({ data: data });
  });
}