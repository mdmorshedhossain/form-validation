import React, { useState } from 'react';


const Contact = () => {

    const [inputField, setInputField] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
        contact_no: '',
        message: '',
        checkbox_message: false,
    });

    const inputsHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        // alert(inputField.first_name);
        console.log("submittedData", inputField);
        setInputField({
            first_name: '',
            last_name: '',
            email_address: '',
            contact_no: '',
            message: '',
            checkbox_message: false,
        })
    }




    return (
        <div className="container">
            <div className="row g-3">
                <div className="col-md-12">
                    <h3 className="header__link mb-2 text-center">Contact Us</h3>
                    <p className="contact_us_description text-center">Let’s Talk And Transform Your Healthcare System!</p>
                </div>
                <div className="col-md-12">

                    <form className="row g-3 contact__us" onSubmit={submitForm}>
                        <div className="col-md-6">
                            <label for="InputFirstName" className="col-form-label col-form-label-sm">First Name <span className="text-danger">*</span></label>
                            <input className="form-control form-control-sm" id="InputFirstName"
                                type="text"
                                placeholder="Write your First Name..."
                                name="first_name"
                                value={inputField.first_name}
                                onChange={inputsHandler}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="InputLastName" className="col-form-label col-form-label-sm">Last Name</label>
                            <input className="form-control form-control-sm" id="InputLastName"
                                type="text"
                                placeholder="Write your Last Name..."
                                name="last_name"
                                value={inputField.last_name}
                                onChange={inputsHandler}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="InputEmailAddress" className="col-form-label col-form-label-sm">Email address <span className="text-danger">*</span></label>
                            <input className="form-control form-control-sm" id="InputEmailAddress"
                                type="email"
                                placeholder="Write your email address..."
                                name="email_address"
                                value={inputField.email_address}
                                onChange={inputsHandler}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="InputContactNumber" className="col-form-label col-form-label-sm">Contact Number <span className="text-danger">*</span></label>
                            <input className="form-control form-control-sm" id="InputContactNumber"
                                type="phone"
                                placeholder="Contact Number"
                                name="contact_no"
                                value={inputField.contact_no}
                                onChange={inputsHandler}
                            />
                        </div>
                        <div className="col-md-12 ">
                            <label for="InputComments" className="col-form-label col-form-label-sm">Message <span className="text-danger">*</span></label>
                            <textarea className="form-control form-control-sm" id="InputComments" rows="4"
                                type="text"
                                placeholder="Write your message here ..."
                                name="message"
                                value={inputField.message}
                                onChange={inputsHandler}
                            ></textarea>
                        </div>
                        <div className="col-md-12 mt-3">
                            <div className="form-check">
                                <input className="form-check-input" id="exampleCheck1"
                                    type="checkbox"
                                    name="checkbox_message"
                                    checked={inputField.checkbox_message===true}
                                    value={true}
                                    onChange={() => setInputField({ ...inputField, checkbox_message: !inputField.checkbox_message })}
                                    // type="checkbox"
                                    // name="checkbox_message"
                                    // value={"sunny leone"}
                                    // onChange={(e) => setInputField({ ...inputField, checkbox_message: e.target.value })}
                                />
                                <label className="form-check-label" for="exampleCheck1">I agree to the Privacy Policy and Terms of Service.</label>
                            </div>
                        </div>
                        <div className="col-md-12 pt-3 text-center">
                            <button type="submit" className="btn btn__contact">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;