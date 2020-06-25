import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            {'Open up a new terminal in VSCode and type'}
            <p>
                <code>{'yarn start:server'}</code>
            </p>
            {'Then navigate to '}
            <a href="http://localhost:4000/api/helloworld">{'here'}</a>
            <p>
                {
                    'Everything in the server folder will contain our server side code'
                }
            </p>
        </div>
    );
}

export default App;
