import "../Styles/MainComponents1.css"
import { FiPlusCircle } from "react-icons/fi";
export const MainComponent1 = () => {
    return (
        <div className="mainDiv">
            <div className="mainPara">
                <p className="firstpara">Flexible everyday</p>
                <p>At Velionex, we connect you with the provider that best fits your needs.Wireless services, high-speed internet, and premium entertainment – simple, seamless, and tailored for your everyday life.</p>
                <hr className="hrline" />
                <div className="cirlceDiv">
                    <p>Wireless</p>
                    <FiPlusCircle className="circle" />
                </div>
                <hr />

                <div className="cirlceDiv">
                    <p>Internet</p>
                    <FiPlusCircle className="circle" />

                </div>
                <hr />

                <div className="cirlceDiv">
                    <p>Directv</p>
                    <FiPlusCircle className="circle" />
                </div>
                <hr />
            </div>

            <div className="mainimg">
                <img src="main1Img.jpeg" alt="" />
            </div>
        </div>
    )
}