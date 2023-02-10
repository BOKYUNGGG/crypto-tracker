import { createBrowserRouter } from "react-router-dom"
import Root from "./routes/Root"
import ErrorRoute from "./routes/ErrorRoute"
import Home from "./routes/Home"
import Coins from "./routes/coins/Coins"
import Coin from "./routes/coins/coin/Coin"
import Price from "./routes/coins/coin/Price"
import Chart from "./routes/coins/coin/Chart"
import { basename } from "path"


const router = createBrowserRouter([
    {
        path : `/`,
        
        element : <Root />,
        errorElement : <ErrorRoute />,
        children : [
            {
                path:"",
                element : <Home />
            },
            {
                path : "coins",
                element : <Coins/>,
            },
            {
                path : ":coinId",
                element : <Coin />,
                children : [
                    {
                        path : "price",
                        element : <Price />
                    },
                    {
                        path : "chart",
                        element : <Chart />
                    }
                ]
            }
        ]
    },
])


export default router