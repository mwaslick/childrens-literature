import React, { useState, useEffect } from 'react';
import API from '../utils/apiroutes';
import Searchbar from '../components/Searchbar/Searchbar'
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
               if (typeof item.volumeInfo.categories != undefined) {
                   console.log(item)
    
               }
           })
        //    console.log(searchResults)
        //    setSearchResults(searchResults);
        //    return searchResults;
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <Container>
             <Searchbar
             searchTerm= {searchTerm}
             handleChange= {handleChange} 
             searchFunction= {searchFunction}
             />


        </Container>
       

    )
}