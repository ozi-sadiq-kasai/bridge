import './FAQ.css'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useState } from 'react'

const faqData = [
    {
        question: "How long does the dispute resolution process typically take?",
        answer:
            "The timeline varies depending on the complexity of the dispute and the willingness of parties to engage in the process. Simple disputes may be resolved in a few weeks, while more complex cases can take several months. During your initial consultation, we'll provide a more specific timeline based on your situation.",
    },
    {
        question: "Is the dispute resolution process legally binding?",
        answer:
            "The agreements reached through our mediation process can be made legally binding if all parties consent. We can help formalize the agreement into a legally binding document when appropriate. In some cases, court approval may be required to make the agreement enforceable.",
    },
    {
        question: "What if the other party refuses to participate?",
        answer:
            "While we encourage voluntary participation from all parties, we understand that sometimes one party may be reluctant. In such cases, we can provide guidance on alternative approaches, including formal legal options if necessary. We also have strategies to encourage participation from reluctant parties.",
    },
    {
        question: "How much does dispute resolution cost?",
        answer:
            "Our fees vary depending on the type and complexity of the dispute. We offer transparent pricing and will provide a clear fee structure during your initial consultation. In many cases, dispute resolution is significantly more cost-effective than litigation. We also offer payment plans for eligible clients.",
    },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index)
    }

    return (
        <div className="faq">
            <div className='faq__header'>
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about our dispute resolution process</p>
            </div>
            <ul className="faq__list">
                {faqData.map((item, index) => (
                    <li key={index} className={`faq__item ${openIndex === index ? 'open' : ''}`}>
                        <button
                            className="faq__question"
                            onClick={() => toggle(index)}
                        >
                            {item.question}
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </button>
                        {openIndex === index && <p className="faq__answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>

            <div className='faq__cta'>
                <h4>Ready To Begin</h4>
                <p>Take the first step toward resolving your dispute with our expert guidance.</p>
                <div className="faq__buttons">
                    <div className="faq__button-group">
                        <a href="">Get Started Now</a>
                        <IoIosArrowRoundForward />
                    </div>
                    <a href="" className='faq__buttons--contact'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default FAQ