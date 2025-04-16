import './App.css'
import { Dashboard } from './components/DashBoard'
import { Header } from './components/HeaderAvatar'
import { MainMenu } from './components/Menu'
import { SaleMonth } from './components/SaleMonth'

const App = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <SaleMonth />
      <Dashboard />
    </>
  )
}

export default App
