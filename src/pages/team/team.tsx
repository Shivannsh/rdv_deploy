import React from 'react';
import Header from '../../components/header';

import Footer from '../../components/footer';

import { ctms } from './data';
import './team.css';
import SidebarNav from '../../components/SidebarNav/SidebarNav';

const Team = () => {
    return (
        <>
            <SidebarNav />
            <div style={{ backgroundColor: "#0A001B" }} >
                <div className='container' >
                    <div className='row justify-content-center'>
                        <div className='col text-center'>
                            <div className='px-3'>
                                <br />
                                <br />

                                <p className='text-white py-5 fw-bold fs-1'>
                                    <span style={{ color: "#efc36a" }}>MEET</span> THE TEAM.
                                </p>
                                <p className='pb-2 fs-5' style={{ color: "#efc36a" }}>Get to know the people leading the way in Rendezvous '23</p>
                            </div>

                            {/* MOBILE VIEW */}
                            {/* <div className='col d-md-none'>
                                <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
                                    <div className='carousel-inner'>
                                        {ctms.map((ctm, index) => (
                                            <div className={`carousel-item ${index === 1 ? 'active' : ''}`} key={index}>
                                                <div className='d-block w-1oo'>
                                                    <div className='card  border-0' style={{ backgroundColor: "#0A001B" }}>
                                                        <div className='container'>
                                                            <div className='row justify-content-center'>
                                                                <a className='text-decoration-none' href={`${ctm.url}`}>
                                                                    <div className='card-body p-0'>
                                                                        <img src={ctm.src} alt='' className='img-fluid w-50 p-0 img-hover' />
                                                                        <div>
                                                                            <p className='text-t2 fs-2 fw-bold pt-3'>{ctm.name.toUpperCase()}</p>
                                                                            <p className='text-b2 mt-0 text-gray fs-6'>
                                                                                <i>{ctm.position}</i>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className='carousel-control-prev'
                                        type='button'
                                        data-bs-target='#carouselExampleControls'
                                        data-bs-slide='prev'
                                    >
                                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Previous</span>
                                    </button>
                                    <button
                                        className='carousel-control-next'
                                        type='button'
                                        data-bs-target='#carouselExampleControls'
                                        data-bs-slide='next'
                                    >
                                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Next</span>
                                    </button>
                                </div>
                            </div> */}
                            {/* DESKTOP VIEW */}
                            <div className='col '>
                                <div className='container'>
                                    <div className='row my-5 row-cols-md-3 row-cols-lg-4'>
                                        {ctms.map((ctm, index) => (
                                            <div className='col' key={index}>
                                                <div className='card my-2 shadow-hover border-0 transition' style={{ backgroundColor: "#0A001B" }}>
                                                    <a className='text-decoration-none' href={`${ctm.url}`}>
                                                        <div className='card-body px-0'>
                                                            <div className='row justify-content-center'>
                                                                <img src={ctm.src} alt='' className='w-75 img-fluid p-0 img-hover' />
                                                            </div>
                                                            <div className='text-center'>
                                                                <p className='text-t2 fw-bold pt-3 pb-0 mb-1 fs-10'>{ctm.name.toUpperCase()}</p>
                                                                <p className='mt-0 fs-6' style={{ color: "#efc36a" }}>
                                                                    <i>{ctm.position}</i>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Team;