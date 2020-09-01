import React from 'react';
import './contact-us.css';
import '../../helper/helper.css';

const ContactUs = () => {
    return (
        <div className="contact-us background-image-config">
            <div className="text-box-config">
                <h2> CONTACT US </h2><br />
                <i class="fa fa-phone fa-lg" aria-hidden="true">
                    <h4>9876543210</h4>
                </i><br />
                <i class="fa fa-envelope fa-lg" aria-hidden="true">
                    <h4>nishyamohan@gmail.com</h4>
                </i><br />
                <h4 style={{ fontStyle: 'italic' }}>Follow us on social media -
                    <a href="https://www.facebook.com/thanviecouture/">
                        <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/thanvie_couture/">
                        <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
                    </a>
                </h4>
            </div>
        </div>
    )
}
export default ContactUs;