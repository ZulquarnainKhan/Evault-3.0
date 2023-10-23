import { useState, useEffect } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css'
import {Web3} from 'web3';
import Wallet from './screens/Wallet';
import Navigate from './components/navigate';
import DisplayAll from './screens/displayAll';
import DeleteTask from './screens/deleteRecord';
import Create from './screens/create'
import Share from './screens/share';
import DisplayImage from './sub_Screen/displayImage';
import DisplayAudio from './sub_Screen/displayAudio';
import DisplayVideo from './sub_Screen/displayVideo';
import DisplayDocument from './sub_Screen/displayDocument';
import Archive from './screens/Archive';

function App() {
  let [state,setState] = useState({web3:null,contract:null,account:null})

  let saveState = ({web3,contract,account})=>{
    setState({web3:web3,contract:contract,account:account})
  }
  
  const router = createBrowserRouter([
    {path:'/', element:<Wallet  saveState={saveState}/>},
    {path:'/create', element:<Create   state={state}/>},
    {path:'/delete', element:<DeleteTask    state={state}/>},
    {path:'/share', element:<Share    state={state}/>},
    //{path:'/view-task', element:<ViewTask/>},
    {path:'/display', element:<DisplayAll state={state}/>},
    {path:'/displayImage', element:<DisplayImage state={state}/>},
    {path:'/displayVideo', element:<DisplayVideo state={state}/>},
    {path:'/displayDocument', element:<DisplayDocument state={state}/>},
    {path:'/displayAudio', element:<DisplayAudio state={state}/>},
    {path:'/archive', element:<Archive />},

    {path:'/Navigate', element:<Navigate/>},
  ])

  return (
    <>
      <RouterProvider router = {router}/> 
      
    </>
  )
}

export default App
