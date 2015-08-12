angular.module('CCCTwitterPi').
    controller('twitterpiController', function twitterpiController($interval, $http){
        'use strict';
        var controller = this;
        var data = 
        [
            {
                "user": "foo",
                "text": "bar"
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