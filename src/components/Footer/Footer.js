import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/images/Wlogo-name.png";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import EatMe from "../../components/EatMe/EatMe"
function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__warpped}>
        <div className={classes.footer__warpped__icons}>
          <img src={logo} alt="logo" />
          <h1>Find us on:</h1>
          <ImLinkedin
            size={40}
            className={classes.footer__warpped__icons__icon}
          />
          <AiFillInstagram
            size={40}
            className={classes.footer__warpped__icons__icon}
          />
          <FaFacebookSquare
            size={40}
            className={classes.footer__warpped__icons__icon}
          />
          <FaTwitterSquare
            size={40}
            className={classes.footer__warpped__icons__icon}
          />
          <IoLogoYoutube
            size={40}
            className={classes.footer__warpped__icons__icon}
          />
        </div>
        <div className={classes.footer__warpped__about}>
          <h1>About</h1>
          <div className={classes.footer__warpped__about__line}></div>
          <p>
          <EatMe/> offers a tantalizing array of dishes that reflect Tunisia's
            culinary heritage, such as couscous, brik, tagine, and
            harissa-spiced meats and stews, all accompanied by freshly baked
            bread and mint tea.
          </p>
        </div>
        <div className={classes.footer__warpped__menu}>
          <h1>Menu</h1>
          <div className={classes.footer__warpped__menu__line}></div>
          <div className={classes.footer__warpped__menu__content}>
            <h2>Pizzas</h2>
            <h2>Plates</h2>
            <h2>Salads</h2>
            <h2>Drinks</h2>
            <h2>Desert</h2>
            <h2>Ice Cream</h2>
            <h2>Breakfest</h2>
            <h2>...</h2>
          </div>
        </div>
        <div className={classes.footer__warpped__contact}>
          <h1>Contact</h1>
          <div className={classes.footer__warpped__contact__line}></div>
          <div>
            <div className={classes.footer__warpped__contact__content}>
              <BsFillTelephoneFill size={20} />
              <p>(+216) 55 555 555</p>
            </div>
            <div className={classes.footer__warpped__contact__content}>
              <MdLocationOn size={60} />
              <p>Tunisia - Beni Rabia 4015,130 Rue Hsine Eloued Sousse</p>
            </div>
            <div className={classes.footer__warpped__contact__content}>
              <MdEmail size={30} />
              <p>EatMeTunisia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
