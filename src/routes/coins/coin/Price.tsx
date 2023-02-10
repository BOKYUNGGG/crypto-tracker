import ReactApexChart from "react-apexcharts"
import { useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import { getHistoryByCoinId } from "../../../apis/api"
import { Helmet } from "react-helmet"
import LoadingSpinner from "../../../components/spinners/LoadingSpinner"
interface IHistory {
    time_open : string,
    time_close : string,
    open : number,
    high : number,
    low : number,
    close : number,
    volume : number,
    market_cap :number
}
export default function Price(){
    const {state} = useLocation()
    const { isLoading, data} = useQuery<IHistory[]>(["ohlcv", state?.id], ()=> getHistoryByCoinId(state?.id))
    console.log(data)
    return(
        <div>
            <Helmet>
                <title>
                    {
                        isLoading ? "loading..." : state.id
                    }
                </title>
            </Helmet>
            <h3>Price</h3>
            {
                isLoading ? <LoadingSpinner /> :
                <ReactApexChart
                    options={{
                        theme : {
                            mode : "dark"
                        },
                        chart : {
                            type : 'candlestick',
                            height : 350,
                            toolbar : {
                                show : false
                            }
                        },
                        title : {
                            text : state.name,
                            align : 'center'
                        },
                        xaxis : {
                            type : 'datetime'
                        },
                        yaxis : {
                            tooltip : {
                                enabled : true
                            }
                        },
                        grid : {
                            xaxis : {
                                lines : {
                                    show : false
                                }
                            }
                        },
                        tooltip : {
                            y : {
                                formatter : (value)=>`${value.toFixed(1)}`
                            }
                        },
                        series : [{
                            data : data?.map(element => {
                                const {time_open, open, high, low, close} = element
                                return {
                                    x : new Date(time_open),
                                    y : [open, high, low, close]
                                }
                            }) as any
                        }]
                    }}
                    series={
                        [{
                            // data: [{
                            //     x: new Date(1538778600000),
                            //     y: [6629.81, 6650.5, 6623.04, 6633.33]
                            // },
                            // {
                            //     x: new Date(1538780400000),
                            //     y: [6632.01, 6643.59, 6620, 6630.11]
                            // },
                            // {
                            //     x: new Date(1538782200000),
                            //     y: [6630.71, 6648.95, 6623.34, 6635.65]
                            // },
                            // {
                            //     x: new Date(1538784000000),
                            //     y: [6635.65, 6651, 6629.67, 6638.24]
                            // }]
                            name : "Price",
                            data : data?.map((element)=>{
                                const {time_open, open, high, low, close} = element
                                return {
                                    x : new Date(time_open),
                                    y : [open, high, low, close]
                                }
                            }) as any
                        }]
                }
                />
            }
        </div>
    )
}