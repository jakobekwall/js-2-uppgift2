import React from 'react'
import { Link } from "react-router-dom";

export default function Start() {
    return (
        <main>
            <section>
                <article>
                    <input type="text" placeholder='Använadarnamn' />
                    <input type="password" />
                </article>

                <Link to={"/restaurants"}>
                    <button>Logga in</button>
                </Link>
            </section>
        </main>
    )
}