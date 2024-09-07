import React, { useEffect, useState } from 'react';
import './List.css'
import './item/Item.css'
import Item from './item/Item';
import axios from 'axios'



const Body1 = () => {

    // https://www.cryptocompare.com/media/37746251/btc.png
    
    const [allCoins, setAllCoins] = useState([])
    const [update, setUpdate] = useState(1)
    const [raznica_price, setRaznica_price] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    let ii = -1;
   

    setInterval(() => {
        setUpdate(update + 1)
    }, 120000)


    useEffect(() => {
        axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=30&tsym=USD`).then(res => {
            if (update === 1) {
                setRaznica_price(res.data.Data)
                setAllCoins(res.data.Data);
            } else {
                setRaznica_price(allCoins)
                setAllCoins(res.data.Data);
            }
            
        })
    }, [update])


    return (
        <div className='body1'>
            {update}
             <div className='item-con'>
                <div className='line-item'></div>
                <div className='line-item'>Update</div>
                <div className='line-item'>Name</div>
                <div className='line-item'>FullName</div>
                <div className='line-item'>Price</div>
                <div className='line-item'>Volume 24 hour</div>
             </div>
           
            { allCoins.length && raznica_price.length ?
                allCoins.map(coin => {
                    ii++
                    if (coin.RAW && raznica_price[ii].RAW) {                        
                        return <Item  key={coin.CoinInfo.Id} data={
                            {
                                Name: coin.CoinInfo.Name,
                                ImageUrl: coin.CoinInfo.ImageUrl,
                                FullName: coin.CoinInfo.FullName,
                                Price: coin.RAW.USD.PRICE,
                                Hour: coin.RAW.USD.VOLUME24HOURTO,
                                Update: raznica_price[ii].RAW.USD.PRICE - coin.RAW.USD.PRICE
                            }
                        }/>
                            

                    } 
                })
                :
                <h1>Loading</h1>
            }
        </div>
    );
};

export default Body1;