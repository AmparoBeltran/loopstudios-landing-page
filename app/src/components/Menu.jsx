import { MenuStyled } from "./styles/Menu.styled";
import { useState } from "react";

export default function Menu() {

    const [open, setOpen] = useState(false)

    function handleOpenBtn() {
        setOpen(true)
    }

    function handleCloseBtn() {
        setOpen(false)
    }

    return (
        <MenuStyled>
            <button onClick={handleOpenBtn}><img src="/images/icon-hamburger.svg" alt="icon-hamburger" /></button>
            <nav className={open ? 'open' : ''}>
                <div className="menu">
                    <div className="header">
                        <img className="logo" src="/images/logo.svg" alt="logo" />
                        <button onClick={handleCloseBtn}><img src="/images/icon-close.svg" alt="icon-close-menu" /></button>
                    </div>
                    <div className="nav">
                        <a className="underline" href="#">About</a>
                        <a className="underline" href="#">Careers</a>
                        <a className="underline" href="#">Events</a>
                        <a className="underline" href="#">Products</a>
                        <a className="underline" href="#">Support</a>
                    </div>
                </div>
            </nav>
        </MenuStyled>
    )
}