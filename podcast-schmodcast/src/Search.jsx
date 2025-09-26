import { useRef } from 'react';
import './Search.css';

export default function Search({ queryText, setQueryText }) {
  const jaapRef = useRef(null);

  function doClick(e){
    e.preventDefault();
    jaapRef.current.focus();
  }

  return (
    <form>
      <label htmlFor="podcast-search">Search: </label>
      <input
        ref={jaapRef}
        type="text"
        name="podcast-search"
        id="podcast-search"
        onChange={(e) => setQueryText(e.target.value)}
        value={queryText}
      />
      <input type="submit" value="search" onClick={doClick}/>
    </form>
  );
}
