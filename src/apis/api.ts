const BASE_URL = 'https://api.coinpaprika.com/v1'
const BASE_URL_NEW = 'https://ohlcv-api.nomadcoders.workers.dev'

const getListCoins = async () => {
    try{
        const response = await fetch(`${BASE_URL}/coins`)
        if(!response.ok){
            throw new Error("Bad Response")
        }
        const coins = await response.json()
        return coins.slice(0,100)
    }
    catch(err : any){
        console.log(err)
    }
}
const getCoinByCoinId =async (id:string) => {
    try{
        const response = await fetch(`${BASE_URL}/coins/${id}`)
        if(!response.ok){
            throw new Error("Bad Response")
        }
        const ticker = await response.json()
        return ticker
    }
    catch(err : any){
        console.log(err)
    }
}
const getTickerByCoinId = async (id : string) => {
    try{
        const response = await fetch(`${BASE_URL}/tickers/${id}`)
        if(!response.ok){
            throw new Error("Bad Response")
        }
        const ticker = await response.json()
        return ticker
    }
    catch(err : any){
        console.log(err)
    }
}
const getHistoryByCoinId =async (id: string) => {
    try{
        const response = await fetch(`${BASE_URL_NEW}?coinId=${id}`)
        
        if(!response.ok){
            throw new Error("Bad Response")
        }
        const history = await response.json()
        return history
    }
    catch(err){
        console.log(err)
    }   
}
export {getListCoins, getCoinByCoinId, getTickerByCoinId, getHistoryByCoinId}



