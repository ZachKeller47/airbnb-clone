import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
    return (
        <div className='header'>
            <img 
                className='header__icon'
                src='https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg'
                alt='Airbnb Logo'
            />
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountBoxIcon />
            </div>
        </div>
    )
}

export default Header
