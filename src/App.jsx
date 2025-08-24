import logo from "./assets/logo.svg"
import TipCalculator from "./Components/TipCalculator/TipCalculator"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="" />
      </header>
      <TipCalculator />
    </>
  )
}

export default App
