import "../../components-css/NavBar.css";
import icon from "../../assets/physics.png";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div id="nav-bar">
                <div className="nav-item">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <img src={icon} alt="" className="nav-icon" />
                        <p className="nav-text">home.tsx</p>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <img src={icon} alt="" className="nav-icon" />
                        <p className="nav-text">about.tsx</p>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        <img src={icon} alt="" className="nav-icon" />
                        <p className="nav-text">projects.tsx</p>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default NavBar;
