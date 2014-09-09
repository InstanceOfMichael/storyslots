(function(app){
  
  var items = [
    'Abandoned Cathedral', 
    'Deserted Spaceship', 
    'Stone Age Africa'
  ];
 
  var service = {
    next: function(){
      return items[Math.floor(Math.random() * items.length)];
    }
  };

  app.factory('SettingsSvc', function(){
    return service;
  });

}(angular.module('storySlots')));
