// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  google: {
    web: {
      client_id: '903207276766-dh56up2ltarmru9tc1q93t66hhbu8ijl.apps.googleusercontent.com',
      project_id: 'myblog-x',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://www.googleapis.com/oauth2/v3/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_secret: 'YmIw230GmnmYY0DQ7Y0gjuK0',
      redirect_uris: [
        'https://myblog-x.firebaseapp.com/__/auth/handler'
      ],
      javascript_origins: [
        'http://localhost',
        'http://localhost:5000',
        'https://myblog-x.firebaseapp.com',
        'http://localhost:4200'
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

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
