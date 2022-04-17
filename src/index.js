import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
// setup vars

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL302_SR302,200_.jpg',
    title: `Oh, the Places You'll Go!  `,
    author: 'Dr. Seuss',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL604_SR604,400_.jpg',
    title: `The 48 Laws of Power `,
    author: 'Robert Greene',
    desc: 'blah blah blah',
  },
];
console.log(books);
// const author = ;
// const title = ;
// const img =

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  console.log(props);

  const { img, title, author, desc } = props.book;
  return (
    <article className='book'>
      <img style={{ width: 300 }} src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <span>{desc}</span>
    </article>
  );
};

// const Greeting = () => {
//   return (
//     React,
//     createElement('h1', {}, React.createElement('div', {}, 'hello world'))
//   );
// };

ReactDOM.render(<BookList />, document.getElementById('root'));
