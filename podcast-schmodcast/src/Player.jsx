import{useRef, useState} from 'react'
import './Player.css';

export default function Player({ activePodcast, activeTitle }) {
  const [isPlaying, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const styles = {
    backgroundImage:
      'url(https://i.scdn.co/image/85a2d1e1d14c33eb6a67f933de336e6e7bf24dd4)',
  };

  function handlePlayer (){
    if(isPlaying){
      playerRef.current.pause();
      setPlaying(!isPlaying);
    }
    else{
      playerRef.current.play();
      setPlaying(!isPlaying);
    }
  }

  if (activePodcast) {
    styles['backgroundImage'] = `url(${activeTitle.image.url}`;
    return (
      <div className="player">
        <div className="player-thumbnail" style={styles}>
          <audio ref={playerRef} controls src={activePodcast.link}></audio>
          <button className="playerButton" onClick={handlePlayer}>{isPlaying ? 'Stop' : 'Start'}</button>
        </div>

        <div className="player-info">
          <h2>{activePodcast.title[0]}</h2>
          <h3>{activeTitle.title}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="player">
        <div className="player-thumbnail" style={styles}>
          <audio controls src="bla.mp3"></audio>
        </div>

        <div className="player-info">
          <h2>Nothing Selected</h2>
          <h3>Nothing Selected</h3>
        </div>
      </div>
    );
  }
}
