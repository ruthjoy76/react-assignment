function EvenOdd(props) {
  const { number } = props;
  const isEven = number % 2 === 0;

  return (
    <div>
      <p>The number {number} is {isEven ? 'even' : 'odd'}.</p>
    </div>
  );
}

export default EvenOdd;