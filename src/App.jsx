// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Day from './Day.jsx'; 
import Line from './Line.jsx'

class App extends React.Component {

    render() {

        const numbers = [1, 2, 3, 4, 5, 6, 7].map(number => (
            <th>{number}</th>
        ));;

        return (
            <div id="main">
                <table>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            {numbers}
                        </tr>
                    </thead>
                    <tbody>
                        <Day name="PON" subjects="odp odp cvm tsv anj sjl obn" index="1"/>
                        <Day name="UTO" subjects="mat fyz pos pos anj eko eko" index="2"/>
                        <Day name="STR" subjects="mat anj sjl sgp cas odp odp" index="3"/>
                        <Day name="ŠTV" subjects="asw anj mat fyz tsv pro pro" index="4"/>
                        <Day name="PIA" subjects="sgp sos sjl pos cps kaj cio" index="5"/>
                    </tbody>
                </table>
                <Line/>
            </div>
        );
    }

}

export default App;
