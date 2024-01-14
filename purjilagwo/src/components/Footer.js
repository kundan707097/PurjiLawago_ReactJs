import React, { } from "react";

function Footer() {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="findus">
                            <h4>Find Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Saepe porro neque a nam nulla quos atque.</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-map-marker"></i>Baishakhi Siwan, Bihar (841226)</li>
                                <li><i className="fa fa-envelope"></i>purjilagawo@gmail.com</li>
                                <li><i className="fa fa-phone"></i>8955035026</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="qlink">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-angle-right"></i><a href="">Generel Information</a></li>
                                <li><i className="fa fa-angle-right"></i><a href="">Blood Bank</a></li>
                                <li><i className="fa fa-angle-right"></i><a href="">Medical Research</a></li>
                                <li><i className="fa fa-angle-right"></i><a href="">Emergency Service</a></li>
                                <li><i className="fa fa-angle-right"></i><a href="">Ambulance</a></li>
                                <li><i className="fa fa-angle-right"></i><a href="">Easy Payment</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tpost">
                            <h4>Latest Posts</h4>
                            <ul className="list-unstyled">
                                <li><i className="fa-brands fa-twitter"></i>Lorem ipsum dolor sit amet, consec... <a href="">https://bh.com/</a></li>
                                <li><i className="fa-brands fa-twitter"></i>Lorem ipsum dolor sit amet, consec... <a href="">https://bh.com/</a></li>
                                <li><i className="fa-brands fa-twitter"></i>Lorem ipsum dolor sit amet, consec... <a href="">https://bh.com/</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="newsletter">
                            <h4>Newsletter</h4>
                            <form>
                                <input type="text" name="name" placeholder="Your Name" required/>
                                <input type="text" name="email" placeholder="Your Email" required/>
                                <button type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="f-menu text-center">
                            <ul className="menu list-unstyled list-inline">
                                <li className="list-inline-item"><a href="">Home</a></li>
                                <li className="list-inline-item"><a href="">About</a></li>
                                <li className="list-inline-item"><a href="">Service</a></li>
                                <li className="list-inline-item"><a href="">Doctor</a></li>
                                <li className="list-inline-item"><a href="">Blog</a></li>
                                <li className="list-inline-item"><a href="">Contact</a></li>
                            </ul>
                            <p>Copyright © 2023 </p>
                            <ul className="social list-unstyled list-inline">
                                <li className="list-inline-item"><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa-brands fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa-brands fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                        <div className="back-to-top text-center">
                            {/* begin Back to Top button */}
                            <a className="back_to_top" title="Наверх">&uarr;</a>
                            {/* end Back to Top button */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>  
  );
}

export default Footer;
