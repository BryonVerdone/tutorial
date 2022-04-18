const Book = (props) => {
  console.log(props);

  const { img, title, author, desc } = props;
  const clickHandler = () => {
    console.log('hello there');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img style={{ width: 300 }} src={img} alt='' />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        click me
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};
export default Book;
