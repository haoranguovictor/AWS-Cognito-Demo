/* jshint browser: true */
document.getElementById("login-submit-button").addEventListener("click", (e)=>{
    e.preventDefault();
    
    var userName = document.getElementById("username-login").value;
    var userPassword = document.getElementById("password-login").value;
    
    var userData = {
        Username : userName,
        Pool : userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    
    var authenticationData = {
            Username: userName,
            Password: userPassword
        };
    
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    
    cognitoUser.authenticateUser(authenticationDetails, function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('access token + ' + result.getAccessToken().getJwtToken());
                
            },

            onFailure: function(err) {
                alert(err);
            },

        });
        
        
        
        
        console.log('call result: ' + result);
    });
});                                                               