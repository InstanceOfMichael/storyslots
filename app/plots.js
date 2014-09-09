(function(app){
  
  var items = [
    'Revenge', 
    'Fixing history',
    'Writing code'
  ];
 
  var service = {
    next: function(){
      return items[Math.floor(Math.random() * items.length)];
    }
  };

  app.factory('PlotsSvc', function(){
    return service;
  });

}(angular.module('storySlots')));
