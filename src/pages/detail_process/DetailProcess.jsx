import './DetailProcess.css';
import { SiTicktick } from "react-icons/si";
import { assets } from '../../assets/bridgePoint_assets/assets.js';

const detailSteps = [
  {
    step: 'Step 1',
    title: 'Initial Consultation',
    description: 'Our process begins with a thorough assessment of your dispute. During this initial consultation, we:',
    points: [
      'Listen to your concerns and goals',
      'Gather essential information about the dispute',
      'Identify all parties involved',
      'Explain our process and set expectations',
    ],
    image: assets.meeting,
  },
  {
    step: 'Step 2',
    title: 'Strategy Development',
    description: 'Based on the information gathered, our experts develop a customized resolution strategy that:',
    points: [
      'Addresses your specific needs and goals',
      'Considers all legal and practical implications',
      'Outlines potential resolution approaches',
      'Establishes a timeline for resolution',
    ],
    image: assets.plan,
  },
  {
    step: 'Step 3',
    title: 'Mediation & Resolution',
    description: 'We facilitate productive discussions between parties to reach a fair and satisfactory resolution:',
    points: [
      'Create a neutral environment for discussion',
      'Guide constructive communication between parties',
      'Identify common ground and potential compromises',
      'Work toward mutually acceptable solutions',
    ],
    image: assets.mediate,
  },
  {
    step: 'Step 4',
    title: 'Agreement & Implementation',
    description: 'Once a resolution is reached, we help formalize and implement the agreement:',
    points: [
      'Document the agreed-upon terms',
      'Ensure all parties understand their obligations',
      'Provide guidance on implementing the resolution',
      'Offer follow-up support as needed',
    ],
    image: assets.agreement,
  },
];

const DetailProcess = () => {
  return (
    <div className="detail">
      <div className='detail__header'>
        <h2>Our Dispute Resolution Process</h2>
        <p>We follow a structured, proven approach to help you resolve disputes efficiently and effectively.</p>
      </div>

      <ol className='detail__list'>
        {detailSteps.map((item, index) => {
          const isEven = (index + 1) % 2 === 0;

          return (
            <li key={index} className={`detail__item ${isEven ? 'even' : 'odd'}`}>
              <article>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <section>
                  {item.points.map((point, i) => (
                    <div key={i}>
                      <SiTicktick  className='tick'/> {point}
                    </div>
                  ))}
                </section>
              </article>
              <img src={item.image} alt="" />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default DetailProcess;
