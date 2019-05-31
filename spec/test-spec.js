import { SpaceAge } from './../src/spaceage.js';

describe('SpaceAge', function(){

  it('should return number of years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.earthAge).toEqual(26.444);
  });

  it('should convert earth years to mercury years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.mercuryAge()).toEqual(109.73);
  });

  it('should convert earth years to venus years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.venusAge()).toEqual(42.998);
  });

  it('should convert earth years to mars years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.marsAge()).toEqual(14.058);
  });
  it('should convert earth years to jupiter years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.jupiterAge()).toEqual(2.2297);
  });
});
