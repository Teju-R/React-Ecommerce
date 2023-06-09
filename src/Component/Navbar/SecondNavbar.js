import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

const SecondNavbar = () => {
    return (
        <div className='second-nav-flex-div'>
        
            <div className='second-nav-width-div'>
                <div className='second-nav-main-div'>
                    <div className='second-nav-main-flex-div'>
                
                        <div className='second-nav-main-contend-div' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <RxHamburgerMenu className="hamber-svg" />
                            <p>All</p>

                            <div>
                                <p>Amazon miniTV</p>
                            </div>
                            <div >
                                <p>Sells</p>
                            </div>
                            <div >
                                <p>Best Sellers</p>
                            </div>
                            <div >
                                <p>Mobile</p>
                            </div>
                            <div >
                                <p>Today's Deals</p>
                            </div>
                            <div >
                                <p>Customer services</p>
                            </div>
                            <div >
                                <p>New Releases</p>
                            </div>
                            <div >
                                <p>Electronics</p>
                            </div>
                            <div >
                                <p>Prime</p>
                            </div>
                            <div >
                                <p>Home & Kitchen</p>
                            </div>
                            <div >
                                <p>Fashion</p>
                            </div>
                            <div >
                                <p>Amazon Pay</p>
                            </div>
                            <div >
                                <p>New Launches from Mobile,Electronics & More|</p>
                            </div>
                            <div >
                                <p>Shop now</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecondNavbar