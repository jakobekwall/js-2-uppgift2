import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../Components/RestaurantCard";

export default function Landingpage({ restaurants }) {

    console.log(restaurants);

    const [searchRestaurants, setSearchRestaurants] = useState([]);
    let mapThis = restaurants;
    return (

        <main>
            <h1>HEJ</h1>
            {
                restaurants.map((restaurant, id) => (
                    <Link key={id} to={"/Restaurants"}>
                        <p >{restaurant.name}</p>
                    </Link>))
            }
            {/* 
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
            } */}





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






