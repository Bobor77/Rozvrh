import React from 'react';
import './Subject.css'

const classMap = {
    "odpN": "net",
    "pos": "net",
    "cps": "net",
    "cvm": "mat",
    "mat": "mat",
    "sjl": "sjl",
    "tsv": "tsv",
    "anj": "anj",
    "kaj": "anj",
    "fyz": "fyz",
    "eko": "eko",
    "sgp": "sgp",
    "odpG": "odpG",
    "cas": "pro",
    "asw": "pro",
    "pro": "pro",
    "sos": "fun",
    "cio": "fun",
    "obn": "obn"
}; 


class Subject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: classMap[props.name]
        } 
    }


    render() {
        return <td className={this.state.color}>{this.props.name.toUpperCase()}</td>
    }

}

export default Subject;