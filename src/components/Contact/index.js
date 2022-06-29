import './style.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_e698y5f',
        'template_lxag2fi',
        formRef.current,
        'JgB-SVLpDnKdHqqjf'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    setDone(true);
  };

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-left">
        <div className="c-left-wrapper">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="socials">
            <div className="s-item">
              <a
                href="https://www.linkedin.com/in/bryanflores11/"
                target="blank"
                rel="noreferrer"
              >
                <BsLinkedin className="s-item-logo" />
              </a>
              <div className="s-item-name">bryanflores11</div>
            </div>
            <div className="s-item">
              <a
                href="mailto:floresbryan11@outlook.com"
                target="blank"
                rel="noreferrer"
              >
                <AiOutlineMail className="s-item-logo" />
              </a>
              <div className="s-item-name">floresbryan11@outlook.com</div>
            </div>
            <div className="s-item">
              <a
                href="https://github.com/flores-br"
                target="blank"
                rel="noreferrer"
              >
                <BsGithub className="s-item-logo" />
              </a>
              <div className="s-item-name">flores-br</div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-right">
        <div className="c-right-bg"></div>
        <p className="c-desc">
          <b>What's your story?</b> Let's connect, I'm open to all kinds of
          opportunities!
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && <p>Thank you...</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
