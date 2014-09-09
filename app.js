var StorySlots = StorySlots || {};

(function(ss){
  var arm = document.getElementsByClassName('arm')[0];
  var spinners = document.getElementsByClassName('spinner');

  function spin(el, arr){
    if(el.classList.contains('locked')){
      return;
    }

    var newIndex = Math.floor(Math.random() * arr.length);
    el.innerHTML = arr[newIndex];
  }

  arm.addEventListener('click', function(){
    spin(spinners[0], ss.settings);
    spin(spinners[1], ss.plots);
    spin(spinners[2], ss.characters);
  });
  
  function toggleSpinner(){
    this.classList.toggle('locked');
  }

  for(var index = 0; index < spinners.length; index++){
    var spinner = spinners[index];
    spinner.addEventListener('click', toggleSpinner.bind(spinner)); 
  }

}(StorySlots));

(function(){
  var ss = StorySlots || {};
  ss.characters = [
    '32 yr old coder', 
    '5yr old schoolperson', 
    '60yr old dentist'
  ];
}());

(function(){
  var ss = StorySlots || {};
  ss.plots = [
    'Revenge', 
    'Fix history', 
    'Write some code'
  ];
}());

(function(){
  var ss = StorySlots || {};
  ss.settings = [
    'Abandoned Cathedral', 
    'Deserted Spaceship', 
    'Stone Age Africa'
  ];
}());
