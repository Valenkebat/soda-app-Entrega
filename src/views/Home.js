import React from 'react';
import Header from '../components/Header/Header'
import InfoBody  from '../components/InfoBody/InfoBody';
import SliderHomeContainer from '../containers/SliderHomeContainer/SliderHomeContainer'

const Home = () => {
  return <div>
      <Header />
      <SliderHomeContainer />
      <InfoBody />
  </div>;
};

export default Home;
