import React, { useState } from 'react';
import s from './Study.jpg';
import t from './Profile.jpg';
import './Profile.css';
import { h1Element, logo, footer } from './import';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(s); // Initial value is the default image

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='ProfileCss all'>
          <div className="profile-container">
             <nav>
                <div className='title'>
                   {logo}
                   <h1>{h1Element}</h1>
                </div>
                <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/home/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
              </nav>

        <form className='firstSide'>
          <section className="Entete">
            <div className="image-container">
              <img src={selectedImage} alt="" className='imgStandard'></img>
              <input type="file" accept="image/*"  style={{ display: 'none' }} id="fileInput" />
              {/* <label htmlFor="fileInput" className="pen-button">
                <FontAwesomeIcon icon={faPen} className="ButIcon" />
              </label> */}
              <img src={t} alt="profile image" className='imgProfile'></img>
              <input type="file" accept="image/*"  style={{ display: 'none' }} id="fileInput" />
              {/* <label htmlFor="fileInput" className="pen-button">
                <FontAwesomeIcon icon={faPen} className="ButIcon2" />
              </label> */}
            </div>
          </section>

          <section className="profile-details">
            <div className='inputs'>
              <label className='labels'>User Name</label>
              <input type='text' id='name'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Family Name</label>
              <input type='text'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>Password</label>
              <input type='password'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>New Password</label>
              <input type='password'></input>
            </div>
            <div className='inputs'>
              <label className='labels'>My Address</label>
              <input type='text'></input>
            </div>
            <div><button className='save' >Save Changes</button></div>
            <section class="social-buttons">
              <h1>Contact Me</h1>
              
              <div className='but'><a href="#" class="facebook-button"><i class="fab fa-facebook"></i> Facebook</a></div>
              <div className='but'><a href="#" class="telegram-button"><i class="fab fa-telegram"></i> Telegram</a></div>
              <div className='but'><a href="#" class="whatsapp-button"><i class="fab fa-whatsapp"></i> WhatsApp</a></div>
              <div className='but'><a href="#" class="viber-button"><i class="fab fa-viber"></i> Viber</a></div>
            </section>
          </section>
        </form>

      </div>
      <div className='footer'>
    <p>{footer}</p>
  </div>
  </div>
  );
};

export default Profile;
