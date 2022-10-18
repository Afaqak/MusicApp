import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
const Player = ({setCurrentSong, setSongs,setSongInfo,songInfo,audioRef,song, currentSong,isPlaying,setIsPlaying}) => {

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
  useEffect( () => {
      const newSongs = song.map((song) => {
          if(song.id === currentSong.id){
              return{
                  ...song,
                  active:true
              }
          }
          else{
              return{
                  ...song,
                  active:false
              }
          }
      })
      setSongs(newSongs);
  },[currentSong])
  const getTime = (time) => {
    return(
      Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2)
    )
  }
  const dragHandler = (e) => {
  
    setSongInfo({...songInfo,currentTime: e.target.value})
    audioRef.current.currentTime = e.target.value;
  }

  const skipTrackHandler = async (direction) => {
      const currentIndex = song.findIndex((song) => song.id === currentSong.id);
      if(direction === 'skip-forward'){
        await setCurrentSong(song[(currentIndex+1)%song.length]);
        if(isPlaying) audioRef.current.play();
      }
      if(direction === 'skip-back'){
        if((currentIndex-1)%song.length === -1){
          await setCurrentSong(song[song.length-1]);
          if(isPlaying) audioRef.current.play();
          return;
        }
        await setCurrentSong(song[(currentIndex-1)%song.length]);
        if(isPlaying) audioRef.current.play();
      }
    }



  return (
    <div className='player'>
        <div className="time-control">
            <p>
                {getTime(songInfo.currentTime)}
            </p>
            <div className="track">
          <input
          onChange={dragHandler}
          type="range"
           min={0}
            max={songInfo.duration}
              value={songInfo.currentTime}
          />
          <div  className="animate-track"></div>
          </div>
            <p>{songInfo.duration}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={
                isPlaying ? faPause : faPlay
            }/>
            <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
    </div>
    
  )
}

export default Player