(function(app){
  
  var items = [
    '32 yr old coder',
    '5 yr old schoolperson',
    '60 yr old dentist'
  ];
 
  var service = {
    next: function(){
      return items[Math.floor(Math.random() * items.length)];
    }
  };

  app.factory('CharactersSvc', function(){
    return service;
  });

}(angular.module('storySlots')));
