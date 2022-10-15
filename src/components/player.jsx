import React,{useRef,useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';
const Player = ({currentSong,isPlaying,setIsPlaying}) => {
  //state
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  // Ref
    const audioRef = useRef(null);
    // Event Handlers
  const playSongHandler = () => {
   if(isPlaying){
       audioRef.current.pause();
       setIsPlaying(!isPlaying);
   }
    else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
  }
  const timeUpdateHandler = (e) => {
    //for the current time
    const current = e.target.currentTime;
    const duration = getTime(e.target.duration);
    // in minutes 

    setSongInfo({...songInfo,currentTime: current,duration: duration})    
  }
  const getTime = (time) => {
    return(
      Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
    )
  }
  const dragHandler = (e) => {
    console.log(e.target.value);
    setSongInfo({...songInfo,currentTime: e.target.value})
    audioRef.current.currentTime = e.target.value;
  }
  return (
    <div className='player'>
        <div className="time-control">
            <p>
                {getTime(songInfo.currentTime)}
            </p>
        <input
          onChange={dragHandler}
          type="range"
           min={0}
            max={songInfo.duration}
              value={songInfo.currentTime}
          />
            <p>{songInfo.duration}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={
                isPlaying ? faPause : faPlay
            }/>
            <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
    
  )
}

export default Player