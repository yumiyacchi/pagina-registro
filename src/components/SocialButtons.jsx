import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href="https://wa.me/tuNumero" target="_blank" rel="noopener noreferrer" className="social-button whatsapp">
        <FaWhatsapp />
      </a>
      <a href="https://www.instagram.com/tuUsuario" target="_blank" rel="noopener noreferrer" className="social-button instagram">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/tuUsuario" target="_blank" rel="noopener noreferrer" className="social-button facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.tiktok.com/@tuUsuario" target="_blank" rel="noopener noreferrer" className="social-button tiktok">
        <FaTiktok />
      </a>
    </div>
  );
};

export default SocialButtons;