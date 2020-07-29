import React, { useState, useEvent, useEffect } from 'react';
import './App.css';
import BeerSearch from './components/BeerSearch/BeerSearch';
import { Switch, Route } from 'react-router-dom';
import BeerInfo from './components/BeerSearch/BeerInfo';

function App() {
    return (
        <Switch>
            <Route exact path={'/'}>
                <BeerSearch />
            </Route>
            <Route exact path="/info/:id">
                <BeerInfo />
            </Route>
        </Switch>
    );
}

export default App;
