import { Link } from "react-router-dom";
import styles from "./RestaurantCard.module.css"

export default function RestaurantCard(props) {

    return (
        <section>
            <h1 className={styles.restaurants}>{props.restaurant.name}</h1>
            <p className={styles.address}>{props.restaurant.type}</p>

            <Link className={styles.link} state={props.restaurant} to={"/RestaurandBooking"}>
                <img className={styles.chooseRestaurantImg} src={props.restaurant.img} alt="" />
            </Link>

        </section>
    )
}