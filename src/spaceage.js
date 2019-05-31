export class SpaceAge {
  constructor(age) {
    this.age = age;
    this.earthAge = (((Date.now() - (new Date(age).getTime())) / 31557600000).toPrecision(2) * 1);
    this.relativeAge = [["Mercury",0.24],["Venus",0.62],["Mars",1.88],["Jupiter",11.86]];
  }

  mercuryAge(){
    return ((this.earthAge/.24)).toPrecision(2) * 1;
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
    return (100 - this.earthAge).toPrecision(2) * 1;
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
