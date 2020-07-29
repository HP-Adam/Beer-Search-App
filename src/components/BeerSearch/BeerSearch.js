import React, { useState, useEffect } from 'react';
import './BeerSearch.css';
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import BeerSearchMutation from './BeerSearchMutation';
import { useHistory, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import BeerCards from './BeerCards';
import qs from 'query-string';

function BeerSearch() {
    const history = useHistory();
    const location = useLocation();
    const params = qs.parse(location.search);
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value.replace(' ', '_'));
    };

    const [beer, { data: beerData }] = useMutation(BeerSearchMutation);
    const handleSearchClick = () => {
        if (userInput !== '') {
            beer({ variables: { food: userInput } });
            history.push(`/?food=${userInput}`);
        }
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const handleBeerCardClick = (id) => {
        history.push(`/info/${id}`);
    };

    useEffect(() => {
        if (params.food) {
            beer({ variables: { food: params.food } });
        }
    }, []);

    return (
        <div className="TitlePage">
            <h2 aria-label="What to Drink">What to Drink?</h2>
            <div className="AllBeer">
                <div className="SearchArea">
                    <Input
                        placeholder="What are you eating?"
                        onChange={handleInputChange}
                        onKeyPress={handleEnterKey}
                        aria-label="what are you eating"
                    />
                    <Button
                        type="primary"
                        onClick={handleSearchClick}
                        aria-label="search"
                    >
                        Search
                    </Button>
                </div>
                <div>
                    <BeerCards
                        beerData={beerData}
                        onClick={handleBeerCardClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default BeerSearch;
