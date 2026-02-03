import React from 'react'
import './Home.css';
import PageLayout from '../layout/PageLayout';
import LandingPage from '../LandingPage/LandingPage';
import Slider from '../Slider/Slider';
import SparkRainParticles from '../SparkRainParticles';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import WhenToCome from '../WhenToCome/WhenToCome';
import GetStarted from '../GetStarted/GetStarted';


const Home = () => {
  return (
    <>
    <PageLayout>
    <LandingPage />
    <Page2 />
    <Page3 />
    <Slider />
    <WhenToCome />
    <GetStarted />
    </PageLayout>
   </>
  );
};

export default Home;