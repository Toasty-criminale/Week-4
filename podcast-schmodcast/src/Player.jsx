import './Player.css';

export default function Player({ activePodcast, activeTitle }) {
  const styles = {
    backgroundImage:
      'url(https://i.scdn.co/image/85a2d1e1d14c33eb6a67f933de336e6e7bf24dd4)',
  };
  if (activePodcast) {
    styles['backgroundImage'] = `url(${activeTitle.image.url}`;
    return (
      <div className="player">
        <div className="player-thumbnail" style={styles}>
          <audio controls src={activePodcast.link}></audio>
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
