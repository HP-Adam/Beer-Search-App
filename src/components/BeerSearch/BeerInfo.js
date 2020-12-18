import React from 'react';
import { useParams } from 'react-router-dom';
import SingleBeerQuery from './SingleBeerMutation';
import { useQuery } from '@apollo/react-hooks';
import './BeerInfo.css';

function BeerInfo() {
    const params = useParams();
    const { data: beerData } = useQuery(SingleBeerQuery, {
        variables: { id: params.id },
    });
    if (!beerData) {
        return null;
    }
    return (
        <div data-testid="BeerInfo">
            <h1 className="Title" data-testid="Title">
                {beerData.singleBeer.name}
            </h1>
            <div className="BeerInfoCard">
                <img
                    className="BeerImage"
                    src={beerData.singleBeer.image}
                    alt="beer"
                    data-testid="BeerImage"
                />
                <div className="InfoText">
                    <h2 className="SmallTitle" data-testid="SmallTitle">
                        {beerData.singleBeer.name}
                    </h2>
                    <div className="Description">
                        <p data-testid="Description">
                            {beerData.singleBeer.description}
                        </p>
                        <p data-testid="ABV">Abv: {beerData.singleBeer.abv}</p>
                    </div>
                    <h2 className="SmallTitle">Pairs best with:</h2>
                    <ul className="Description">
                        {beerData.singleBeer.foodPairing.map((item, i) => {
                            return (
                                <li key={i} data-testid={`FoodList${i}`}>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BeerInfo;
