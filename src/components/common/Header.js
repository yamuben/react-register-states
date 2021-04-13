import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/style.scss';
import SearchInput from './Search';

const Header =()=>{
    return(
        <div className="header-section">
            <div className="nav-logo">
                <Link to='/'> Student</Link>
            </div>

<SearchInput/>
            <div className="nav-menu">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/"> About Us </Link>
                    </li>
                    <li>
                        <Link to="/"> Login </Link>
                    </li>
                </ul>
            </div>

        </div>

    );
}

export default Header;