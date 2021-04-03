import React, { Component } from 'react';

import './Personal.scss'
import { Card } from 'react-bootstrap';

class Personal extends Component {

    render() {
        let data = null;
        data = (
            this.props.data.map( data => {
                return (
                    <tr key={data.id}>
                        <td className="personal-title"><b><p>{data.title}:</p></b></td>
                        <td className="personal-data"><p>{data.data}</p></td>
                    </tr>
                )
            })
        );
        return (
            <div className="personal-container">
                <Card>
                    <Card.Header>
                        <Card.Title>{this.props.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <table className="personal-table">
                            <tbody>
                                {data}
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default Personal;