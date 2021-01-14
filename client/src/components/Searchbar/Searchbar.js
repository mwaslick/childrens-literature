import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Searchbar(props) {
    return(
        <Form>
            <Form.Label>Search for a book</Form.Label>
                <Form.Control type="text" placeholder="Enter text" value={props.searchTerm} onChange={props.handleChange} />

            
            <Button variant="primary" type="submit" onClick={props.searchFunction}>
                    Submit
            </Button>
        </Form>


    )
}