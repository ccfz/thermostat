

$(document).ready(function() {
  var thermostat = new Thermostat();


  // function saveTemp (){
    
  //   var url = 'http://localhost:4567/set'
  //   $.post(url, {'degrees' : "4"});
  // }

  function updateTemperature() {
  $('#temperature').text(thermostat.currentTemperature()+"\xB0 C");
  $('#display').attr('class', thermostat.energyUsage());
  // saveTemp();
  };

  function displayWeather(city) {


    var url ='http://api.openweathermap.org/data/2.5/weather?q='
    var token ='&appid=fc31ec89424ba65f04b99d6f2e4ed15c'
    var units ='&units=metric'
    $.get(url + city + token + units, function(data){
      $('#current_temperature').text(data.main.temp+"\xB0C");
      $('#location').text(data.name);
    })
  }
  //$('#temperature').text(thermostat.currentTemperature());

updateTemperature();
  $('#up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#reset').on('click', function(){
    thermostat.tempReset();
    updateTemperature();
  })

  $('#mode').on('click', function(){
    thermostat.switchModePowerSaving();
    updateTemperature();
  })


  $.get ('http://api.openweathermap.org/data/2.5/weather?units=metric&q=London,uk&appid=fc31ec89424ba65f04b99d6f2e4ed15c', function(data) {
    $('#current_temperature').text(data.main.temp+"\xB0C");
    $('#location').text(data.name);
  })


  $('#select-city').submit(function(event) {
  event.preventDefault();
    var city = $('#current-city').val();
      displayWeather(city);
  })

  //function to display current powersavin mode

})
