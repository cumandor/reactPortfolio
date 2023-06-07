import { Gradient } from './assets/styles/Gradient'
import Header from './components/header/Header'

const gradient = new Gradient()

gradient.initGradient('#gradient-canvas')

function App() {
  return(
  <div id='fade-background'>
   
    <div className="wrapper">
      <Header />
    </div>

  </div>
  )
}

export default App;