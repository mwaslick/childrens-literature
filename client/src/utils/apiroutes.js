const axios = require("axios")
const APIKey = "AIzaSyBqbJDVzDVFiYNBVrUSXge-9KWalCV1N_s"

const API = {
    searchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=40&key=" + APIKey)
    },

    // getBooks: function() {
    //     return axios.get("/api/books")
    // },

    // saveBook: function(data) {
    //     return axios.post("/api/books", data)
    // },

    // deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id)
    // }

}


module.exports = API