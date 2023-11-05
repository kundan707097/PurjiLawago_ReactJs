import React, { } from "react";

function Header() {
  return (
    <>
        {/*Navigation*/}
        <header className="pageHeader">
            <nav className="navbar navbar-expand-lg navbar-light navbar-white bg-white" aria-label="Eighth navbar example">
                <div className="container">
                <a className="navbar-brand" href="javascript:void(0)"><img src="/images/logo.png" alt="Logo" className=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="javascript:void(0)">Find Doctor</a>
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
                        {<span>
                            <a
                                href="/login"
                                name="Practo login"
                                event="Nav Bar:Interacted:Practo login"
                                className="btn btn-sm btn-outline-primary"
                            >
                                Login / Signup
                            </a>
                        </span>

                        /* <span><a href="/login?redirectToPath=https%3A%2F%2Fwww.practo.com%2F" name="Practo login" event="Nav Bar:Interacted:Practo login" className="btn btn-sm btn-outline-primary">Login / Signup</a></span> */}
                        
                    </div>
                </div>
                </div>
            </nav>
        </header>  
    </>  
  );
}

export default Header;
