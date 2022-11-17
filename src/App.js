import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app css/app.css'
import './Reset.css'
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Books from "./Components/books/Books";



function App() {
  return (
    <BrowserRouter>
      <div className="main-div">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="books" element={<Books />} />


          </Route>

        </Routes >
      </div >
    </BrowserRouter>
  );
}

export default App;
