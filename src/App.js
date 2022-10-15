import { useState } from "react";
import Player from "./components/player";
import Song from "./components/song";
import './styles/app.scss';
import Data from "./data";
import Library from "./components/library";
function App() {

  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(songs);
  return (
    <div className="App">
      <Song currentSong={currentSong}  />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
