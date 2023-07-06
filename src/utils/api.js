import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = ' http://localhost:9000/books';

const Api = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addBook = async () => {
    try {
      const bookData = {
        title: 'second book',
        description: 'second book description',
        cover: 'cover',
      };

      await axios.post(`${API_URL}/books`, bookData);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async () => {
    try {
      const bookData = {
        id: 4,
        title: 'aaaaa',
        cover: 'aaaaaa',
      };

      await axios.patch(`${API_URL}/updateBook`, bookData);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/deleteBook`, { data: { id } });
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={addBook}>Add Book</button>
      <button onClick={updateBook}>Update Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
