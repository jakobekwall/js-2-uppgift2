import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landingpage from "./Pages/LandingPage";
import RestaurantBooking from "./Pages/RestaurantBooking";
import Start from "./Pages/StartPage";
import { useState, useEffect } from "react";
import RestaurantCheckout from "./Pages/RestaurantCheckout";

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
            <Route path="/RestaurandBooking" element={<RestaurantBooking />} />
            <Route path="/RestaurantCheckout" element={<RestaurantCheckout />} />

          </Routes>
        </main>
      </Router>
    </section>
  );
}


export default App;