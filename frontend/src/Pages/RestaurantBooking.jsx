import { Link, useLocation } from "react-router-dom";
import styles from "./RestaurantBooking.module.css"
import { incrementGuests, decrementGuests } from "../Actions/restaurantActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { bookTable } from "../Actions/restaurantActions";


export default function RestaurandBooking() {
    const location = useLocation();
    const amount = useSelector((state) => state.amount)
    console.log(amount);

    const dispatch = useDispatch()

    const [guests, setGuests] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()


    const [bookingForm, setBookingForm] = useState({
        name: location.state.name,
        address: location.state.address,
        guests: 3,
        date: date,
        time: time

    })

    console.log(bookingForm);

    function confirm() {
        setBookingForm({
            ...bookingForm,
            date: date,
            time: time
        })
    }


    return (
        <section>
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
                <button onClick={() => dispatch(decrementGuests())} >-</button>
                <span>{amount}</span>
                <button onClick={() => dispatch(incrementGuests())}>+</button>
            </article>

            <article>
                <input onChange={(e) => setDate(e.target.value)} type="date" />
                <select onChange={(e) => setTime(e.target.value)} name="" id="">
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



            <article>
                <input type="checkbox" onClick={() => confirm()} />
                <Link to={"/RestaurantCheckout"}>
                    <button onClick={() => dispatch(bookTable(bookingForm))} >Boka bord</button>
                </Link>
            </article>
        </section>

    )
}