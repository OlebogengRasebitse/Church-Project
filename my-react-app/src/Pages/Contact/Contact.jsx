import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <h3>Visit Us</h3>
            <p>If you have any questions or comments, please reach out!</p>
            <div className="contact-info">
                <p><strong>Email:</strong> abc@church.com</p>
                <p><strong>Phone:</strong> 014 239 9136</p>
                <p><strong>Worship Site:</strong> Concordia St. Paul - Buetow Auditorium<br />
                300 Hamline Avenue<br />
                St. Paul, MN 55104</p>
                <p><strong>Communications and Mailings:</strong><br />
                809 New Century Blvd S<br />
                Maplewood, MN 55119</p>
            </div>
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" 
                    width="300" 
                    height="300" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0"
                ></iframe>
        </div>
    );
}

export default Contact;