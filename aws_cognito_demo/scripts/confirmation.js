/* jshint browser: true */

document.getElementById("confirm-submit-button").addEventListener("click", (e)=>{
    e.preventDefault();
    
    var emailCheck = document.getElementById("user-confirm").value;
    var ConfirmCheck = document.getElementById("confirm-code").value;
    
    var userData = {
        Username : emailCheck,
        Pool : userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    
    cognitoUser.confirmRegistration(ConfirmCheck, true, function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        
        var authenticationData = {
            Username: localStorage.getItem("email"),
            Password: localStorage.getItem("password")
        };
        
        localStorage.clear();
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        
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