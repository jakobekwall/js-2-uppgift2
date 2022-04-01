import { useLocation } from "react-router-dom"

export default function RestaurandInfo() {
    const location = useLocation()
    console.log(location);


    state = {
        count: 0
    };

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    }




    return (
        <section>
            <article>
                <h1>{location.state.name}</h1>
                <p>{location.state.address}</p>
                <p> {location.state.type}</p>
                <p>{location.state.description}</p>
                <p>{location.state.rating}</p>
                <img src={location.state.img} alt="" />
            </article>

            <article>
                <p>Boka 1-8 personer</p>
                <p>Välj antal gäster</p>

                <button onClick={this.decrement}>-</button>
                <span className="count">{this.state.count}</span>
                <button onClick={this.increment}>+</button>

            </article>

        </section >
    )
}