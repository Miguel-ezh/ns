var appConfig = require('./core/config');
var utils = require('./core/utils');

module.exports = function (config) {
  config = utils.configure(config, appConfig);

  return {
    test: function(){
        utils.log('this is a test');
    }
  };
};