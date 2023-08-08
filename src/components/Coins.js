import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"
import Badges from './Badges'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'





const Coins = (props) => {
  return (
    <div className="container">
        <div>
            <div className="heading">
               <Badges />
            </div>
            

            {props.coins.map(coins => {
                return (
                  <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                    <CoinItem coins={coins} />
                  </Link>
                )
            })

            }
        </div>
    </div>
  )
}

export default Coins



