import React from 'react';
import Subject from './Subject.jsx';

class Day extends React.Component {

    render() {
        return (
            <tr>
                <th>{this.props.name}</th>
                <Subject name="pos"/>
            </tr>
        );
    }

}

export default Day;