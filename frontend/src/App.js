import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landingpage from "./Pages/LandingPage";
import RestaurantInfo from "./Pages/RestaurantInfo";

function App() {


  return (
    <section>
      <Router>
        <main>
          <Link to={"/"} ></Link>


          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/RestaurandInfo" element={<RestaurantInfo />} />
          </Routes>

        </main >
      </Router>


    </section>
  );
}

export default App;
