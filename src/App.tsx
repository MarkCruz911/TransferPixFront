import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Transfer from './pages/Transfer'
import Recipient from './pages/Recipient'
import Login from './pages/Login'
import Register from './pages/Register'
import Transactions from './pages/Transactions'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route>
            <Route path="/" element={<Login/>}/>
            <Route path="/transfer" element={<Transfer/>}/>
            <Route path="/recipient" element={<Recipient/>}/>
            <Route path="/dashboard" element={<Index/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
        </Route>
      </Routes>
    </div>
  )

}

export default App
