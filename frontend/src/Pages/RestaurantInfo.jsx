import { useLocation } from "react-router-dom";

export default function RestaurandInfo() {
    const location = useLocation();
    console.log(location);



    return (
        <section>
            <article>
                <h1>{location.state.name}</h1>
                <p>{location.state.address}</p>
                <p> {location.state.type}</p>
                <p>{location.state.description}</p>
                <img src={location.state.img} alt="" />
                <p>Rating: {location.state.rating}</p>
            </article >
            <article>
                <h1>Boka bord</h1>
            </article>
            <article>

                <button>-</button>
                <button>+</button>

                <input type="date" />
                <select name="" id="">
                    <option value="">18:00 - 19:00</option>
                    <option value="">18:30 - 19:30</option>
                    <option value="">19:00 - 20:00</option>
                    <option value="">19:30 - 20:30</option>
                    <option value="">20:00 - 21:00</option>
                    <option value="">20:30 - 21:30</option>
                    <option value="">21:00 - 22:00</option>
                    <option value="">21:30 - 22:30</option>
                </select>
            </article>
            <article>
                <button>Bekräfta bokning</button>
            </article>
        </section>

    )
}