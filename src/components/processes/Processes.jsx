import './Processes.css';
import { assets } from '../../assets/bridgePoint_assets/assets';

const Processes = () => {
    return (
        <div className='process'>
            <h2>How Our Process Works</h2>
            <div className='process__content'>
                <ul className='process__content--list'>
                    <li>
                        <span className="process__number">1.</span>
                        <div>
                            <h3> Initial Consultation</h3>
                            <p>We begin with a thorough assessment of your
                                dispute to understand all aspects of the situation.</p>
                        </div>
                    </li>
                    <li>
                        <span className="process__number">2.</span>
                        <div>
                            <h3>Strategy Development</h3>
                            <p>Our experts develop a customized resolution strategy based on your specific needs and goals</p>
                        </div>
                    </li>
                    <li>
                        <span className="process__number">3.</span>
                        <div>
                            <h3>Mediation & Resolution</h3>
                            <p>We facilitate productive discussions between parties to reach a fair and satisfactory resolution.</p>
                        </div>
                    </li>
                    <li>
                        <span className="process__number">4.</span>
                        <div>
                            <h3>Agreement & Implementation</h3>
                            <p>We help formalize the resolution and provide guidance on implementing the agreed-upon terms.</p>
                        </div>
                    </li>
                </ul>
                <img src={assets.office} alt="" />
            </div>
            <a href="#">Learn More</a>
            <div className='process__ready'>
                <h2>Ready to Resolve Your Dispute?</h2>
                <p>
                    Take the first step toward a fair and efficient resolution.
                    Our team of experts is ready to help you navigate your dispute.
                </p>
            </div>
            <div className='process__ready--buttons'>
                <a href="#">Get Started Now</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
};

export default Processes;