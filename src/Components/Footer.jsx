import "../Styles/Footer.css";

export const Footer = () => {
    return (
    <footer>
        
        <div className="footerMainDiv">
            <div className="logo-Div">
                <img className="footerlogo-img" src="footerlogo.png" alt="" />
                <p>Velionex</p>
            </div>

            <section className="products-Div">
                <div>
                    <p>Products</p>
                    <hr />
                    <p>Wireless</p>
                    <p>Internet</p>
                    <p>Directv</p>
                </div>

                <div>
                    <p>Company</p>
                    <hr />
                    <p>About us</p>
                    <p>Contact</p>
                </div>
            </section>
            <section className="product-Div">
            <div>
                    <p>Follow us</p>
                    <hr />
                    <p>Instagram</p>
                    <p>News Letter</p>
                </div>
                <div className="footer-description">
                <p>
                    Velionex is a trusted provider with 20+ years of experience of providing tailored internet and mobile services. As an authorized partner and reseller for renowned brands such as AT&T, Frontier Communications, and Kinetic/Windstream, we provide customers with a variety of subscription options designed to meet their unique needs.
                </p>
            </div>
            </section>
            <div className="copyrightDiv">
                <p className="allright">All rights reserved © 2024 Velionex</p>
                <p className="priacy">Privacy Policy</p>
                <p className="cookie">Cookie Policy</p>
            </div>

        </div>
        </footer>
    );
};
