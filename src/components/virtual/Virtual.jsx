import './Virtual.css'
import { assets } from '../../assets/bridgePoint_assets/assets';
import { LuVideo, LuClock2 } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";


const virtual = [
    {
        header: 'Eliminate Geographic Barriers',
        text: 'Participate in mediation sessions from anywhere, eliminating travel time and expenses.',
        icon: <LuVideo size={24}/>
    },
    {
        header: 'Flexible Scheduling',
        text: 'More easily coordinate sessions around participants schedules, reducing delays in the resolution process.',
        icon: <LuClock2 size={24}/>
    },
    {
        header: 'Secure & Confidential',
        text: 'Our video conferencing platform uses end-to-end encryption to ensure your sensitive discussions remain private.',
        icon: <FiLock size={24}/>
    },
    {
        header: 'Include All Necessary Parties',
        text: 'Easily include experts, witnesses, or other stakeholders regardless of their location.',
        icon: <IoPeopleOutline size={24} />
    },
]

const Virtual = () => {
    return (
        <div className='virtual__container'>
            <div className='virtual__container--header'>
                <h2>Virtual Dispute Resolution</h2>
                <p>We provide secure video conferencing services to make dispute resolution more accessible,
                    convenient, and efficient for all parties involved.</p>
            </div>
            <div className='virtual__container--text'>
                <div className='virtual__container--img'>
                    <img src={assets.virtual} alt="virtual meeting" />
                </div>
                <ul className='virtual__container--list'>
                    {
                        virtual.map((item, index) => (
                            <li key={index}>
                                <span>{item.icon}</span>
                                <div className='virtual__container--list-header'>
                                    <h3>{item.header}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <a href="#" className='virtual__container--link'>Learn About Virtual Mediation</a>
        </div>
    );
};

export default Virtual;