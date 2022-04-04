import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landingpage from "./Pages/LandingPage";
import RestaurantInfo from "./Pages/RestaurantInfo";
import Start from "./Pages/StartPage";
import { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:5001/data.json";
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRestaurants(data.restaurant))
  }, [])
  useEffect(() => console.log(restaurants), [restaurants])

  return (
    <section>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/restaurants" element={<Landingpage restaurants={restaurants} />} />
            <Route path="/RestaurandInfo" element={<RestaurantInfo />} />
          </Routes>
        </main>
      </Router>
    </section>
  );
}


export default App;