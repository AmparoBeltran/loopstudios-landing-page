import { PortfolioStyled } from './styles/Portfolio.styled';
import { data } from '../data';

export default function Portfolio() {


    return (
        <PortfolioStyled>

            <h1>Our creations</h1>
            <div className="portfolio-container">
                {data.map((item, index) => (
                    <div key={index} className="portfolio">
                        <h2>{item.titleTop}<br />{item.titleBottom}</h2>
                        <div className="overlay">
                            <picture>
                                <source media="(max-width:1439px)" srcSet={`${item.imgMob}`} />
                                <source media="(min-width:1440px)" srcSet={`${item.imgDesk}`} />
                                <img src={`${item.imgMob}`} alt='portfolio-image' />
                            </picture>
                        </div>
                    </div>
                ))}
            </div>
            <button>See all</button>
        </PortfolioStyled>
    )
}

