export default class Age {
  constructor(userInput) {
    this.userInput = userInput
    this.mercury = this.mercuryAge()
    this.jupiter = this.jupiterAge()
    this.mars = this.marsAge()
    this.venus = this.venusAge()
    this.mercuryLife = this.mercuryLifeExpectancy()
  }

mercuryAge = function() {
  let mercuryYear = .24
  let mercuryAge = this.userinput / mercuryYear;
  return mercuryAge
}

jupiterAge = function() {
  let jupiterYear = 11.86
  let jupiterAge = 82 / jupiterYear;
  return jupiterAge
}

marsAge = function () {
  let marsYear = 1.88
  let marsAge = 82 / marsYear;
  return marsAge
}

venusAge = function () {
  
}

mercuryLifeExpectancy() {
  let mercuryYear = .24
  let toOldMerc = 80 / .24
  let lifeForMerc = this.userInput / mercuryYear

  if (lifeForMerc > toOldMerc) {
    return lifeForMerc - toOldMerc
  } else {
    return toOldMerc - lifeForMerc
  }
};
};