export class SpaceAge {
  constructor(age) {
    this.age = age;
    this.earthAge = (((Date.now() - (new Date(age).getTime())) / 31557600000).toPrecision(5) * 1);
    this.relativeAge = [["Mercury",0.241],["Venus",0.615],["Mars",1.881],["Jupiter",11.86]];
  }
}
