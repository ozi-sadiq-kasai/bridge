import './Form.css'
import { useState } from 'react';
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineRealEstateAgent, MdFamilyRestroom } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";


const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };
    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your submit logic here (API, etc.)
    };

    return (
        <div className="form__container">
            <div className='form__container--header'>
                <h2>Get Started</h2>
                <p>Complete the form below to begin the dispute resolution process. Our team will review your information and contact you to discuss next steps.</p>
            </div>
            <h3 className='step'>Step <span>{step}</span> of 3</h3>
            <form onSubmit={handleSubmit} className='form__container--form'>
                {step === 1 && (
                    <div className='form__container--content'>
                        <div className='form__container--content--header'>
                            <h3>Dispute Information</h3>
                            <p>Tell us about your dispute</p>
                        </div>
                        <div>
                            <p>Type of Dispute</p>
                            <input type="radio" name='dispute' value='business' />
                            <label><LuBriefcaseBusiness />business</label>
                            <input type="radio" name='dispute' value='court-related' />
                            <label><GoLaw />court-related</label>
                            <input type="radio" name='dispute' value='family' />
                            <label><MdFamilyRestroom />family</label>
                            <input type="radio" name='dispute' value='workplace' />
                            <label><BsPersonWorkspace />workplace</label>
                            <input type="radio" name='dispute' value='real-estate' />
                            <label><MdOutlineRealEstateAgent />real estate</label>
                            <input type="radio" name='dispute' value='custom-solutions' />
                            <label><RiCustomerService2Line />custom solutions</label>
                        </div>
                        <div>
                            <label htmlFor="summary">Brief Summary of the Dispute</label>
                            <textarea name="summary" id="summary" cols="70" rows="5" ></textarea>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div>
                            <h3>Your Information</h3>
                            <p>Please provide your contact information</p>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" />
                            </div>
                            <p>Preffered Contact Method</p>
                            <input type="radio" name='contact' value='phone' />
                            <label>phone</label>
                            <input type="radio" name='contact' value='email' />
                            <label>email</label>
                            <input type="radio" name='contact' value='either' />
                            <label>either</label>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <div>
                            <h3>Additional Details</h3>
                            <p>Share any additional details that might help us understand your situation</p>
                        </div>
                        <div>
                            <label>When did this dispute begin</label>
                            <input type="date" />
                        </div>
                        <div>
                            <label>Other Parties Involved</label>
                            <textarea name="parties" id="parties" cols="50" rows="5" placeholder='Please list any other parties involved in this dispute..'></textarea>
                        </div>
                        <div>
                            <label>Previous Resolution Attempts</label>
                            <textarea name="resolution" id="resolution" cols="50" rows="5" placeholder='Have you attempted to resolve this dispute before? If so please describe..'></textarea>
                        </div>
                        <div>
                            <label>Additional Information</label>
                            <textarea name="information" id="information" cols="50" rows="5" placeholder='Is there anything you will like us to know about your situation'></textarea>
                        </div>
                        <div>
                            <label>Submit document (If any)</label>
                            <input type="file" />
                        </div>
                    </div>
                )}

                <div style={{ marginTop: '1rem' }}>
                    <button onClick={handleBack}>Back</button>
                    {step < 3 ? (
                        <button type="button" onClick={handleNext}>
                            Next
                        </button>
                    ) : (
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};





export default Form;