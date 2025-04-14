import React from 'react'

export const Header = ({navbarOpen, setNavbarOpen}) => {
    return (
        <div className="d-flex header justify-content-between align-items-center">
            <div className="logo">STEPHANIE LOPES</div>
            <button className={navbarOpen ? 'menu-btn expanded' : 'menu-btn'} onClick={() => setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}>
                <div className='menu-icon-container'>
                    <span className='icon-line'></span>
                    <span className='icon-line'></span>
                    <span className='icon-line'></span>
                </div>
            </button>
        </div>
    )
}

