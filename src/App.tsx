import './App.css'
import { Dashboard } from './components/DashBoard'
import { Header } from './components/HeaderAvatar'
import { MainMenu } from './components/Menu'
import { SaleMonth } from './components/SaleMonth'

const App = () => {
  return (
    <div>
      <Header />
      <MainMenu />
      <SaleMonth />
      <Dashboard />
    </div>
  )
}

export default App
