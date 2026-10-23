import React from 'react'
import PropTypes from 'prop-types';

function Child({ books }) {
    if (!books || books.length === 0) {
   return (
    <div className="books-list">
      <h3>წიგნების სია:</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>"{book.name}"</strong> — ავტორი: {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
Child.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Child; 