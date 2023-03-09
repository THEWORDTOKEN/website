import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import {useLayoutEffect} from 'react'
import './App.css'
import Home from './pages/Home/Home'
import BuyCoin from './pages/BuyCoin/BuyCoin'
import Riskwarning from './pages/Riskwarning/Riskwarning'
import Merch from './pages/Merch/Merch'


function App() {

  return (
    <div className="app">
      <Router>
        <AllRoutes/>
      </Router>
    </div>
  )
}

const AllRoutes = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/buycoin' element={<BuyCoin />} />
      <Route path='/disclaimer' element={<Riskwarning />} />
      <Route path='/merch' element={<Merch />} />
    </Routes>
  )
}

export default App
