import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
    console.log(props);
    return (
        <section >
            <Link state={props.restaurant} to={"/RestaurandInfo"}>
                <h1>{props.restaurant.name}</h1>
            </Link>
        </section>
    )
}