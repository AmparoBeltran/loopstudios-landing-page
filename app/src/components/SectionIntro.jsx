import { SectionIntroStyled } from "./styles/SectionIntro.styled";

export default function SectionIntro() {
    return (
        <SectionIntroStyled>
            <picture>
                <source media="(max-width:1439px)" srcSet="/images/mobile/image-interactive.jpg" />
                <source media="(min-width:1440px)" srcSet="/images/desktop/image-interactive.jpg" />
                <img src="/images/desktop/image-interactive.jpg" alt="Music" />
            </picture>
            <div className="intro">
                <h1>The leader in interactive VR</h1>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </SectionIntroStyled>
    )
}