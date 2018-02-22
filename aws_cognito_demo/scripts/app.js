/* jshint browser: true */

var poolData = {
    UserPoolId : '', // UserPoolId here
    ClientId : '' // ClientId here
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

