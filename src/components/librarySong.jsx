import React from 'react'

const LibrarySongs = ({currentSong,setCurrentSong}) => {
    const songSelectHandler =async () => {
     await setCurrentSong(currentSong);
    }
  return (
    <div onClick={songSelectHandler} className="songs-library">
           <img alt={currentSong.name} src={currentSong.cover} alt="" />
            <div className='songs-description'>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
            </div>
        </div>
  )
}

export default LibrarySongs