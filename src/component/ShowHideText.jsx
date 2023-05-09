import { useState } from 'react';

function ShowHideText(props) {
  const { text } = props;
  const [showFullText, setShowFullText] = useState(false);

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>{showFullText ? text : text.substring(0, 50) + '...'}</p>
      <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleClick}>{showFullText ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default ShowHideText;