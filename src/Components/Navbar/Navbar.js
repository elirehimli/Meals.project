import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../Img/logo.png"
import "../Navbar/Navbar.css"

function Navbar() {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }
        
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    // const toggleSubmenu = () => {
    //     setMenuSubMenu(isMenuSubMenu === false ? true : false);
    // };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }

    return (
        <header className="header__middle">
            <div className="navbar">
              
                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        {/* <NavLink to="/"> */}
                            <img src={logo} alt="logo" />
                        {/* </NavLink> */}
                    </div>
                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {
                                isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><FaTimes /></span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><GiHamburgerMenu /></span>
                                </>
                            }
                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item"><NavLink onClick={toggleClass} to={`/`}>Home</NavLink></li>
                                
                                {/* <li className="dropdown menu-item"><NavLink to={`#`} className="dropbtn">Pages<MdOutlineArrowDropDown /></NavLink>
                                    <div className="dropdown-content">
                                        <NavLink activeClassName='is-active' onClick={toggleClass} to={`/link1`}>Link 1</NavLink>
                                        <NavLink activeClassName='is-active' onClick={toggleClass} to={`/link2`}>Link 2</NavLink>
                                        <NavLink activeClassName='is-active' onClick={toggleClass} to={`/link3`}>Link 3</NavLink>
                                    </div>
                                </li> */}
                                <li className="menu-item"><NavLink onClick={toggleClass} activeClassName='is-active' to={`/chefListPage`}>Chef List Pages</NavLink></li>
                                <li className="menu-item"><NavLink onClick={toggleClass} activeClassName='is-active' to={`/recipes`}>Recipe</NavLink></li>
                                <li className="menu-item"><NavLink onClick={toggleClass} activeClassName='is-active' to={`/faq`}>FAQ</NavLink></li>
                                <li className="menu-item"><NavLink onClick={toggleClass} activeClassName='is-active' to={`/aboutUs`}>About Us</NavLink></li>
                                <li className="menu-item"><NavLink onClick={toggleClass} activeClassName='is-active' to={`/contactUs`}>Contact Us</NavLink></li>
                                <li className="menu-item"><button type='submit'>SUBMIT RECIPE</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
          
        </header>
    )
}

export default Navbar
