import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddMovies from "./Components/AddMovies";
import Details from "./Components/Details";
import Edit from "./Components/edit";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import Navbare from "./Components/Navbar";
import Unwatched from "./Components/Unwatched";
import Watched from "./Components/Watched";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>    <div className="App">
      <Navbare></Navbare>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<MovieList></MovieList>}></Route>
        <Route path="/add" element={<AddMovies></AddMovies>}></Route>
        <Route path="/movies/:id" element={<Details></Details>}></Route>
        <Route path="/watched" element={<Watched></Watched>}></Route>
        <Route path="/unwatched" element={<Unwatched></Unwatched>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
      </Routes>
    </div>
    </>

  );
}

export default App;