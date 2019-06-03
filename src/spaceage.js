export class SpaceAge {
  constructor(age) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.age = age;
    this.earthAge = (((Date.now() - (new Date(age).getTime())) / 31557600000).toPrecision(2) * 1);
  }

  mercuryAge(){
    let string = `<p>${planetAge}</p>`;
    let planetAge = ((this.earthAge/.24)).toPrecision(2) * 1;
    return string;
  }

  venusAge(){
    return ((this.earthAge/.62)).toPrecision(2) * 1;
  }

  marsAge(){
    return ((this.earthAge/1.88)).toPrecision(2) * 1;
  }

  jupiterAge(){
    return ((this.earthAge/11.86)).toPrecision(2) * 1;
  }

  earthDeath(){
    if (100 - this.earthAge > 0) {
    return (100 - this.earthAge).toPrecision(2) * 1;
  } else {
    const oldAge = (-1 * (100 - this.earthAge)).toPrecision(1) * 1;
    return (`Wow, you have made it ${oldAge} years past the expected lifespan!`);
  }
}
  mercuryDeath(){
    return ((100 - this.earthAge)/.24).toPrecision(2) * 1;
  }
  venusDeath(){
    return ((100 - this.earthAge)/.62).toPrecision(2) * 1;
  }
  marsDeath(){
    return ((100 - this.earthAge)/1.88).toPrecision(2) * 1;
  }
  jupiterDeath(){
    return ((100 - this.earthAge)/11.86).toPrecision(2) * 1;
  }
}
