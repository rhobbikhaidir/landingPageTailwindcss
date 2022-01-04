import React from 'react';

import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

import illustrasi2 from 'assets/image/illustration2.png';
import illustrasi3 from 'assets/image/illustration3.png';
import IllusHero from 'assets/image/hero1.png';

const Hero = props => {
  if (props.HeroBorder) {
    return (
      <div className="w-full px-6 py-16 ">
        <div className=" mt-10 sm:mt-0 flex items-center flex-col-reverse lg:flex-row   md:space-x-14">
          <div>
            <Title title="Download our" sub="mobile apps" />
            <Text
              text="Our dedicated patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long calls,
                  or administrative hassle) and securely"
            />
            <Button SecondBtn titleBtn="Download" />
          </div>
          <img
            src={illustrasi3}
            alt=""
            className="lg:w-6/12 lg:h-2/4 lg:pl-5"
          />
        </div>
      </div>
    );
  }
  if (props.HeroRightImg) {
    return (
      <div className="w-full px-6  sm:py-16 ">
        <div className=" mt-10 sm:mt-0 flex flex-col lg:flex-row  justify-between  ">
          <img src={illustrasi2} alt="" className="lg:w-6/12 lg:h-2/4 " />
          <div className="pt-10 sm:pt-20  lg:pl-14">
            <Title title="Leading healthcare" sub="providers" />
            <Text
              text="Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver"
            />

            <Button SecondBtn titleBtn="Learn More" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full px-6 py-24 ">
      <div className=" mt-10 sm:mt-0 flex flex-col-reverse lg:flex-row  items-center md:space-x-8 lg:space-x-14">
        <div className="sm:pt-10 px-2">
          <Title Hero title="Virtual healthcare" sub="for you" />
          <Text
            text="Trafalgar provides progressive, and affordable healthcare,
        accessible on mobile and online for everyone"
          />
          <Button titleBtn="Download" />
        </div>
        <img src={IllusHero} alt="" className="lg:w-6/12 lg:h-2/4 sm:pl-5" />
      </div>
    </div>
  );
};

export default Hero;
