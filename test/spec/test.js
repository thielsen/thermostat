'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function () {
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('goes up 1 degree when up is triggered', function () {
    thermostat.up();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('goes down 1 degree when down is triggered', function () {
    thermostat.down();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it('it does not go below 10 degrees', function () {
    var i;
    for (i = 0; i <=10; i++ ) {
      thermostat.down();
    }
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
  });

  it('cannot go above 25 when power saving mode is on', function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
    var i;
    for (i = 0; i <=5; i++ ) {
      thermostat.up();
    }
    expect(thermostat.getTemp()).toEqual(25);
  });

  it('can set power saving mode to off', function() {
    thermostat.setPowerSaving('off');
    expect(thermostat.isPowerSaving()).toEqual(false);
  });

  it('cannot go above 32 when power saving mode is off', function() {
    thermostat.setPowerSaving('off');
    expect(thermostat.isPowerSaving()).toEqual(false);
    var i;
    for (i = 0; i <=12; i++ ) {
      thermostat.up();
    }
    expect(thermostat.getTemp()).toEqual(32);
  });

});
