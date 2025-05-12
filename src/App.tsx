import './App.css'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { NavHeader } from './components/Navbar'
import { NFTAnimated } from './components/NFTAnimated'
import { SolanaWalletProvider } from './components/SolanaWalletAdapter'

function App() {
  return (
    <SolanaWalletProvider>
      <div>
        <NavHeader/>
        <Home/>
        <NFTAnimated/>
        <Footer />
      </div>
    </SolanaWalletProvider>
  )
}

export default App