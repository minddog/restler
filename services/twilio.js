Twilio = rest.service(function(sid, token) {
    this.defaults.username = sid;
    this.defaults.password = token;
}, {
    baseURL: 'https://api.twilio.com/2008-08-01/Accounts'
}, {
    getURL : function(url) {
        return this.baseURL + '/' + this.defaults.username + '/' + url;
    },
    
    request: function(url, type, data) {
        var url = this.getURL('Calls');
        var params = { data : data };
        if(!type) 
        {
            type = 'GET';
        }

        switch(type)
        {
            case 'GET':
                return this.get(url, params);
            case 'POST':
                return this.post(url, params);
            case 'DELETE':
                return this.del(url, params);
        }
    }
});