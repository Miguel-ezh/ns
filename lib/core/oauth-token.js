function OauthToken(){
    this.accessToken = '';
    this.expireIn = '';
    this.scope = '';
    this.refreshToken = '';
    this.creationTime = '';   
}

OauthToken.prototype.create = function(){
    
};

OauthToken.prototype.isExpired = function () {
    
};

OauthToken.prototype.getToken = function() {
    
};

module.exports = new OauthToken();