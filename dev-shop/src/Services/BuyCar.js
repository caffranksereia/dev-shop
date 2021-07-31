import apiBuyCar from './apiBuyCar';



export default{
    buyCarAll:() =>{
        return apiBuyCar.get('/BuyCarAll')
    },
    buyCarPost:(Buy) =>{
        return apiBuyCar.post('/BuyCar/post',Buy)
    },

}