import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    const [token, setToken] = useState(null);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate= useNavigate();

    useEffect(() => {
        // Retrieve the token from local storage
        const storedToken = localStorage.getItem('token');


        if (storedToken) {
            setToken(storedToken);

            // Retrieve email and phone number from local storage
            const storedName = localStorage.getItem('fullName');
            const storedPhoneNumber = localStorage.getItem('phoneNumber');

            if (storedName && storedPhoneNumber) {
                setName(storedName);
                setPhoneNumber(storedPhoneNumber);
            }
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('fullName');
        localStorage.removeItem('phoneNumber');

        if (window.location.pathname === '/') {
            // Reload the page
            window.location.reload();
          }
          else{
        navigate('/');
          }


    };
    const handleLogoClick = () => {
        navigate('/');
      };
      const handleFindDocotr = () => {
        navigate('/doctorlist');
      };
    


    return (
        <>
            <header className="pageHeader">
                <nav className="navbar navbar-expand-lg navbar-light navbar-white bg-white" aria-label="Eighth navbar example">
                    <div className="container">
                        <a className="navbar-brand" onClick={ handleLogoClick} ><img src="/images/logo.png" alt="Logo" className="" /></a>
                        <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample07">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={handleFindDocotr}>Find Doctor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Video Consult</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Medicine</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Lab Test</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Surgeries</a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown07">
                                        <li><a className="dropdown-item" href="javascript:void(0)">Action</a></li>
                                        <li><a className="dropdown-item" href="javascript:void(0)">Another action</a></li>
                                        <li><a className="dropdown-item" href="javascript:void(0)">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center flex-sm-wrap rightNav">
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">For Corporates</a>
                                    <ul className="dropdown-menu liststye-none" aria-labelledby="dropdown07">
                                        <li><a className="dropdown-item" href="javascript:void(0)">Health & Wellness Plans</a></li>
                                        <li><a className="dropdown-item" href="javascript:void(0)">Group Insurance</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">For Corporates</a>
                                    <ul className="dropdown-menu liststye-none" aria-labelledby="dropdown07">
                                        <li><a className="dropdown-item" href="javascript:void(0)">Health & Wellness Plans</a></li>
                                        <li><a className="dropdown-item" href="javascript:void(0)">Group Insurance</a></li>
                                    </ul>
                                </div>
                                {token ? (
                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Kundan Kumar</a>
                                        <ul className="dropdown-menu liststyle-none" aria-labelledby="dropdown07">
                                            <li>
                                                <div className="profile-info">
                                                    <img
                                                        className="profile-img"
                                                        src="https://accounts.practo.com/profile_picture/20080310/medium_thumbnail"
                                                        alt=""
                                                        width="30"
                                                        height="30"
                                                    />
                                                    <div>
                                                        <span>{name}</span>
                                                        <span className="phone-number">{phoneNumber}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" >Health & Wellness Plans</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" >Group Insurance</a>
                                            </li>
                                            <li className="dropdown-divider"></li>
                                            <li>
                                                <a className="dropdown-item" >Settings</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item logout-click" onClick={handleLogout}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>) : (
                                    <span>
                                        <a
                                            href="/login"
                                            name="Practo login"
                                            event="Nav Bar:Interacted:Practo login"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Login / Signup
                                        </a>
                                    </span>)}








                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
