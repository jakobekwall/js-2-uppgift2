import React from 'react'
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css"

export default function Start() {
    return (
        <main>
            <section>
                <article>
                    <img className={styles.restaurantLogo} src="https://www.homerestaurant.com/resources/img/logo-white.png" alt="" />
                </article>
                <article>
                    <input className={styles.username} type="text" placeholder='Använadarnamn' />
                    <input className={styles.password} type="password" placeholder='Lösenord' />
                </article>

                <Link to={"/restaurants"}>
                    <button className={styles.login}>Logga in</button>
                </Link>
            </section>
        </main>
    )
}