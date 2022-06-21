"use strict";

class Fuel {
  constructor(volume, dencity) {
    this.volume = volume;
    this.dencity = dencity;
  }

  get volume() {
    return this._volume;
  }
  set volume(volume) {
    if (typeof volume !== "number") {
      throw new TypeError("Volume must be number");
    }
    if (volume < 0 || volume > 40) {
      throw new RangeError("Volume must be 0..40");
    }
    this._volume = volume;
  }

  get dencity() {
    return this._dencity;
  }
  set dencity(dencity) {
    if (typeof dencity !== "number") {
      throw new TypeError("Dencity must be number");
    }
    if (dencity < 0.65 || dencity > 0.85) {
      throw new RangeError("Dencity must be 0.65..0.85");
    }
    this._dencity = dencity;
  }
  get FuelWeight() {
    return this._dencity * this._volume;
  }
  static isFuel(objFuel) {
    return objFuel instanceof Fuel;
  }
}
class Auto {
  #model;
  constructor(model, ownWeght) {
    this.model = model;
    this.ownWeght = ownWeght;
  }
  get ownWeght() {
    return this._ownWeght;
  }
  set ownWeght(ownWeght) {
    if (typeof ownWeght !== "number") {
      throw new TypeError("Own Weght must be number");
    }
    if (ownWeght < 1500 || ownWeght > 2000) {
      throw new RangeError("Own Weght must be 1500..2000");
    }
    this._ownWeght =ownWeght;
  }
  getFull(objFuel){
    if (Fuel.isFuel(objFuel)===false) {
      throw new TypeError("Must be Fuel");
    }
    return this._ownWeght * objFuel.FuelWeight;
  }
}
