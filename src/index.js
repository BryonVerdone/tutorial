import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}
const author = 'Amelia Hepworth';
const Book = () => {
  const title = 'I Love You to the Moon and Back';
  return (
    <article className='book'>
      <img
        style={{ width: 300 }}
        src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg'
        alt=''
      />
      <h1>{title.toUpperCase()}</h1>
      <h4>{author}</h4>
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
