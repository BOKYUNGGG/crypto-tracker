import { Link } from "react-router-dom"
import styled from "styled-components"
import { useQuery } from "react-query"
import { getListCoins } from "../../apis/api"
import LoadingSpinner from "../../components/spinners/LoadingSpinner"
import { Helmet } from "react-helmet"

export type CoinType = {
    id : string,
    name : string,
    symbol : string,
    rank : number,
    is_new : boolean,
    is_active : boolean,
    type : string
}
interface Props {
    coin : CoinType
}

export default function Coins(){
    const {isLoading, data} = useQuery<CoinType[]>('coins', getListCoins)

    return (
        <main>
            <Helmet>
                <title>
                    Crypto Tracker
                </title>
            </Helmet>
            <h1>This is coins Page</h1>
            <ul>
                {
                    data ? 
                    data.map((coin, index) => {
                        const {id, name} = coin
                        return(
                            <CoinItem key={index} coin={coin}/>
                        )
                    }) :
                    <LoadingSpinner />
                }
            </ul>
        </main>
        
    )
}


const CoinItemWrapper = styled.li`
    display : flex;
    align-items : center;
    list-style : none;
    img {
        width : 2em;
    }
`
function CoinItem(props : Props){
    const { id,name,symbol,rank,is_new,is_active,type} = props.coin
    return(
        <CoinItemWrapper>
            <img 
                src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
                loading='lazy'
            />
            <span>{name} </span>
            <Link to={`/${id}`} state={props.coin}>👉</Link>
        </CoinItemWrapper>
    )
}
