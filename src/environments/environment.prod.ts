export const environment = {
  production: true,
  google: {
    web: {
      client_id: '903207276766-ggeuuur4q7cji9bflg7d4910s2h5o201.apps.googleusercontent.com',
      project_id: 'myblog-x',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://www.googleapis.com/oauth2/v3/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_secret: 'HHAB0A0N60UnpBeFsZTO5HEc',
      javascript_origins: [
        'http://nikx.co'
      ]
    }
  },
  api: {
    host: 'localhost',
    scheme: 'http',
    basePath: '/v1',
    port: 5000,
    authentication: {
      tokenSignIn: '/tokensignin'
    }
  }
};
