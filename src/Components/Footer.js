import React from "react";
import "./footer.css";
import Logo from "../imgs/logo2.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="disclaimer-area">
          <p className="disclaimer-desc">
            <b>Disclaimer:</b> This is the Atul Shop and here more product available with free delivery and affiliated marketing in available.
          </p>
        </div>
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>AShop Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About Atul Shop</p>
            <p>Sell products on AShop</p>
            <p>Atul Business Card</p>
            <p>Atul Primium Card</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on AShop</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Atul Shop Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>AShop Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About Atul Shop</p>
              <p>Sell products on AShop</p>
              <p>Atul Business Card</p>
              <p>Atul Primium Card</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on AShop</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">Atul Shop Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          {/* <img src={Logo} className="amazon-img" /> */}
          <img src={"https://logos.textgiraffe.com/logos/logo-name/Atul-designstyle-jungle-m.png"} className="amazon-img" />
          <div className="dev-data">
            <p>&copy; 2024 | Developed by </p>
            <a
              className="dev-link"
              href="https://instagram.com/Ravan__73240"
              target="_blank"
            >
              Atul Ranjan
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
