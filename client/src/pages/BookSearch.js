import React, { useState, useEffect } from 'react';
import API from '../utils/apiroutes';
import Searchbar from '../components/Searchbar/Searchbar'
import BookResult from '../components/BookResult/BookResult'
import Container from 'react-bootstrap/Container'

export default function BookSearch() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value)
    };

    const searchFunction = event => {
        event.preventDefault();
        if (!searchTerm) {
            console.log("no search term")
            return
        }
        else API.searchBooks(searchTerm)
        .then (results => {
           let searchResults = [];
           results.data.items.forEach(item => {
               if (typeof item.volumeInfo.categories !== 'undefined') {
                if (item.volumeInfo.categories.includes("Juvenile Fiction") || item.volumeInfo.categories.includes("Juvenile Nonfiction")) {
                    console.log(item)
                    searchResults.push(item)
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

            {searchResults.map(book => {
                return <BookResult
                key= {book.id}
                title= {book.volumeInfo.title}
                authors= {book.volumeInfo.authors}
                author = {renderAuthors}
                image= {book.volumeInfo.imageLinks.smallThumbnail}
                link= {book.volumeInfo.infoLink}
                />

            })}


        </Container>
       

    )
}