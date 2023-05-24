import { HeroStyled } from "./styles/Hero.styled";
import Menu from './Menu';

export default function Hero() {

    return (
        <HeroStyled>
            <div className="navigation">
                <img src="/images/logo.svg" alt="logo" />
                <Menu />
            </div>
            <h1>Immersive experiences that deliver</h1>
        </HeroStyled>
    )
}