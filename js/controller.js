angular.module('CCCTwitterPi').
    controller('twitterpiController', function twitterpiController($interval, $http){
        'use strict';
        var controller = this;
        var data = 
        [
            {
                "user": "@minion",
                "text": "Minions ipsum pepete tulaliloo jiji jeje. Aaaaaah hana dul sae belloo! Aaaaaah. Hana dul sae poopayee poulet tikka masala belloo! Bee do bee",
                "images": []
            },
            {
                "user": "@captain_obvious",
                "text": "#cccamp15 is great",
                "images": []
            }
        ];
        var getData = function(){
            $http.get('http://localhost:5000/updates').
            then(function(response){
               data = response.data;
               console.log(data);
            });
        }
        getData();

        $interval(function(){
            getData();
        }, 1000 * 61)
        

     var i = 0;
     controller.user = data[i].user;
     controller.tweet = data[i].text;
     var displayimage = false;
     $interval(function(){
            if (i === data.length){
                i = 0;
            }
            controller.user = data[i].user;
            if (displayimage){
                controller.tweet = "";
                controller.tweetimage = data[i].images[0];
                i++;  
                displayimage = false;                   
            } else{
                 controller.tweet = data[i].text;
                 controller.tweetimage = ""
                 if (data[i].images.length > 0){
                     displayimage = true;
                 }else{
                     i++;    
                 }
            }
            
        }, 5000);
      
       
});