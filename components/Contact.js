import { useState } from 'react';
import FormInput from './FormInput';
import axios from 'axios';

const Contact = () => {
  const [values, setValues] = useState({
    user: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const resetForm = () => {
    setValues({
      user: '',
      email: '',
      message: '',
    });
  };

  const resetFormStatus = () => {
    setFormStatus(null);
  };

  const inputs = [
    {
      id: 1,
      name: 'user',
      type: 'text',
      placeholder: 'Name',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      id: 3,
      name: 'message',
      type: 'text',
      placeholder: 'Message',
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    let config = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_CONTACT}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      const data = await response;
      console.log('Message Sent!');
      console.log(data);
      setFormStatus('success');
      resetForm();
      setTimeout(setFormStatus, 35000, null);
    } catch (err) {
      setFormStatus('error');
      console.error(err);
      setTimeout(setFormStatus(null), 500);
    }
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <section id='contact' className={'contact'}>
      <div className={'contact-container'}>
        <h2 className={'contactHeader'}>{`Let's Work Together`}</h2>
        <p className={'contactBlurb'}>
          {`I'd love to hear about your next project! `}
        </p>
        <p className={'contactBlurb'}>
          {`Please use this form and I'll be in touch shortly.`}
        </p>
        <form
          className={'contactForm'}
          name='sentMessage'
          id='contactForm'
          onSubmit={handleSubmit}>
          {formStatus == 'success' ? (
            <div className={'formSuccess'}>
              Message Sent! You will receive a reply soon.
            </div>
          ) : null}
          {formStatus == 'error' ? (
            <div className={'formError'}>
              Sorry, Message Sending Failed! Please refresh or try again later.
            </div>
          ) : null}

          {inputs.map(input => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))}
          <button type='submit' className={'btn btn-primary pull-right'}>
            Send Message!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
