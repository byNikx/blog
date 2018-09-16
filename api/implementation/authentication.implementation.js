'use strict'

const { googleConfig } = require('../api.config');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(googleConfig.web.client_id);
exports.verify = async function (token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleConfig.web.client_id,
    });
    const payload = ticket.getPayload();
    return payload;
}