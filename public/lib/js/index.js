$(document).ready(function () {

    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BHu0rJLzBSOovyjqXCjQEaKNfwILNkJ_InKJT5d7lhc5tF_e0fVMZtvFyU2doPFukyRKWhcQXm1jyyqkbkSzPUs");

    messaging.requestPermission()
    .then(function(){
        console.log("Have Permission");
        return messaging.getToken();
    })
    .then(function(token){
        console.log(token);
        $("#registrationTokenDiv").html(token);
    })
    .catch(function(err){
        console.log("Error:",err);
        $("#registrationTokenDiv").html(err);
    });

    messaging.onMessage(function(payload){
        console.log("onMessage:",payload);

        var now = new Date();

        var htmlString = '<div class="row border-bottom py-2">'+
                         '<div class="col-12 small">'+now+'</div>'+
                         '<div class="col-1">></div><div class="col-10">'+payload.data.status+'</div>'+
                         '</div>';
        
        $("#messagingDiv").html(htmlString+$("#messagingDiv").html());
    });

});