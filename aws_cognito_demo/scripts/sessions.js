// Restoring Session

window.onload = function(){
    var cognitonUser = userPool.getCurrentUser();
    
    if (cognitonUser !== null){
        cognitonUser.getSession( function(err, session){
            if (err) {
                alert(err);
                return;
            }
            if (session.isValid()){
                document.getElementById("username").innerHTML = cognitonUser.getUsername();
            }
            
        });
    }
};