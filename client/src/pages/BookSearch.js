import React, { useState, useEffect } from 'react';
import API from '../utils/apiroutes';
import Searchbar from '../components/Searchbar/Searchbar'
import BookResult from '../components/BookResult/BookResult'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function BookSearch() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value)
    };


    const searchFunction = event => {
        event.preventDefault();
        var startIndex = 1;
        if (!searchTerm) {
            console.log("no search term")
            return
        }
        else API.searchBooks(searchTerm, startIndex)
        .then (results => {
            console.log(results.data.totalItems)
            let maxPages = Math.ceil((results.data.totalItems / 40))
            console.log(maxPages)
            let searchResults = [];
            results.data.items.forEach(item => {
               if (typeof item.volumeInfo.categories !== 'undefined') {
                if (item.volumeInfo.categories.includes("Juvenile Fiction") || item.volumeInfo.categories.includes("Juvenile Nonfiction")) {
                    console.log(item)
                    searchResults.push(item)
                    for (var i = 0; i <= 5; i++) {
                        const newstartIndex = startIndex + 40
                        console.log(newstartIndex)
                        API.searchBooks(searchTerm, newstartIndex)
                        .then (results => {
                            results.data.items.forEach(item => {
                                if (typeof item.volumeInfo.categories !== 'undefined') {
                                    if (item.volumeInfo.categories.includes("Juvenile Fiction") || item.volumeInfo.categories.includes("Juvenile Nonfiction")) {
                                        searchResults.push(item)}}
                            })
                            
                        })
                        startIndex = newstartIndex
                    }
                }
            }    
           })
           console.log(searchResults)
           setSearchResults(searchResults);
        }).catch(err => {
            console.log(err)
        })
    }

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