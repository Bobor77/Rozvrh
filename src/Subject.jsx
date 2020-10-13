import React from 'react';
import './Subject.css'

const classMap = {
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
    "odp": "odp",
    "cas": "pro",
    "asw": "pro",
    "pro": "pro",
    "sos": "fun",
    "cio": "fun",
    "obn": "obn"
}; 

const linkMap = {
    "net": "https://ssosta.webex.com/meet/kovalcik",
    "mat": "https://ssosta.webex.com/meet/dubrovcak",
    "sjl": "",
    "tsv": "https://ssosta.webex.com/meet/kristian.klein1234",
    "fyz": "https://ssosta.webex.com/join/brezinamichalssosta",
    "eko": "https://ssosta.webex.com/meet/ondruska.ssosta",
    "sgp": "https://mail.google.com",
    "odpG": "https://ssosta.webex.com/meet/blukusova",
    "pro": "https://ssosta.webex.com/meet/martinschiller13",
    "fun": "https://ssosta.webex.com/meet/zingor.peter",
    "obn": "https://ssosta.webex.com/meet/geletkova"
};


class Subject extends React.Component {

    render() {

        const teacher = classMap[this.props.name];

        if (teacher === "anj") {
            return (
                <td className={teacher}>
                    <a 
                      href="https://ssosta.webex.com/meet/monika.cernakova" 
                      target="_blank">
                        {this.props.name.toUpperCase()}-R
                    </a>
                    <br />
                    <a 
                      href="https://meetingsemea6.webex.com/meet/gabika.vargova"
                      target="_blank">
                        {this.props.name.toUpperCase()}-K  
                    </a>
                </td>
            );
        } else if (teacher === "odp"){
            return (
                <td className={teacher}>
                    <a 
                      href="https://ssosta.webex.com/meet/kovalcik" 
                      target="_blank">
                        ODP-K
                    </a>
                    <br />
                    <a 
                      href="https://ssosta.webex.com/meet/blukusova"
                      target="_blank">
                        ODP-L 
                    </a>
                </td>
            );
        }
        return <td className={teacher}><a href={linkMap[teacher]} target="_blank">{this.props.name.toUpperCase()}</a></td>
    }

}

export default Subject;