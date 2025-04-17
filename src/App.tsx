import './App.css'
import { Dashboard } from './components/DashBoard'
import { Header } from './components/HeaderAvatar'
import { MainMenu } from './components/Menu'
import { SaleMonth } from './components/SaleMonth'
import * as S from './styled'

const App = () => {
  return (
    <S.Div>
      <MainMenu />
      <S.Grid>
        <Header />
        <SaleMonth />
        <Dashboard />
      </S.Grid>
    </S.Div>
  )
}

export default App
