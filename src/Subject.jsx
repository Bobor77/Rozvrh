import React from 'react';
import './Subject.css'

class Subject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            color: this.state.classMap[this.state.name],
            classMap: {
                odpN: "net",
                pos: "net",
                cps: "net",
                cvm: "mat",
                mat: "mat",
                sjl: "sjl",
                tsv: "tsv",
                anj: "anj",
                kaj: "anj",
                fyz: "fyz",
                eko: "eko",
                sgp: "sgp",
                odpG: "odpG",
                cas: "pro",
                asw: "pro",
                pro: "pro",
                sos: "fun",
                cio: "fun",
                obn: "obn"
            }
        } 
    }

    render() {
    
        /*this.setState({

        });
    */
        return <td className={this.state.color}>{this.state.name}</td>
    }

}

export default Subject;