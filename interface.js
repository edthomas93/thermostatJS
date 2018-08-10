$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#temperature').css('color', 'orange');
  $('#psm').text(thermostat.psm());
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

  function update(){
    $('#temperature').text(thermostat.temperature)
    $('#psm').text(thermostat.psm());
    if(thermostat.energyusage() === 'Low-usage') {
      $('#temperature').css('color', 'green')
    }
    else if(thermostat.energyusage() === 'Medium-usage') {
      $('#temperature').css('color', 'orange')
    }
    else {
      $('#temperature').css('color', 'red')
    }
  };

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

  $('#up').click(function() {
    thermostat.up();
    update();
  });

  $('#down').click(function() {
    thermostat.down();
    update();
  });

  $('#reset').click(function() {
    thermostat.reset();
    update();
  });

  $('#switchmode').click(function() {
    thermostat.switchmode();
    update();
  });
});
