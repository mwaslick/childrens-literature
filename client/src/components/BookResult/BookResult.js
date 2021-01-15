import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

export default function BookResult(props) {

    return (
            <Card style={{ width: '18rem' }}>
                <h1>{props.title}</h1>
                <h2>{props.author(props.authors)}</h2>
                <img src={props.image} alt={props.title}></img>
            </Card>
    )
}