import React from 'react';
import './Coins.css';

const CoinItem = (props) => {
  const getChangeColor = () => {
    return props.coins.price_change_percentage_24h.toFixed(2) > 0 ? '#16c784' : '#ea3943';
  };

  return (
    <>
      <div className="coin-row">
        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
          <img src={props.coins.image} alt="crypto_symbol" />
          <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p style={{ color: getChangeColor() }}>
          {props.coins.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="hide-mobile">${props.coins.total_volume.toLocaleString()}</p>
        <p className="hide-mobile">${props.coins.market_cap.toLocaleString()}</p>
      </div>
    </>
  );
};

export default CoinItem;
