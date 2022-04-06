import { useSelector } from "react-redux"
import styles from "./RestaurantCheckout.module.css"


export default function RestaurantCheckout() {

    const booking = useSelector((state) => state.bookings)

    console.log(booking);
    return (
        <section>

            <h1 className={styles.address}>Tack för din bokning på {booking.name}</h1>

            <h3 className={styles.address}>Adress: {booking.address}</h3>
            <h3 className={styles.address}>Datum: {booking.date}</h3>
            <h3 className={styles.address}>Tid: {booking.time}</h3>
            <h3 className={styles.address}>Gäster: {booking.guests}</h3>
        </section>

    )
}