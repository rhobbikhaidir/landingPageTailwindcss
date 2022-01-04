import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import React from 'react';

const Service = () => {
  return (
    <div className="text-center cursor-pointer py-8 ">
      <Title Service title="Our service" />
      <Text
        TextService
        text="We provide to you the best choiches for you. Adjust it to your health
      needs and make sure your undergo treatment with our highly qualified
      doctors you can consult with us which type of service is suitable for
      your health"
      />
    </div>
  );
};

export default Service;
