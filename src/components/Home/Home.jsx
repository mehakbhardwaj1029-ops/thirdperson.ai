import './Home.css';
import PageLayout from '../layout/PageLayout';
import LandingPage from '../LandingPage/LandingPage';
import WhenToCome from '../WhenToCome/WhenToCome';
import GetStarted from '../GetStarted/GetStarted';
import FeaturedCards from '../FeaturedCards/FeaturedCards';


const Home = () => {
  return (
    <>
    <PageLayout>
    <LandingPage />
    <FeaturedCards />
   
   
    {/* <Slider /> */}
    <WhenToCome />
    <GetStarted />
    </PageLayout>
   </>
  );
};

export default Home;