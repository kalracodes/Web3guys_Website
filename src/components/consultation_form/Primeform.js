import React, { useState } from "react";
import logo from "../../assets/website-logo.svg";
import "./primeform.css";
import user from "../../assets/user.svg";
import buisness_suit from "../../assets/buisness_suit.svg";
import email from "../../assets/email.svg";
import website_url from "../../assets/website_url.svg";
import phone from "../../assets/phone.svg";
import cross from "../../assets/cross.svg";
import right_arrow from "../../assets/right_arrow.svg";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqygdzv");

  if (state.succeeded) {
    return <p className='form-success'>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} autocomplete='off'>
      <div className='form-element-outer'>
        <div className='form-element'>
          <img src={user} alt='' />
          <input
            id='Name'
            type='text'
            name='Name'
            className='form-field'
            placeholder='Enter Your Name'
            required
          />
          <ValidationError prefix='Name' field='Name' errors={state.errors} />
        </div>
        <div className='form-element'>
          <img src={buisness_suit} alt='' />
          <input
            id='company-name'
            type='text'
            name='company-name'
            className='form-field'
            placeholder='Enter Company Name'
            required
          />
          <ValidationError
            prefix='company-name'
            field='company-name'
            errors={state.errors}
          />
        </div>
        <div className='form-element'>
          <img src={email} alt='' />
          <input
            id='email'
            type='email'
            name='email'
            className='form-field'
            placeholder='Enter Your Email'
            required
          />
          <ValidationError prefix='email' field='email' errors={state.errors} />
        </div>
        <div className='form-element'>
          <img src={website_url} alt='' />
          <input
            id='website-url'
            type='url'
            name='website-url'
            className='form-field'
            placeholder='Website URL'
            required
          />
          <ValidationError
            prefix='website-url'
            field='website-url'
            errors={state.errors}
          />
        </div>
        <div className='form-element'>
          <img src={phone} alt='' />
          <input
            id='phone-number'
            type='tel'
            name='phone-number'
            className='form-field'
            placeholder='Enter Phone Number'
            required
          />
          <ValidationError
            prefix='phone-number'
            field='phone-number'
            errors={state.errors}
          />
        </div>
        <div className='form-element'>
          <img src={phone} alt='' />
          <input
            id='budget'
            type='number'
            name='budget'
            className='form-field'
            placeholder='Enter Monthly Budget'
            required
          />
          <ValidationError
            prefix='budget'
            field='budget'
            errors={state.errors}
          />
        </div>
      </div>
      <button type='submit' className='form-button' disabled={state.submitting}>
        Save & Continue
        <img src={right_arrow} alt='' />
      </button>
    </form>
  );
}
export function Primeform({ setDisplayForm }) {
  return (
    <div className='form-container'>
      <div className='form-nav'>
        <div className='form-logo'>
          <img src={logo} alt='' />
          <span className='form-logo-name'>
            The<strong>WEB3</strong>Guys
          </span>
        </div>
        <div className='cross'>
          <img src={cross} alt='' onClick={() => setDisplayForm(false)} />
        </div>
      </div>
      <div className='progress-before'></div>
      <div className='progress'></div>
      <h1 className='consultion_call_header'>Book a free Consultation Call</h1>
      <h2 className='consultation_call_secondary'>
        Schedule a consultation call with a marketing specialist.
      </h2>
      <ContactForm />
    </div>
  );
}
