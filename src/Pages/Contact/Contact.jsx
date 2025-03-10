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
                    Maplewood, MN 0335</p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.844186445203!2d27.157230774303905!3d-25.576850138716228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebddfed17da6915%3A0x2f4a24a8294c2046!2sPhokeng%20Mall!5e0!3m2!1sen!2sza!4v1720608685978!5m2!1sen!2sza" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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