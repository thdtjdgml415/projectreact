import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import MovieDetails from "./components/include/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
