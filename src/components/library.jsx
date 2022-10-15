import React from 'react'
import LibrarySongs from './librarySong'
const Library = ({songs,setCurrentSong}) => {
  return (
  <div className="library">
    <h2>Library</h2>
    <div className="library-songs">
        {
            songs.map((song) => {
                return <LibrarySongs setCurrentSong={setCurrentSong} currentSong={song} key={song.id}/>
            })
        }
    </div>
  </div>
  )
}

export default Library;