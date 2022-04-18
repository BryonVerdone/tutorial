import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
import { books } from './books';
import Book from './Book';
// setup vars

console.log(books);
// const author = ;
// const title = ;
// const img =

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
// const Book = (props) => {
//   console.log(props);

//   const { img, title, author, desc } = props;
//   const clickHandler = () => {
//     console.log('hello there');
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <article
//       className='book'
//       onMouseOver={() => {
//         console.log(title);
//       }}
//     >
//       <img style={{ width: 300 }} src={img} alt='' />
//       <h1
//         onClick={() => {
//           console.log(title);
//         }}
//       >
//         {title}
//       </h1>
//       <h4>{author}</h4>
//       <button type='button' onClick={clickHandler}>
//         click me
//       </button>
//       <button type='button' onClick={() => complexExample(author)}>
//         more complex example
//       </button>
//     </article>
//   );
// };

// const Greeting = () => {
//   return (
//     React,
//     createElement('h1', {}, React.createElement('div', {}, 'hello world'))
//   );
// };

ReactDOM.render(<BookList />, document.getElementById('root'));
