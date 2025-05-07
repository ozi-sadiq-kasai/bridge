import './Expertise.css';
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineRealEstateAgent, MdFamilyRestroom } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const expertiseData = [
    {
        icon: <LuBriefcaseBusiness size={24} />,
        title: 'Business',
        description: 'Business-to-business conflicts, contract disputes, and business dissolution mediation services.',
        link: '/deets',
    },
    {
        icon: <MdOutlineRealEstateAgent size={24} />,
        title: 'Real Estate',
        description: 'Deposit disputes, evictions, landlord/tenant conflicts, and general real estate disputes.',
        link: '/deets',
    },
    {
        icon: <GoLaw size={24} />,
        title: 'Court-Related',
        description: 'Civil harassment, small claims, unlawful detainers, and court preparation consultations.',
        link: '/deets',
    },
    {
        icon: <MdFamilyRestroom size={24} />,
        title: 'Family',
        description: 'Divorce mediation, child custody arrangements, and other family-related dispute resolution.',
        link: '/deets',
    },
    {
        icon: <BsPersonWorkspace size={24} />,
        title: 'Workplace',
        description: 'Discrimination, harassment, retaliation, and general workplace conflicts.',
        link: '/deets',
    },
    {
        icon: <RiCustomerService2Line size={24} />,
        title: 'Custom Solutions',
        description: "Don't see your specific dispute type? Contact us for a customized resolution approach tailored to your unique situation.",
        link: '/deets',
    },
];

const Expertise = () => {
    return (
        <div className='expertise'>
            <div className='expertise__header'>
                <h2>Areas of Expertise</h2>
                <p>
                    Our team specializes in resolving disputes across multiple
                    domains, providing tailored solutions for your specific situation.
                </p>
            </div>

            <ul className="expertise__list">
                {expertiseData.map((item, index) => (
                    <li key={index} className="expertise__item">
                        <div className='expertise__list--header'>
                            {item.icon}
                            <h3>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                        <div className='expertise__list--links'>
                        {item.link && <a href={item.link}>More <span> <MdOutlineKeyboardDoubleArrowRight /></span></a>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Expertise;
