import React, { useState } from 'react';
import API from '../utils/apiroutes';
import Searchbar from '../components/Searchbar/Searchbar'
import BookResult from '../components/BookResult/BookResult'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function BookSearch() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    };

    const searchFunction = event => {
        event.preventDefault();
        var startIndex = 1;
        let searchData = [];
        if (!searchTerm) {
            console.log("no search term")
            return
        }
        else {
            for (var i = 0; i <= 2; i ++) {
                startIndex = (40 * i) + 1
                API.searchBooks(searchTerm, startIndex)
                .then (results => {
                    results.data.items.forEach(item => {
                        if (typeof item.volumeInfo.categories !== 'undefined') {
                            if (item.volumeInfo.categories.includes("Juvenile Fiction") || item.volumeInfo.categories.includes("Juvenile Nonfiction")) {
                                searchData.push(item)
                            }
                    }})
                   
            }).catch(err => {
                console.log(err)
            })
        }
        console.log(searchData)
        setSearchResults(searchData)
        }}
    

    const renderAuthors = (authors) => {
        if (Array.isArray(authors)) {
           return authors.join(", ")
        } else if (!authors) {
            return "Unknown"
        } else {
            return(authors)
        }
    }

    return (
        <Container>
             <Searchbar
             searchTerm= {searchTerm}
             handleChange= {handleChange} 
             searchFunction= {searchFunction}
             />

        <Row className="justify-content-md-center" sm={12}>


            {searchResults.map(book => {
                return <BookResult
                key= {book.id}
                title= {book.volumeInfo.title}
                authors= {book.volumeInfo.authors}
                author = {renderAuthors}
                image= {book.volumeInfo.imageLinks.thumbnail}
                link= {book.volumeInfo.infoLink}
                />

            })}

            </Row>
           

        </Container>
       
    )
}