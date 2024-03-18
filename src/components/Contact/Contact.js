import React from 'react'
import './Contact.css'
import msgicon from '../../assets/email.svg'
import msg1 from '../../assets/email (1).svg'
import msg2 from '../../assets/phone.svg'
import msg3 from '../../assets/location.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c103cb52-9006-445c-8fff-4fc26ced356e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='container contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msgicon} alt='' /></h3>
            <p className='fvgb'>Feel free to reach out through contact form find our contact information below. Your feedback, 
                question and suggestion are important to us as we strive to provide exceptional service to our
                 university environment</p>
                 <ul>
                    <li><img src={msg1} alt='' />contact@gmail.com</li>
                    <li><img src={msg2} alt='' />+91 879-6435-625</li>
                    <li><img src={msg3} alt='' />D-204 Procapitus Park, Noida sector-63</li>
                 </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' required/>
                <label>Phone Number</label>
                <input type='tel' placeholder='Enter your mobile number' name='phone' required/>
                <label>Write your message here</label>
                <textarea row='15' col='30' placeholder='Enter your message here' name='msg' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
