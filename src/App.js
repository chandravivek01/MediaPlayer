import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store/actions";

function App( ) {

  const dispatch = useDispatch();

  const handleReset = () => {
      dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleReset()}>
        Reset both playlists.
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
      <hr />
    </div>
  );
}

export default App;
