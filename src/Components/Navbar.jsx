import "../Styles/Navbar.css"
// import { BsGlobe } from "react-icons/bs";
// import { FaAngleDown } from "react-icons/fa6";
export const Navbar = () => {
    return (
        <div className="logoMainDiv">
            <div className="logoDiv">
                <img className="logo-img" src="logo.png" alt="Logo image" />
                <p>Velionex</p>
            </div>
            <div className="listDiv">
                <ul>
                    <li>Start</li>
                    <li>Wireless</li>
                    <li>Internet</li>
                    <li>Directv</li>
                    <li>About us</li>
                    {/* <li><BsGlobe /> < FaAngleDown /></li> */}
                    <li><img src="global.jpeg" alt="" /></li>
                </ul>
            </div>
            <div className="logoPara">
                <p>Call us +109 5000 200</p>
            </div>
        </div>
    )
}