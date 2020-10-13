import React from 'react';
import './Day.css'
import Subject from './Subject.jsx';

class Day extends React.Component {
    
    render() {

        const date = new Date;

        const subjects = this.props.subjects.split(' ').map(subject => (
            <Subject name={subject}/>
        ));

        if ( date.getDay().toString() === this.props.index ) {
            return (
            <tr className="active">
                <th>{this.props.name}</th>
                {subjects}
            </tr>
                
            )
        } else {
            return (
                <tr>
                    <th>{this.props.name}</th>
                    {subjects}
                </tr>
            );
        }
    }

}

export default Day;