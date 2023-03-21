import React, { useEffect } from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../assets/css/theme.css';
import '../assets/css/style.css';
import assetsLogo from '../assets/svg/logos/solys-logo-white.svg';
import assetsMockup from '../assets/img/mockup.svg';

function Body() {
    useEffect(() => {
        document.title = 'Solys YOLO';
    }, []);
    return (
        <div className='body text-start'>
            <div>
                <header id='header' className='navbar navbar-expand-lg navbar-end navbar-sticky-top navbar-light bg-black'>
                    <div className='container'>
                        <nav className='js-mega-menu navbar-nav-wrap'>
                            <a className='navbar-brand' href='../index.html' aria-label='Solys'>
                                <img className='navbar-brand-logo' src={assetsLogo} alt='Logo'/>
                            </a>

                            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                                aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-default'>
                                    <i className='bi-list'></i>
                                </span>
                                <span className='navbar-toggler-toggled'>
                                    <i className='bi-x'></i>
                                </span>
                            </button>

                            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                                <ul className='navbar-nav'>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

                 <div className='container content-space-t-3 content-space-t-lg-4 content-space-b-2'>
                    <div className='mx-auto'>
                        <h1 className='cdisplay-1'>Search Engine for Blockchain Data</h1>
                        <p className='display-6'>AI based Blockchain Analytics.</p>
                        <a className='btn btn-light btn-transition btn-lg'
                            href='https://themes.getbootstrap.com/product/Solys-multipurpose-responsive-template/' target='_blank'
                        >Get early
                            access
                            <i className='bi bi-arrow-right'></i></a>
                    </div>
                </div>
                <div className='w-100 mx-auto'>
                    <img className='img-fluid' src={assetsMockup} alt='Image Description'/>
                </div>
                <div className='shape-container content-space-t-3 content-space-t-lg-4'>
                    <div className='container'>
                        <div className=''>
                            <span className='text-cap'>Why Solys</span>
                            <h1 className='display-1'>Real-time Blockchain data at your finger tips</h1>
                        </div>
                        <div className='row content-space-t-lg-4 content-space-b-2'>
                            <div className='col-sm-6 col-md-4 mb-3 mb-sm-7'>
                                <div className='d-flex align-items-center mb-2'>
                                    <div className='flex-grow-1'>
                                        <h2 className='mb-0'>Blockchain Analytics for Crypto Investors</h2>
                                    </div>
                                </div>
                                <p>Get detailed market insight from millions of data points.</p>
                            </div>
                            <div className='col-sm-6 col-md-4 mb-3 mb-sm-7'>
                                <div className='d-flex align-items-center mb-2'>
                                    <div className='flex-grow-1'>
                                        <h2 className='mb-0'>Business Intelligence for DApps & DAOs</h2>
                                    </div>
                                </div>
                                <p>Generate reports on Conversion, Retention, and Engagement.</p>
                            </div>
                            <div className='col-sm-6 col-md-4 mb-3 mb-sm-7 mb-md-0'>
                                <div className='d-flex align-items-center mb-2'>
                                    <div className='flex-grow-1'>
                                        <h2 className='mb-0'>Custom Queries</h2>
                                    </div>
                                </div>
                                <p>AI based search engine to query any blockchain data.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='bg-black'>
                    <div className='container content-space-t-2 content-space-b-1'>
                        <div className='row mb-9'>
                            <div className='col-lg-3 mb-5 mb-lg-0'>
                                <a href='index.html' aria-label='Solys'>
                                    <img className='brand' src={assetsLogo} alt='Logo'/>
                                </a>
                            </div>
                            <div className='col-lg-3 mb-5 mb-md-0'>
                                <h5 className='text-white text-cap'>Help and advice</h5>
                                <ul className='list-unstyled list-py-1 mb-0'>
                                    <li><a className='link-sm link-light' href='#'>Contact us</a></li>
                                    <li><a className='link-sm link-light' href='#'>Terms of Use</a></li>
                                    <li><a className='link-sm link-light' href='#'>Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 mb-5 mb-md-0'>
                                <h5 className='text-white text-cap'>Company</h5>
                                <ul className='list-unstyled list-py-1 mb-0'>
                                    <li><a className='link-sm link-light' href='#'>About us</a></li>
                                    <li><a className='link-sm link-light' href='#'>Careers</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <p className='text-white-70 small mb-0'>© Solys. 2023. All rights reserved.</p>
                                <div className='col-auto'>
                                    <ul className='list-inline mb-0'>
                                        <li className='list-inline-item'>
                                            <a className='btn btn-ghost-light btn-sm btn-icon' href='#'>
                                                <i className='bi-twitter'></i>
                                            </a>
                                        </li>

                                        <li className='list-inline-item'>
                                            <a className='btn btn-ghost-light btn-sm btn-icon' href='#'>
                                                <i className='bi-github'></i>
                                            </a>
                                        </li>

                                        <li className='list-inline-item'>
                                            <a className='btn btn-ghost-light btn-sm btn-icon' href='#'>
                                                <i className='bi-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                 </div>
                             </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

function LandingPage() {
    return (
        <>
            {<Body />}
        </>
    );
}

export default LandingPage;