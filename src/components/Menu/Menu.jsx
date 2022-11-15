import sprites from '../../icons/icons.svg';
import './menu.scss';
import { useNavigate } from "react-router-dom";

function Menu() {

    const navigate = useNavigate();

    const handleNavLink = (e) => {
        navigate(`/${e.currentTarget.getAttribute('name')}`);
    }

    return (
        <nav className="menu">
            <ul>
                <li name="" onClick={handleNavLink}>
                    <svg>
                        <use href={sprites + '#house'} />
                    </svg>
                    <h2>Home</h2>
                </li>
                <li name="about" onClick={handleNavLink}>
                    <svg>
                        <use href={sprites + '#user'} />
                    </svg>
                    <h2>About</h2>
                </li>
                <li name="works" onClick={handleNavLink}>
                    <svg>
                        <use href={sprites + '#case'} />
                    </svg>
                    <h2>Portfolio</h2>
                </li>
                <li name="contact" onClick={handleNavLink}>
                    <svg>
                        <use href={sprites + '#mail'} />
                    </svg>
                    <h2>Contact</h2>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
