import { SiTicktick } from "react-icons/si";
import { assets } from '../../assets/bridgePoint_assets/assets.js';
import './Detailed__Expertise.css'


const expertise = [
    {
        category: 'Business Disputes',
        title: 'Business Conflict Resolution',
        description: 'Our business dispute resolution services help companies navigate complex conflicts efficiently and effectively, preserving business relationships when possible.',
        points: [
            'Business-to-business conflicts',
            'Contract disputes',
            'Partnership conflicts',
            'Business dissolution'
        ],
        image: assets.mediation,
    },
    {
        category: 'Real Estate Disputes',
        title: 'Real Estate Conflict Resolution',
        description: 'Our real estate dispute resolution services help landlords, tenants, buyers, sellers, and other parties resolve property-related conflicts efficiently.',
        points: [
            'Deposit disputes',
            'Eviction proceedings',
            'Landlord/tenant disputes',
            'Property boundary disputes'
        ],
        image: assets.mediation,
    },
    {
        category: 'Court-Related Disputes',
        title: 'Court-Related Resolution Services',
        description: 'Our court-related dispute resolution services help individuals navigate legal proceedings efficiently and effectively, often avoiding lengthy court battles.',
        points: [
            'Civil harassment cases',
            'Small claims disputes',
            'Unlawful detainer cases',
            'Court preparation consultations'
        ],
        image: assets.mediation,
    },
    {
        category: 'Family Disputes',
        title: 'Family Conflict Resolution',
        description: 'Our family dispute resolution services help families navigate difficult transitions with compassion and fairness, focusing on the well-being of all parties involved.',
        points: [
            'Civil harassment cases',
            'Small claims disputes',
            'Unlawful detainer cases',
            'Court preparation consultations'
        ],
        image: assets.mediation,
    },
    {
        category: 'Workplace Disputes',
        title: 'Workplace Conflict Resolution',
        description: 'Our workplace dispute resolution services help employers and employees address conflicts efficiently while maintaining professional relationships and workplace harmony.',
        points: [
            'Discrimination claims',
            'Harassment situations',
            'Retaliation claims',
            'General workplace conflicts'
        ],
        image: assets.mediation,
    },
]


const Detailed__Expertise = () => {
    return (
        <div className="expert">
            <div className="expert__header">
                <h2> Areas of Expertise</h2>
                <p>Our team of experienced mediators and dispute resolution specialists can help you navigate a wide range of conflict situations.</p>
            </div>
            <ul className="expert__list">
                {expertise.map((item, index) => {
                    return (
                        <li key={index} className="expert__item">
                            <article>
                                <span>{item.category}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <section>
                                    {item.points.map((point, i) => (
                                        <div key={i}>
                                            <SiTicktick className='tick' /> {point}
                                        </div>
                                    ))}
                                </section>
                            </article>
                            <img src={item.image} alt="" />
                        </li>
                    )
                })

                }
            </ul>
        </div>
    );
};

export default Detailed__Expertise;