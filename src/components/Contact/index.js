import './style.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-left">
        <div className="c-left-wrapper">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="socials">
            <div className="s-item">
              <a href="https://www.linkedin.com/in/bryanflores11/">
                <BsLinkedin className="s-item-logo" />
              </a>
              <div className="s-item-name">bryanflores11</div>
            </div>
            <div className="s-item">
              <a href="mailto:floresbryan11@outlook.com">
                <AiOutlineMail className="s-item-logo" />
              </a>
              <div className="s-item-name">floresbryan11@outlook.com</div>
            </div>
            <div className="s-item">
              <a href="https://github.com/flores-br">
                <BsGithub className="s-item-logo" />
              </a>
              <div className="s-item-name">flores-br</div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-right"></div>
    </div>
  );
};

export default Contact;
