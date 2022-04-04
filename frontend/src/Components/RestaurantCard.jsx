import { Link } from "react-router-dom";

export default function RestaurantCard(props) {

    return (
        <section >
            <Link state={props.restaurant} to={"/RestaurandInfo"}>
                <h1>{props.restaurant.name}</h1>
            </Link>
        </section>
    )
}