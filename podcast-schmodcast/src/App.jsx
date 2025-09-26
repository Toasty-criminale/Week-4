import {useEffect, useState } from 'react';
import './App.css';
import Player from './Player';
import Search from './Search.jsx';
import Overview from './Overview.jsx';
import Logo from './Logo.jsx';

function App() {
  const [ratings, setRatings] = useState([]);
  const [activePodcast, setActivePodcast] = useState(null);
  const [activeTitle, setActiveTitle] = useState(null);
  const [queryText, setQueryText] = useState('');
  const [podcasts, setPodcasts] = useState({});

  const rate = (number, guid) => {
    const newRatings = [{ guid: guid, rating: number }, ...ratings];
    // stack overflow. array met unieke object-id's:
    // https://stackoverflow.com/a/49288758
    let uniqIds = {};
    setRatings(
      newRatings.filter(
        (obj) => !uniqIds[obj.guid] && (uniqIds[obj.guid] = true)
      )
    );
  };

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/podcasts`);
        const data = await response.json(); // Parse JSON
        setPodcasts(data); // Save to state
      } catch (error) {
        console.error('Fout fetching podcasts:', error);
      }
    };
    fetchPodcasts();
  }, [queryText]);

  return (
    <div className="App">
      <Logo />
      <main>
        <Player activePodcast={activePodcast} activeTitle={activeTitle} />
        <Search queryText={queryText} setQueryText={setQueryText} />
        <Overview
          setActivePodcast={(newPC) => setActivePodcast(newPC)}
          setActiveTitle={(title) => setActiveTitle(title)}
          ratings={ratings}
          podcasts={podcasts}
          queryText={queryText}
          rate={rate}
        />
      </main>
    </div>
  );
}

export default App;
