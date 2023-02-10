import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function Home () {
    return (
        <div>
            <Helmet>
                <title>Crypto Tracker</title>
            </Helmet>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to='coins'>👉 Coins</Link>
                </li>
            </ul>
        </div>
    )
}