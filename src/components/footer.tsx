import Script from "next/script";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <>
            <div className="footer text-black">
                <div className="section10  animated wow fadeInUp" data-wow-duration="1s">
                    <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
                    <div className="elfsight-app-8c1b7790-9ad3-478f-8034-01c035fa8497"></div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="fl-div">
                                <FontAwesomeIcon
                                    icon={faMapMarker}
                                    className="fa-icon fa fa-map-marker"
                                    style={{color: "red"}}
                                />
                                <h4>Dubai Office</h4>
                                <p>Office No 903 : Floor No. 9th, Aspin Commercial Tower,Shaikh Zayed Road,Dubai
                                    (UAE)</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fi-div-2">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="fa-icon fa fa-envelope"
                                    style={{color: "red"}}
                                />
                                <h4>Email Us</h4>
                                <p>info@ewbsbusiness.ae</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fi-div-2">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="fa-icon fa fa-phone"
                                    style={{color: "red"}}
                                />
                                <h4>Call Us</h4>
                                <p>+971 42 559 901</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <iframe className="mb-4 mb-lg-0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.487150968669!2d55.273822828762235!3d25.207545922588835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc82dd93490bae6c7!2sEWBS%20LLC!5e0!3m2!1sen!2sin!4v1639917844798!5m2!1sen!2sin"
                                    frameBorder="0" style={{border: 0, width: '100%', height: '420px',}}
                                    allowFullScreen></iframe>

                        </div>

                        <div className="col-md-6 footer-right" id="formfillup">
                            <iframe id="xxgjl9cdy3MIg0ldO6XF" src="https://msgsndr.com/widget/form/xxgjl9cdy3MIg0ldO6XF"
                                    style={{border: 'none', width: '100%', padding: '0px'}} scrolling="no"></iframe>
                            <Script src="https://msgsndr.com/js/form_embed.js"></Script>

                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="footer2">
                <div className="f1" data-wow-duration="1s">
                    <h5>Useful Links</h5>
                    <ul>
                        <li><a href="aboutus.html" className="text-black">About Us</a></li>
                        <li><a href="contactus.html" className="text-black">Contact Us</a></li>
                        <li><a href="Privacy-Policy.html" className="text-black">Privacy Policy</a></li>
                        <li><a href="Terms-And-Condition.html" className="text-black">Terms & Conditions</a></li>

                    </ul>
                </div>
                <div className="f3" data-wow-duration="1s">
                    <h5>Dubai Branch</h5>
                    <p> Office No 903<br/> Floor No. 9th, Aspin Commercial Tower,Shaikh Zayed Road,Dubai (UAE)</p>
                    <p><b>Phone</b><br/> +971 54 252 7070,+971 564444095</p>
                    <p><b>Email</b><br/> info@ewbsbusiness.ae</p>
                </div>
                <div className="f4" data-wow-duration="1s">
                    <h5>India Branch</h5>
                    <p>11th floor, Wing A, Summit Building, Vibhuti Khand, Gomti Nagar,<br/> Lucknow-226010</p>
                    <p><b>Phone</b><br/> +91 8423111088</p>

                </div>
                <div className="f2" data-wow-duration="1s">
                    <img src="https://ewbsbusiness.ae/assets/img/logo.png"/><br/>
                    <br/>
                    <h6 style={{fontWeight: 600}}>Subscribe to our Newsletter</h6>
                    <div className="div-text-box">
                        <input type="text"/><input type="button" value="Subscribe"/>
                    </div>
                    <br/>
                    <p style={{fontSize: '12px'}}>Sign up for our latest news & articles. We won’t give you spam
                        mails.</p>
                    <img src="https://ewbsbusiness.ae/assets/img/ficon.png" className="img-fluid"/>
                </div>
                <div className="f1" data-wow-duration="1s">
                    <h5>Useful Links</h5>
                    <ul>
                        <li><a href="aboutus.html" className="text-black">About Us</a></li>
                        <li><a href="contactus.html" className="text-black">Contact Us</a></li>
                        <li><a href="Privacy-Policy.html" className="text-black">Privacy Policy</a></li>
                        <li><a href="Terms-And-Condition.html" className="text-black">Terms & Conditions</a></li>

                    </ul>
                </div>
                <div className="f3" data-wow-duration="1s">
                    <h5>Dubai Branch</h5>
                    <p> Office No 903<br/> Floor No. 9th, Aspin Commercial Tower,Shaikh Zayed Road,Dubai (UAE)</p>
                    <p><b>Phone</b><br/> +971 54 252 7070,+971 564444095</p>
                    <p><b>Email</b><br/> info@ewbsbusiness.ae</p>
                </div>
                <div className="f4" data-wow-duration="1s">
                    <h5>India Branch</h5>
                    <p>11th floor, Wing A, Summit Building, Vibhuti Khand, Gomti Nagar,<br/> Lucknow-226010</p>
                    <p><b>Phone</b><br/> +91 8423111088</p>

                </div>
                <div className="f2" data-wow-duration="1s">
                    <img src="https://ewbsbusiness.ae/assets/img/logo.png"/><br/>
                    <br/>
                    <h6 style={{fontWeight: 600}}>Subscribe to our Newsletter</h6>
                    <div className="div-text-box">
                        <input type="text"/><input type="button" value="Subscribe"/>
                    </div>
                    <br/>
                    <p style={{fontSize: '12px'}}>Sign up for our latest news & articles. We won’t give you spam
                        mails.</p>
                    <img src="https://ewbsbusiness.ae/assets/img/ficon.png" className="img-fluid"/>
                </div>
            </div>
            <div className="footer3">
                <div className="copyright">
                    Copyrights 2023. All rights reserved.
                </div>
            </div>*/}
        </>
    )
}
