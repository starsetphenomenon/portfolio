import sprites from '../../icons/icons.svg';
import './menu.scss';
import { NavLink } from "react-router-dom";

function Menu() {



    return (
        <nav className="menu">
            <ul>
                <li>
                    <NavLink to="/">
                        <svg>
                            <use href={sprites + '#house'} />
                        </svg>
                        <h2>Home</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <svg>
                            <use href={sprites + '#user'} />
                        </svg>
                        <h2>About</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/works">
                        <svg>
                            <use href={sprites + '#case'} />
                        </svg>
                        <h2>Portfolio</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <svg>
                            <use href={sprites + '#mail'} />
                        </svg>
                        <h2>Contact</h2>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
