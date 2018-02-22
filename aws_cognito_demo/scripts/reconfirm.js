/* jshint browser: true */

document.getElementById("reconfirm-submit-button").addEventListener("click", (e)=>{
    e.preventDefault();
    
    var emailCheck = document.getElementById("user-confirm").value;
    
    var userData = {
        Username : emailCheck,
        Pool : userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    

cognitoUser.resendConfirmationCode(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        console.log('Message sent!');
    });
});