import './Contact.css'
import ContactForm from './ContactForm';
import WhatsApp from './WhatsApp';

const Contact = () => {
    return (<section id='contact' className='contact'>
        <h5>Lets Get Social</h5>
      <h2>Contact Me</h2>
        <ContactForm />
        <h3>Send me a WhatsApp Message with a click:</h3>
        <WhatsApp />
    </section>  );
}
 
export default Contact;