'use strict';

const authImplementation = require('../../implementation/authentication.implementation');

/**
 * 
 * 
 *
 * token String 
 * no response value expected for this operation
 **/
exports.tokensigninPOST = function(token) {
    return new Promise(function(resolve, reject) {
        authImplementation.verify(token).then(info => {
            const user = {
                id: info.sub,
                name: info.name,
                firstName: info.given_name,
                lastName: info.lastName,
                email: info.email,
                emailVerified: info.email_verified,
                avatar: info.picture
            };
            resolve(user);
        }).catch(error => {
            reject({ message: 'unable to verify!' });
        });
    });
}

