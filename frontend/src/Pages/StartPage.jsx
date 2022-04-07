import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css"
import { useDispatch } from 'react-redux';
import { login } from '../Actions/restaurantActions';

export default function Start() {

    const [username, setUsername] = useState("")
    const [pswrd, setpswrd] = useState("")

    const dispatch = useDispatch()

    //dispatchar använadrnamnet och lösenordet för att se om det matchar
    function loginAccount() {
        dispatch(login(username, pswrd))
    }
    console.log(username);
    return (
        <main>
            <section>
                <article>
                    <img className={styles.restaurantLogo} src="https://www.homerestaurant.com/resources/img/logo-white.png" alt="" />
                </article>
                <article>
                    <input className={styles.username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Använadarnamn' />
                    <input className={styles.password} onChange={(e) => setpswrd(e.target.value)} type="password" placeholder='Lösenord' />
                </article>

                <Link to={"/restaurants"}>
                    <button className={styles.login} onClick={() => loginAccount()}>Logga in</button>
                </Link>

                <p>Använadarnamn: maja</p>
                <p>Lösenord: awesomesås</p>
            </section>
        </main>
    )
}