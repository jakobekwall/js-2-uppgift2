import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../Components/RestaurantCard";

export default function Landingpage() {

    const url = "http://localhost:5001/data.json";
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])

    let mapThis = restaurants.restaurant

    const [searchRestaurants, setSearchRestaurants] = useState([]);



    return (

        <main>
            <h1></h1>

            <input type="text" placeholder="Sök restaurang" onChange={({ target: { value } }) => setSearchRestaurants(value)} />

            {
                restaurants.length === undefined ?
                    mapThis.filter((item) => {
                        if (searchRestaurants == "") {
                            return item
                        } else if (item.name.toLowerCase().includes(searchRestaurants.toLowerCase())) {
                            return item
                        }
                    })
                        .map((item, key) => {
                            return (
                                <section key={key} >
                                    <article key={key}>
                                        <RestaurantCard restaurant={item} />
                                    </article>
                                </section>
                            )
                        }) : null
            }





            {/* 
            {
                restaurants.length === undefined ?
                    mapThis.map((restaurant, id) => (
                        <Link key={id} to={"/Restaurants"}>
                            <p >{restaurant.name}</p>
                        </Link>
                    )) : null
            } */}

        </main>

    );
}






