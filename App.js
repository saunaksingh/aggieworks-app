import './App.css';
import {useState, useEffect} from 'react';

{/*

Purpose: display current bitcoin price in 3 currencies, have refresh button for input to refresh prices

*/}

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

function App() {
  const [price, setPrice] = useState(0);

  // display price based on input
  const displayPrice = async() => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    {
      message === 'USD' &&
      setPrice(data.bpi.USD.rate_float);
    }
    {
      message === 'EUR' &&
      setPrice(data.bpi.EUR.rate_float);
    }
    {
      message === 'GBP' &&
      setPrice(data.bpi.GBP.rate_float);
    }
  }

  // onKeyDown to display price when enter is pressed
  const [message, setMessage] = useState('');

  const handleKeyDown = event => {

    if (event.key === 'Enter') {
      displayPrice();
    }
  };

  useEffect(() => {
    displayPrice();
  }, [])

  return (
    <div className="App">
      <h1>Current Bitcoin Price</h1>
      <button onClick={() => displayPrice()}>Refresh Price</button>

      <div className="search">
        <input
          placeholder = "Enter currency (USD, GBP, EUR)"
          style= {{ width: "300px" }}
          onChange={event => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <h2>{price}</h2>
      <img src="https://i0.wp.com/nokiamob.net/wp-content/uploads/2021/01/Stonks-meme-.jpg?resize=640%2C360&ssl=1" alt=""/>
    </div>
  );
}

export default App;
