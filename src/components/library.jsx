import React from 'react'
import LibrarySongs from './librarySong'
const Library = ({audioRef,libraryStatus,isPlaying,setSongs,songs,setCurrentSong}) => {
  return (
  <div className={`library ${libraryStatus?'active-library':''}`}>
    <h2>Library</h2>
    <div className="library-songs">
        {
            songs.map((song) => {
                return <LibrarySongs isPlaying={isPlaying} id={song.id} setSongs={setSongs} songs={songs} audioRef={audioRef} setCurrentSong={setCurrentSong} currentSong={song} key={song.id}/>
            })
        }
    </div>
  </div>
  )
}

export default Library;