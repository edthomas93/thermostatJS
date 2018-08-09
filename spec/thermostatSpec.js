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
    it('does not increase beyond 25 when powersavemode is on', function() {
      expect(thermostat.powersavemode).toEqual(true);
      for (var i = 1; i < 6; i++) {
        thermostat.up();
      };
      expect(function() { thermostat.up() }).toThrowError("Max temperature is 25 degrees");
    });
    it('does not increase beyond 32 when powersavemode is off', function() {
      thermostat.switchmode();
      expect(thermostat.powersavemode).toEqual(false);
      for (var i = 1; i < 13; i++) {
        thermostat.up();
      };
      expect(function() { thermostat.up() }).toThrowError("Max temperature is 32 degrees");
    });

  });

   describe('#down', function() {
     it('decreases the temperature by 1 degree', function() {
      expect(thermostat.temperature).toEqual(20);
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
     });
    it('does not go down if 10 degrees', function() {
      for (var i = 1; i < 11; i++) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(10);
      expect(function() { thermostat.down() }).toThrowError("Minimum temperature is 10 degrees");
    });
  });

  describe('#switchmode', function() {
    it('power saving mode defaults to true', function() {
      expect(thermostat.powersavemode).toEqual(true);
    });
    it('when called, power save mode switches to false', function() {
      thermostat.switchmode();
      expect(thermostat.powersavemode).toEqual(false);
    });
  });

  describe('#reset', function() {
    it('resets temp to initialise temp', function() {
      for (var i = 1; i < 11; i++) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(10);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#energyusage', function() {
    it('indicates that it is low', function() {
      for (var i = 1; i < 4; i++) {
        thermostat.down();
      };
      expect(thermostat.temperature).toEqual(17);
      expect(thermostat.energyusage()).toEqual("Low-usage");
    });
    it('indicates that it is medium', function() {
      expect(thermostat.energyusage()).toEqual("Medium-usage");
    });
    it('indicates that it is high', function() {
      for (var i = 1; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.temperature).toEqual(25);
      expect(thermostat.energyusage()).toEqual("High-usage");
    });
  });
});
