import { SpaceAge } from './../src/spaceage.js';

describe('SpaceAge', function(){

  it('should return number of years', function(){
    const age = new SpaceAge("1992-12-20");
    expect(age.earthAge).toEqual(26);
  });

  it('should convert earth years to mercury years', function(){
    const age = new SpaceAge("1992-12-20");
    expect(age.mercuryAge()).toEqual(110);
  });

  it('should convert earth years to venus years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.venusAge()).toEqual(42);
  });

  it('should convert earth years to mars years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.marsAge()).toEqual(14);
  });

  it('should convert earth years to jupiter years', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.jupiterAge()).toEqual(2.2);
  });
  it('should calculate remaining years on earth', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.earthDeath()).toEqual(74);
  });

  it('should calculate remaining years on mercury', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.mercuryDeath()).toEqual(310);
  });
  it('should calculate remaining years on venus', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.venusDeath()).toEqual(120);
  });
  it('should calculate remaining years on mars', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.marsDeath()).toEqual(39);
  });
  it('should calculate remaining years on jupiter', function(){
    const age = new SpaceAge("1992-12-20")
    expect(age.jupiterDeath()).toEqual(6.2);
  });

  it('should return the number of years they have lived past the life expectancy', function(){
    const age = new SpaceAge("1910-12-20")
    expect(age.earthDeath()).toEqual(`Wow, you have made it 10 years past the expected lifespan!`);
  });
});
