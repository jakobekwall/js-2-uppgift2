import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../Components/RestaurantCard";
import styles from "./LandingPage.module.css"
import { useSelector } from "react-redux";

export default function Landingpage({ restaurants }) {

    const [searchRestaurants, setSearchRestaurants] = useState([]);
    let mapThis = restaurants;


    //hämtar användarnamn och loggin-status
    const logInInfo = useSelector((state) => state.loggedIn)
    const accountInfo = useSelector((state) => state.account)


    return (

        <main>
            <article >
                {/* logga in för att kunna boka, annars null */}

                <p>{logInInfo === true ? "Välkommen " + accountInfo : "Logga in för att boka"}</p>
                <Link to={"../"}>
                    <img className={styles.homeLogo} src="https://www.homerestaurant.com/resources/img/logo-white.png" alt="" />
                </Link>
            </article>

            <input className={styles.searchField} type="text" placeholder="Sök restaurang" onChange={({ target: { value } }) => setSearchRestaurants(value)} />

            <article>

                {/* mappar igenom alla restauranger och visar dem */}
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

