import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Searchbar() {
    return(
        <Form>
            <Form.Label>Search for a book</Form.Label>
                <Form.Control type="text" placeholder="Enter text" id="booksearch" />

            
            <Button variant="primary" type="submit">
                    Submit
            </Button>
        </Form>


    )
}