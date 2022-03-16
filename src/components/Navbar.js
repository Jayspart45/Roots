import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="w-25 ">
                        <img src="../images/Roots_logo.png" id="logo_1" className="img-fluid " />
                    </a>

                    <button
                        className="navbar-toggler "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"> Our products</a>
                            </li>
                        </ul>
                        <a>
                            <img src="../images/syona_logo.png" id="logo_1" className="img-fluid" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
