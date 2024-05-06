import React from "react";
import PawaLogo from "../assets/PawaLogo.jpg"

const Footer = () => {
    return (
        <>
          <div className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                 <div> <img src={PawaLogo} alt="Logo" height="40" /></div>
                  <p>
                    PAWA is the best in class core banking system for small and growing microfinance institutions in Africa.
                  </p>
                </div>
      
                
      
                <div className="col-md-6 text-footer">
                  <ul className="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pages/MODULES.html">Product</a></li>
                    <li><a href="/pages/Packages.html">Packages</a></li>
                    <li><a href="/pages/About.html">About Us</a></li>
                    <li><a href="#contact">Support</a></li>
                    <li><a href="/pages/Login.html">Login</a></li>
                    <li><a href="/pages/FAQ.html">FAQs</a></li>
                    <li><a href="pages/T&C.html">Terms and Conditions</a></li>
                    <li><a href="#">Agent Portal</a></li>
                  </ul>
                </div>
              </div>
      
              <div className="row  separator">
                <div className="col-md-9 text-left takeitDwon">
                  <p className="copyright">Copyright &copy; PAWA. All rights reserved</p>
                </div>
                <div className="col-md-3 md-text-center">
                  <div className="social-icons">
                    <a href="https://x.com/pawaonline?s=11&t=sW1Gf_NJXR-xk1HaAdbjJA"><i className="fab fa-twitter"></i></a>
                    <a href="https://web.facebook.com/profile.php?id=61555129724579"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/pawaonline/?viewAsMember=true"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );      
};

export default Footer;