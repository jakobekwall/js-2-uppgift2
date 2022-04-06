import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../Components/RestaurantCard";
import styles from "./LandingPage.module.css"

export default function Landingpage({ restaurants }) {

    const [searchRestaurants, setSearchRestaurants] = useState([]);
    let mapThis = restaurants;
    return (

        <main>
            <article >
                <Link to={"../"}>
                    <img className={styles.homeLogo} src="https://www.homerestaurant.com/resources/img/logo-white.png" alt="" />
                </Link>
            </article>

            <input className={styles.searchField} type="text" placeholder="Sök restaurang" onChange={({ target: { value } }) => setSearchRestaurants(value)} />


            <article>
                {
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
                        })
                }
            </article>
        </main>

    );
}

