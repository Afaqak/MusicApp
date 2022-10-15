import { useState,useRef } from "react";
import Player from "./components/player";
import Song from "./components/song";
import Nav from "./components/Nav";
import './styles/app.scss';
import Data from "./data";
import Library from "./components/library";
function App() {
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  const audioRef = useRef(null);
  const getTime = (time) => {
    return(
      Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
    )
  }
  const timeUpdateHandler = (e) => {
    //for the current time
    const current = e.target.currentTime;
    const duration = getTime(e.target.duration);
    // in minutes 
    setSongInfo({...songInfo,currentTime: current,duration: duration})    
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong}  />
      <Player setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
