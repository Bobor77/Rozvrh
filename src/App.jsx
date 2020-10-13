import { render } from '@testing-library/react';
// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Day from './Day.jsx'; 

class App extends React.Component {

    render() {

        const numbers = [1, 2, 3, 4, 5, 6, 7].map(number => (
            <th>{number}</th>
        ));;

        return (
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        {numbers}
                    </tr>
                </thead>
                <tbody>
                    <Day/>
                </tbody>
            </table>
        );
    }

}

export default App;
