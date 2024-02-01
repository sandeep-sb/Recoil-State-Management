import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <Header />
      <RecoilRoot>
        <Outlet />
      </RecoilRoot>
    </>
  )
}

export default App
