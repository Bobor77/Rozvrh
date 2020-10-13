import React from 'react';
import Subject from './Subject.jsx';

class Day extends React.Component {
    
    render() {

        const subjects = this.props.subjects.split(' ').map(subject => (
            <Subject name={subject}/>
        ));

        return (
            <tr>
                <th>{this.props.name}</th>
                {subjects}
            </tr>
        );
    }

}

export default Day;