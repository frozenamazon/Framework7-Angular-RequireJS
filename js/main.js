define(function(require){
   'use strict';
    
    require('framework7');
    var angular = require('angular');
    
    var myApp = new Framework7({
        animateNavBackIcon: true
    });
    
    var mainView = myApp.addView('.view-main', {
      dynamicNavbar: true,
        domCache: true
    });
    
    angular.module('MyApp', [])
        .controller('MainCtrl', require('./MainCtrl'))
        .controller('SecondCtrl', require('./SecondCtrl'));
    
    angular.bootstrap(document, ['MyApp']);

});