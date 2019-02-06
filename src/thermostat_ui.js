'use strict'

var thermostat = new Thermostat();

$(document).ready(() => {
$('#temp').text(thermostat.getTemp());

$('#powersaving').text(thermostat.isPowerSaving());

$('#up').on('click', function() {
  thermostat.up();
  $('#temp').text(thermostat.getTemp());
});

$('#down').on('click', function() {
  thermostat.down();
  $('#temp').text(thermostat.getTemp());
});

$('#reset').on('click', function() {
  thermostat.reset();
  $('#temp').text(thermostat.getTemp());
});

$('#on').on('click', function() {
  thermostat.setPowerSaving('on');
  $('#powersaving').text(thermostat.isPowerSaving());
});

$('#off').on('click', function() {
  thermostat.setPowerSaving('off');
  $('#powersaving').text(thermostat.isPowerSaving());
});

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7f7477e7139dbac56556a0cb7558324e&units=metric', function(data) {
  $('#outside').text(data.main.temp);
});

$('#city').submit(function(event) {
  var city = $('#city').val();
  console.log(city)
  $.get('http://api.openweathermap.org/data/2.5/weather?" + city + "&appid=7f7477e7139dbac56556a0cb7558324e&units=metric', function(data) {
    $('#outside').text(data.main.temp);
  });
});

});
