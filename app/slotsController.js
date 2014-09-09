(function(app){
  
  var SlotsController = function(settings, plots, characters) {
    var self = this;
    this.settings = settings;
    this.plots = plots;
    this.characters = characters;

    this.locks = [true, true, true];

    this.spin();
  };

  SlotsController.prototype.toggleLock = function(index){
    this.locks[index] = !this.locks[index];
  };

  SlotsController.prototype.spin = function(){
    if (this.locks[0]){
      this.setting = this.settings.next();
    }
    
    if (this.locks[1]){
      this.plot = this.plots.next();
    }
    
    if (this.locks[2]){
      this.character = this.characters.next();
    }
  };

  app.controller('SlotsCtrl', ['SettingsSvc', 'PlotsSvc', 'CharactersSvc', SlotsController]);

}(angular.module('storySlots')));
