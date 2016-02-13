var api = require('./lib/index')({
    authorizationUrl: 'https://some.domain.com/ns-api/oauth2/token/',
    apiUrl: 'https://some.domain.com/ns-api/',
    clientID: 'yourappID',
    clientSecret: '4cd0329409aae930a33b8e51d3aed989'
});

api.test();