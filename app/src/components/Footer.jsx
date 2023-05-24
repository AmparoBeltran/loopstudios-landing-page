import { FooterStyled } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <FooterStyled>

            <div className="wrapper">
                <img src="/images/logo.svg" alt="logo" />
                <div className="nav-links">
                    <a className="underline" href="#">About</a>
                    <a className="underline" href="#">Careers</a>
                    <a className="underline" href="#">Events</a>
                    <a className="underline" href="#">Products</a>
                    <a className="underline" href="#">Support</a>
                </div>
            </div>

            <div className="more-info">
                <div className="social">
                    <a className="underline" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                    <a className="underline" href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a className="underline" href="#"><i className="fa-brands fa-pinterest"></i></a>
                    <a className="underline" href="#"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
                <small>© 2021 Loopstudios. All rights reserved.</small>
            </div>
        </FooterStyled>
    )
}