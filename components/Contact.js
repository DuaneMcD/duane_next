import { useState } from 'react';
import FormInput from './FormInput';

const Contact = () => {
  function formSubmit(values) {
    console.log(values);
  }
  return (
    <section id='contact' className={'page-section secPad'}>
      <div className={'container contact-container'}>
        <div className={'row'}>
          <div className={'heading'}>
            <h2 className={'contactHeader'}>{`Let's Work Together`}</h2>
            <p className={'contactBlurb'}>
              {`I'd love to hear about your next project! Please use this form
              and I'll be in touch shortly.`}
            </p>
          </div>
        </div>
        <div className={'contactForm'}>
          <form name='sentMessage' id='contactForm' onSubmit={formSubmit()}>
            <div className={'control-group'}>
              <div className={'controls'}>
                <input
                  type='text'
                  className={'form-control'}
                  placeholder='Name'
                  id='name'
                  required
                  data-validation-required-message='Please enter your name'
                />
                <p className={'help-block'}></p>
              </div>
            </div>
            <div className={'control-group'}>
              <div className={'controls'}>
                <input
                  type='email'
                  className={'form-control'}
                  placeholder='Email'
                  id='email'
                  required
                  data-validation-required-message='Please enter your email'
                />
              </div>
            </div>
            <div className={'control-group'}>
              <div className={'controls'}>
                <textarea
                  rows='10'
                  cols='100'
                  className={'form-control'}
                  placeholder='Message'
                  id='message'
                  required
                  data-validation-required-message='Please enter your message'
                  minLength='5'
                  data-validation-minlength-message='Min 5 characters'
                  maxLength='999'
                  // style='resize: none'
                ></textarea>
              </div>
            </div>
            <div id='success'></div>
            <button type='submit' className={'btn btn-primary pull-right'}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
