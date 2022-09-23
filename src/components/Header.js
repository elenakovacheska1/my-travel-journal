import React from 'react';

let Header = () => {
    return(
        <div className='header'>
            <img className='header--logo' src='/images/logo.png' alt='white globe logo'></img>
            <h3 className='header--text'>my travel journal.</h3>
        </div>
    );
}

export default Header;