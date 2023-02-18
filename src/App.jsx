import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import BuyCoin from './pages/BuyCoin/BuyCoin'

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/buycoin' element={<BuyCoin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
