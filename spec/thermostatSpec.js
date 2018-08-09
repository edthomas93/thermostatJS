"use strict";

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#up', function() {
    it('increases the temperature by 1 degree', function() {
      expect(thermostat.temperature).toEqual(20);
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('#down', function() {
    it('decreases the temperature by 1 degree', function() {
      expect(thermostat.temperature).toEqual(20);
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });
});
