import React, { useState } from 'react';
import './Navbar.css'; // Create this CSS file for styles

const cities = [
    { name: 'Ahmedabad', icon: '🏙️' },
    { name: 'Bangalore', icon: '🏙️' },
    { name: 'Bhubaneswar', icon: '🏙️' },
    { name: 'Chandigarh', icon: '🏙️' },
    { name: 'Chennai', icon: '🏙️' },
    { name: 'Dehradun', icon: '🏙️' },
    { name: 'Delhi', icon: '🏙️' },
    { name: 'Faridabad', icon: '🏙️' },
    { name: 'Ghaziabad', icon: '🏙️' },
    { name: 'Greater Noida', icon: '🏙️' },
    { name: 'Gurgaon', icon: '🏙️' },
    { name: 'Hyderabad', icon: '🏙️' },
    { name: 'Indore', icon: '🏙️' },
    { name: 'Jaipur', icon: '🏙️' },
    { name: 'Kolkata', icon: '🏙️' },
    // Add more cities as needed
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-logo-container">
                <img src="https://www.propertyplateau.com/wp-content/uploads/2023/07/Property_Plateau_logo_blue.png" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li className="nav-item city-dropdown-item">
                    <a href="#" onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>City</a>
                    {isCityDropdownOpen && (
                        <div className="city-dropdown">
                            <div className="country-select">
                                <button>India</button>
                                <button>UAE</button>
                                <button>Canada</button>
                                <button>Australia</button>
                            </div>
                            <input type="text" placeholder="Select or type your city" className="city-search" />
                            <div className="city-list">
                                {cities.map(city => (
                                    <div key={city.name} className="city-item">
                                        {city.icon} {city.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <a href="#">Buy</a>
                </li>
                <li className="nav-item">
                    <a href="#">Rent</a>
                </li>
                <li className="nav-item mega-menu-item">
                    <a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>Projects</a>
                    {isMenuOpen && (
                        <div className="mega-menu">
                            <div className="mega-menu-column">
                                <h3>New Projects</h3>
                                <a href="#">New Projects In Mumbai</a>
                                <a href="#">New Projects In Delhi</a>
                                <a href="#">New Projects In Noida</a>
                                <a href="#">New Projects In Gurgaon</a>
                                <a href="#">New Projects In Pune</a>
                                <a href="#">New Projects In Bangalore</a>
                                <a href="#">New Projects In Hyderabad</a>
                                <a href="#">New Projects In Chennai</a>
                                <a href="#">New Projects In Thane</a>
                                <a href="#">New Projects In Navi Mumbai</a>
                            </div>
                            <div className="mega-menu-column">
                                <h3>Ready To Move Projects</h3>
                                <a href="#">Ready To Move Projects In Mumbai</a>
                                <a href="#">Ready To Move Projects In Delhi</a>
                                <a href="#">Ready To Move Projects In Noida</a>
                                <a href="#">Ready To Move Projects In Gurgaon</a>
                                <a href="#">Ready To Move Projects In Pune</a>
                                <a href="#">Ready To Move Projects In Bangalore</a>
                                <a href="#">Ready To Move Projects In Hyderabad</a>
                                <a href="#">Ready To Move Projects In Chennai</a>
                                <a href="#">Ready To Move Projects In Thane</a>
                                <a href="#">Ready To Move Projects In Navi Mumbai</a>
                            </div>
                            <div className="mega-menu-column">
                                <h3>Under Construction Projects</h3>
                                <a href="#">Under Construction Projects In Mumbai</a>
                                <a href="#">Under Construction Projects In Delhi</a>
                                <a href="#">Under Construction Projects In Noida</a>
                                <a href="#">Under Construction Projects In Gurgaon</a>
                                <a href="#">Under Construction Projects In Pune</a>
                                <a href="#">Under Construction Projects In Bangalore</a>
                                <a href="#">Under Construction Projects In Hyderabad</a>
                                <a href="#">Under Construction Projects In Chennai</a>
                                <a href="#">Under Construction Projects In Thane</a>
                                <a href="#">Under Construction Projects In Navi Mumbai</a>
                            </div>
                            <div className="mega-menu-column">
                                <h3>New Launch Projects</h3>
                                <a href="#">New Launch Projects In Mumbai</a>
                                <a href="#">New Launch Projects In Delhi</a>
                                <a href="#">New Launch Projects In Noida</a>
                                <a href="#">New Launch Projects In Gurgaon</a>
                                <a href="#">New Launch Projects In Pune</a>
                                <a href="#">New Launch Projects In Bangalore</a>
                                <a href="#">New Launch Projects In Hyderabad</a>
                                <a href="#">New Launch Projects In Chennai</a>
                                <a href="#">New Launch Projects In Thane</a>
                                <a href="#">New Launch Projects In Navi Mumbai</a>
                            </div>
                        </div>
                    )}
                </li>
                <li className="nav-item">
                    <a href="#">Agents</a>
                </li>
                <li className="nav-item">
                    <a href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#">Resources</a>
                </li>
            </ul>
            <button className="post-property-button">New Projects</button>
        </nav>
    );
}

export default Navbar;

