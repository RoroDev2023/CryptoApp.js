import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import Search from './components/Search';
import {Routes, Route} from 'react-router-dom'
import Coin from './routes/Coin';
import Navigation from './components/Navigation';
import About from './routes/About.js'
import Heading from './components/Heading';
import Projects from './routes/Projects';
import Badges1 from './components/Badges1';
import Tools from './routes/Tools';
import Contact from './routes/Contact'
import Footer from './components/Footer';
import Pagination from './components/Pagination';





function App() {

  const[coins, setcoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

  useEffect(() => {
    axios.get(url).then((response) => {
      setcoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<><Heading /><Coins coins={coins}/></>} />
      <Route path="/coin" element={<Coin />} >
      <Route path=":coinId" element={<Coin />}/>
      </Route>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/tools' element={<Tools />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
