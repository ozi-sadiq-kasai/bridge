import './Disputes.css';
import { assets } from '../../assets/bridgePoint_assets/assets';


const Disputes = () => {
  return (
    <div className='disputes'>
      <div className='disputes__text'>
        <h1>Professional Dispute Resolution Services</h1>
        <p>We provide expert mediation and resolution
          services for business, real estate, court-related, family, and workplace disputes.
          Our team of experienced professionals is dedicated to helping you find fair and efficient solutions.</p>
      </div>
      {/* <div className='disputes__image'> */}
        <img src={assets.mediation} alt="mediation" />
      {/* </div> */}
    </div>
  );
};

export default Disputes;