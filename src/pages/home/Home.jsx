import './Home.css'
import Disputes from '../../components/disputes/Disputes'
import Expertise from '../../components/expertise/Expertise';
import Processes from '../../components/processes/Processes';


const Home = () => {
  return (
    <div className='home'>
        <Disputes/>
        <Expertise/>
        <Processes/>
    </div>
  );
};

export default Home;