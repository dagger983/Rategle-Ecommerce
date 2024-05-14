import React from 'react';
import './footer.css'
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} &#160; Rategle Technologies <br /> All rights reserved&#160; |&#160; Designed and Developed by Rategle Technologies&#160; | <br /> <a href="tel:+916384311620">Phone &#160; :&#160; +91&#160; 6384311620 </a> &#160;|&#160; Privacy Policy&#160; |&#160; Terms of Service &#160;</p>
    </footer> 
  );
}

export default Footer;
