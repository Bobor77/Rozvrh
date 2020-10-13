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
                    <Day name="PON" subjects=" odpN cvm tsv anj sjl obn"/>
                    <Day name="UTO" subjects="mat fyz pos pos anj eko eko"/>
                    <Day name="STR" subjects="mat anj sjl sgp cas odpG odpG"/>
                    <Day name="ŠTV" subjects="asw anj mat fyz tsv pro pro"/>
                    <Day name="PIA" subjects="sgp sos sjl pos cps kaj cio"/>
                </tbody>
            </table>
        );
    }

}

export default App;
