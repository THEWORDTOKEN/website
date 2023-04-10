import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {useLayoutEffect} from 'react'
import './App.css'
import Home from './pages/Home/Home'
import BuyCoin from './pages/BuyCoin/BuyCoin'
import Riskwarning from './pages/Riskwarning/Riskwarning'
import Merch from './pages/Merch/Merch'


function App() {

  return (
    <div className="app">
      <AllRoutes/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "buycoin",
    element: <BuyCoin />,
  },
  {
    path: "disclaimer",
    element: <Riskwarning />,
  },
  {
    path: "merch",
    element: <Merch />,
  },
]);

const AllRoutes = () => {

  return <RouterProvider router={router} />
}

export default App
