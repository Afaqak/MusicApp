import React from 'react'

const LibrarySongs = ({audioRef,isPlaying,setSongs,songs,currentSong,setCurrentSong}) => {
    
    const songSelectHandler =async () => {
        const newSongs=songs.map((song)=>{
            if(song.id===currentSong.id){
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
     await setCurrentSong(currentSong);
        if(isPlaying){
            await audioRef.current.play();
        }

    }
  return (
    <div onClick={songSelectHandler} className={`songs-library ${
        currentSong.active ? 'selected' : ''
    }`}>
           <img alt={currentSong.name} src={currentSong.cover} />
            <div className='songs-description'>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
            </div>
        </div>
  )
}

export default LibrarySongs