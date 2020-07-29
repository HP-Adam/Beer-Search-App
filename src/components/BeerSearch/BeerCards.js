import React from 'react';
import './BeerCards.css';

function BeerCards(props) {
    let beerList = props.beerData.beer.map((item, i) => {
        const handleClick = () => {
            props.onClick(item.id);
        };
        let beerImg =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaBxwVbcQGmKgrq4rGNOVcrGjfxM4EgZj9Ow&usqp=CAU';
        if (item.image !== null) {
            beerImg = item.image;
        }
        return (
            <div className="Cards" onClick={handleClick} aria-label={item.name}>
                <img className="BeerCardImg" src={beerImg} alt="beer" />
                <div className="BeerCardTextAlignment">
                    <h2 className="BeerCardText">{item.name}</h2>
                    <h3 className="BeerCardText">Abv: {item.abv}</h3>
                </div>
            </div>
        );
    });
    return <div className="BeerCardList">{beerList}</div>;
}

BeerCards.defaultProps = { beerData: { beer: [] } };
export default BeerCards;
