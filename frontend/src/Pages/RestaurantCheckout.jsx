import { useSelector } from "react-redux"
import styles from "./RestaurantCheckout.module.css"
import { Link } from "react-router-dom";


export default function RestaurantCheckout() {


    //hämtar användarnamn och din bokning
    const booking = useSelector((state) => state.bookings)
    const accountInfo = useSelector((state) => state.account)

    console.log(booking);
    return (
        <section>

            <Link to={"../"}>
                <img className={styles.homeLogo} src="https://www.homerestaurant.com/resources/img/logo-white.png" alt="" />
            </Link>

            <h1 className={styles.address}>Tack {accountInfo} för din bokning på {booking.name}</h1>

            <article className={styles.bookingContainer}>
                <h3 className={styles.address}>Adress: {booking.address}</h3>
                <h3 className={styles.address}>Datum: {booking.date}</h3>
                <h3 className={styles.address}>Tid: {booking.time}</h3>
                <h3 className={styles.address}>Gäster: {booking.guests}</h3>
            </article>
        </section>

    )
}