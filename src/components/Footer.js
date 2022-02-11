import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css"
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
         {/* <div className="footer__container"> */}
            <div className="footer__left">
            <div className="info__details">
                <div className="contact__details">
                   <h3>CUSTOMER SERVICE</h3>
                   <h1>+98448584651</h1>
                   <h3>Get in touch</h3>
                   <h3>Mon - Sat (10:30am to 7:00pm)</h3>
                </div>
                
                <div className="quick__links">
                    <h3>QUICK LINKS</h3>
                    <div className="quick__left">
                    <ul className="quick__details">
                        <li>
                            <a>Tracking | Return | Refund | Replacement</a>
                        </li>
                        <li>
                            <a>About us</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Terms of use</a>
                        </li>
                    </ul>
                    <ul className="quick__details">
                        <li>
                            <a>Store Locations Near Me</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>Return Policy</a>
                        </li>
                    </ul>
                    </div>
                    <p className="paragraphs"><a>Copyright © {year} www.animestore.in</a></p>
                </div>

                
                </div>
               
            </div>

            <div className="footer__right">

              <div className="social">
                  <h3>SOCIAL LINKS</h3>
                    <div className="social__icon">
                        
                        <a href='https://www.instagram.com/deep_bisht/' style={{color: 'white'}}>
                        <div className="icon"  >
                                <InstagramIcon />
                        </div>
                        </a>
                        
                       <a href='https://www.facebook.com/Zatchs.Brush' style={{color: 'white'}}>
                        <div className="icon">
                            <FacebookIcon />
                        </div>
                       </a>

                       <a href='https://www.instagram.com/deep_bisht/' style={{color: 'white'}}>
                       <div className="icon">
                       <TwitterIcon />
                       </div>
                       </a>

                       <div className="icon">
                       <EmailIcon />
                       </div>
                    </div>
                    <h4>Follow us on our Social Media Networks</h4>

                    <div className="input__details">
                    <h3>NEWSLETTER</h3>
                    <form className="input__email">
                    <input className="email__details" type="email" placeholder="Email Address"></input>
                     <button className="email__button" type="submit">SIGN UP</button>
                    </form>
                    <p className="paragraphs">Stay updated with the latest happenings and new product updates.</p>
                   <p className="paragraphs">Link to your <a style={{marginLeft:"5px",borderBottom: "1px dotted"}}>privacy policy.</a></p> 
                        
                       
                    </div>
             </div>


            </div>

            {/* </div> */}
        </div>
        
    )
}

export default Footer
