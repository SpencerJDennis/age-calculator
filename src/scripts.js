export default class Age {
  constructor(userInput) {
    this.userInput = userInput
    this.mercury = this.mercuryAge()
    this.jupiter = this.jupiterAge()
    this.mars = this.marsAge()
    this.venus = this.venusAge()
    this.mercuryLife = this.mercuryLifeExpectancy()
    this.jupiterLife = this.jupiterLifeExpectancy()
    this.marsLife = this.marsLifeExpectancy()
    this.venusLife = this.venusLifeExpectancy()
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
  let venusYear = .62
  let venusAge = 82 / venusYear;
  return venusAge
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

jupiterLifeExpectancy() {
  let jupiterYear = 11.86
  let toOldJup = 80 / 11.86
  let lifeForJup = this.userInput / jupiterYear

  if (lifeForJup > toOldJup) {
    return lifeForJup - toOldJup
  } else {
    return toOldJup - lifeForJup
  }
}

marsLifeExpectancy() {
  let marsYear = 1.88
  let toOldMars = 80 / 1.88
  let lifeForMars = this.userInput / marsYear

  if (lifeForMars > toOldMars) {
    return lifeForMars - toOldMars
  } else {
    return toOldMars - lifeForMars
  }
}

venusLifeExpectancy() {
  
}
};