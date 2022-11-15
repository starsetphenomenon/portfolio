import './contact.scss';
import Heading from '../../components/Heading/Heading';
import sprites from '../../icons/icons.svg';

function Contact() {


    return (
        <div className="contact">
            <Heading heading="Get in" hspan="touch" span="contact" />
            <div className="content">
                <div className="info">
                    <h3>DON'T BE SHY!</h3>
                    <p>Feel free to get in touch with me. I am always
                        open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="item">
                        <svg>
                            <use href={sprites + '#mail'} />
                        </svg>
                        <div className="desc">
                            <h4>Mail me</h4>
                            <h5>starsetphenomenon@gmail.com</h5>
                        </div>
                    </div>
                    <div className="item">
                        <svg>
                            <use href={sprites + '#phone'} />
                        </svg>
                        <div className="desc">
                            <h4>Call me</h4>
                            <a href="tel:+380976889429">+380976889429</a>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/roman.viznyy/" target="_blank">
                            <svg>
                                <use href={sprites + '#facebook'} />
                            </svg>
                        </a>

                        <a href="https://t.me/starsetphenomenon" target="_blank">
                            <svg>
                                <use href={sprites + '#telegram'} />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/unrav3l_me/" target="_blank">
                            <svg>
                                <use href={sprites + '#instagram'} />
                            </svg>
                        </a>
                        <a href="https://github.com/starsetphenomenon/" target="_blank">
                            <svg>
                                <use href={sprites + '#github'} />
                            </svg>
                        </a>
                    </div>
                </div>
                <form className='form' action="#">
                    <input type="text" name="name" id="name" placeholder='Your name' />
                    <textarea placeholder='Your message' name="message" id="message" cols="30" rows="10"></textarea>
                    <div className="send">
                        <div className="icon">
                            <svg>
                                <use href={sprites + '#send'} />
                            </svg>
                        </div>
                        <button>Send message</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Contact;
