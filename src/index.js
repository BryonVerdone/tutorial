import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL302_SR302,200_.jpg',
  title: `Oh, the Places You'll Go!  `,
  author: 'Dr. Seuss',
};
// const author = ;
// const title = ;
// const img =

function BookList() {
  return (
    <section className='booklist'>
      {/* <Book desc='some random text' />
      <Book price='$3.99' store='tjmax' /> */}
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  console.log(props);

  return (
    <article className='book'>
      {/* <img style={{ width: 300 }} src={img} alt='' />
      <h1>{title.toUpperCase()}</h1>
      <h4>{author}</h4>
      <span>{props.desc}</span>
      <span>{props.price}</span>
      <span>{props.store}</span> */}
      <img style={{ width: 300 }} src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
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
