import Player from "./components/player";
import Song from "./components/song";
import './styles/app.scss';
function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
