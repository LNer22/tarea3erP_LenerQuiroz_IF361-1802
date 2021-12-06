import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import AppState from './context/AppState'

function App() {
  return (
    <AppState>
      <Navbar />
      <Articulos />
    </AppState>
  );
}

export default App;
