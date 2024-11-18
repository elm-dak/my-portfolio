import React, { useState, useRef, useContext } from 'react';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!email || !name || !message) {
            return toast.error('Please fill name, email, and message');
        }

        setLoading(true); // Set loading to true when the email is being sent

        emailjs.sendForm('service_co6pwda', 'template_hp69yq7', form.current, 'e1Xc0_30AmUT2smdi')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!');
                setLoading(false); // Reset loading state after success
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send the message');
                setLoading(false); // Reset loading state after failure
            });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form" id='Contact'>
            <ToastContainer position="bottom-center" limit={1} />
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>

            <div className="c-right">
                <form onSubmit={sendEmail} ref={form}>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        name="user_name"
                        className="user"
                        placeholder='Name'
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="user_email"
                        className="user"
                        placeholder='Email'
                    />
                    <textarea
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="user"
                        placeholder='Message'
                    />
                    <input
                        type="submit"
                        disabled={loading}
                        value={loading ? "Sending..." : "Send"}
                        className="button"
                    />
                    <span>{loading && 'Sending... \n Thanks for contacting'}</span>

                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
