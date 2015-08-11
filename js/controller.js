'use strict';
angular.module('CCCTwitterPi').
    controller('twitterpiController', function twitterpiController($interval){
        var controller = this;

        var text1= "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed";
        var text2= "Minions ipsum bananaaaa jiji hana dul sae jiji gelatooo chasy potatoooo chasy ti aamoo! Po kass. Bananaaaa underweaaar uuuhhh hahaha para tú";
        var i = 0;
        controller.twittertext = text1;
        $interval(function(){
            if (controller.twittertext === text1){
                controller.twittertext = text2;
            } else {
                controller.twittertext = text1;
            }   
        }, 2000);
        
    
});