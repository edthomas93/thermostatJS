function Thermostat() {
  this.temperature = 20;
  this.maxtemp = 25;
  this.powersavemode = true
};

Thermostat.prototype.up = function() {
  if (this.temperature >= this.maxtemp){
    throw new Error(`Max temperature is ${this.maxtemp} degrees`)
  }
  this.temperature += 1
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10){
    throw new Error('Minimum temperature is 10 degrees');
  }
  else {
    this.temperature -= 1;
  };
};

Thermostat.prototype.switchmode = function() {
  if (this.powersavemode === true) {
    this.powersavemode = false;
    this.maxtemp = 32;
  }
  else {
    this.powersavemode = true;
    this.maxtemp = 25;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyusage = function() {
  if (this.temperature < 18) {
    return "Low-usage"
  }
  else if (this.temperature < 25) {
    return "Medium-usage"
  }
  else {
    return "High-usage"
  }
};
