'use strict'

function Thermostat() {
  this.temp = 20
  this.MIN_TEMP = 10
  this.POWER_SAVING_MAX_TEMP = 25
  this.MAX_TEMP = 32
  this.powerSaving = true
};

Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.isPowerSaving() && this.getTemp() >= this.POWER_SAVING_MAX_TEMP) {
    return;
  } else if (!this.isPowerSaving() && this.getTemp() >= this.MAX_TEMP) {
    return;
  } else {
  this.temp += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.getTemp() <= this.MIN_TEMP) {
    return;
  } else {
  this.temp -= 1;
  }
};

Thermostat.prototype.isPowerSaving = function() {
  return this.powerSaving === true;
};

Thermostat.prototype.setPowerSaving = function(state) {
  if (state == 'off') {
    this.powerSaving = false;
  } else {
    this.powerSaving = true;
  }
}
