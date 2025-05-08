import './Home.css'
import Disputes from '../../components/disputes/Disputes'
import Expertise from '../../components/expertise/Expertise';
import Processes from '../../components/processes/Processes';
import Virtual from '../../components/virtual/Virtual';


const Home = () => {
  return (
    <div className='home'>
        <Disputes/>
        <Expertise/>
        <Virtual/>
        <Processes/>
    </div>
  );
};

export default Home;