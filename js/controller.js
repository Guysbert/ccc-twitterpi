angular.module('CCCTwitterPi').
    controller('twitterpiController', function twitterpiController($interval, $http){
        'use strict';
        var controller = this;
        var data = 
        [
            {
                "user": "@minion",
                "text": "Minions ipsum pepete tulaliloo jiji jeje. Aaaaaah hana dul sae belloo! Aaaaaah. Hana dul sae poopayee poulet tikka masala belloo! Bee do bee"
            },
            {
                "user": "@captain_obvious",
                "text": "#cccamp15 is great"
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
     $interval(function(){
            i++;
            if (i === data.length){
                i = 0;
            }
            controller.user = data[i].user;
            controller.tweet = data[i].text;
        }, 5000);
      
       
});