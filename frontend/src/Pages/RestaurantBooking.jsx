import { Link, useLocation } from "react-router-dom";
import styles from "./RestaurantBooking.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { bookTable } from "../Actions/restaurantActions";

export default function RestaurandBooking() {
    const location = useLocation();

    const dispatch = useDispatch()

    //tomma states som fylls in i inputs
    const [guests, setGuests] = useState(1)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [checkBox, setCheckbox] = useState(1)

    //bokningen som sedan skickas till store och hämtas i RestaurantCheckout när den fyllts i
    const [bookingForm, setBookingForm] = useState({
        name: location.state.name,
        address: location.state.address,
        guests: guests,
        date: date,
        time: time
    })

    console.log(date);

    //useEffect som triggas av checkbox
    useEffect(() => {
        confirm()
    }, [checkBox])

    //sätter state med informationen som fyllts i
    function confirm() {
        setBookingForm({
            ...bookingForm,
            date: date,
            time: time,
            guests: guests
        })
    }
    //en alert om dessa fält inte är ifyllda
    function agree() {
        if (date === "" && time === "") {
            alert("Fyll i all information")
        } else {
            // Annars byter värde i checkbox och bokningsknappen visas
            setCheckbox(2)
        }
    }

    const logInInfo = useSelector((state) => state.loggedIn)

    console.log(logInInfo);

    return (
        <section>


            <p>{logInInfo ? null : "Logga in för att boka. Klicka på loggan"}</p>

            <Link to={"../"}>
                <img className={styles.homeLogo} src="https://www.homerestaurant.com/resources/img/logo-white.png" alt="" />
            </Link>

            {/* sätter ut infon från vald restaurang */}
            <article>
                <h1>{location.state.name}</h1>
                <h2>{location.state.address}</h2>
                <p>{location.state.description}</p>
                <img src={location.state.img} alt="" />
                <p className={styles.rating}>Rating: {location.state.rating}</p>
            </article >

            <article>
                <h1>Boka bord</h1>
                <p>Antal gäster</p>
                <button className={guests === 1 ? `${styles.hideBtn}` : `${styles.decrementBtn}`} onClick={() => setGuests(guests - 1)} >-</button>
                <span>{guests}</span>
                <button className={styles.incrementBtn} onClick={() => setGuests(guests + 1)}>+</button>
            </article>

            <article>
                <input className={styles.date} onChange={(e) => setDate(e.target.value)} type="date" />
                <select className={styles.time} onChange={(e) => setTime(e.target.value)} name="" id="">
                    <option value="18:00 - 19:00">18:00 - 19:00</option>
                    <option value="18:30 - 19:30">18:30 - 19:30</option>
                    <option value="19:00 - 20:00">19:00 - 20:00</option>
                    <option value="19:30 - 20:30">19:30 - 20:30</option>
                    <option value="20:00 - 21:00">20:00 - 21:00</option>
                    <option value="20:30 - 21:30">20:30 - 21:30</option>
                    <option value="21:00 - 22:00">21:00 - 22:00</option>
                    <option value="21:30 - 22:30">21:30 - 22:30</option>
                </select>
            </article>

            <article className={styles.confirmBtn}>
                <label htmlFor="checkbox">Godkänn</label>
                <input className={styles.confirm} type="checkbox" onClick={() => agree()} />

                {/* button som tar dig till RestaurantCheckout med den ifyllda informationen, 
                men syns bara om man har fyllt i datum och tid för bokning och godkänt med checkbox*/}
                <Link to={"/RestaurantCheckout"}>
                    <button className={(checkBox === 2 && date !== "" && time !== "" && logInInfo === true) ? `${styles.bookBtn}` : `${styles.hideBtn}`} onClick={() => dispatch(bookTable(bookingForm))} >Boka bord</button>
                </Link>
            </article>
        </section>

    )
}