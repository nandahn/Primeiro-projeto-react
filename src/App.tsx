
import { Footer } from './components/Footer'
import { Qrcode } from './components/Qrcode'
import './global.css'

function App() {


  return (
    <div className="flex items-center justify-center h-full p-8 flex-col">
      <Qrcode />
      <Footer/>
    </div>
  )
}

export default App
