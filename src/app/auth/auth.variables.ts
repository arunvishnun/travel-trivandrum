interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'GjnATbJBBI306I1Ej1a87gDNE7MXH43r',
  domain: 'ng2auth.auth0.com',
  callbackURL: 'http://localhost:4200'
};

// export const AUTH_CONFIG: AuthConfig = {
//   clientID: '{CLIENT_ID}',
//   domain: '{DOMAIN}',
//   callbackURL: 'http://localhost:4200'
// };

// auth0 = new auth0.WebAuth({
//   clientID: 'GjnATbJBBI306I1Ej1a87gDNE7MXH43r',
//   domain: 'ng2auth.auth0.com',
//   responseType: 'token id_token',
//   audience: 'https://ng2auth.auth0.com/userinfo',
//   redirectUri: 'http://localhost:4200',
//   scope: 'openid'
// });
