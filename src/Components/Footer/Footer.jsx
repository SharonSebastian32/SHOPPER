import "./footer.css";
import footerlogo from "../../assets/logo_big.png";
import instaIcon from "../../assets/instagram_icon.png";
import pinterstIcon from "../../assets/pintester_icon.png";
import whatsappIcon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerlogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>COMPANY</li>
        <li>PRODUCT</li>
        <li>OFFICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instaIcon} alt="" />
        </div>

        <div className="footer-icon-container">
          <img src={pinterstIcon} alt="" />
        </div>

        <div className="footer-icon-container">
          <img src={whatsappIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023-All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
