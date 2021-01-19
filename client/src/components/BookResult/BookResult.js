import React from 'react';
import Card from 'react-bootstrap/Card';

export default function BookResult(props) {

    return (
            <Card xs={2}>
                 <Card.Img variant="top" src={props.image} alt={props.title}/>
                 <Card.Body>
                     <Card.Title>{props.title}</Card.Title>
                     <Card.Text>
                     {props.author(props.authors)}

                     </Card.Text>
                 </Card.Body>

                 <Card.Footer>
                    <a href={props.link} target='_blank'>View on Google Books</a>
                 </Card.Footer>
            </Card>
    )
}