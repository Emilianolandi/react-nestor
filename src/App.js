import { Routes, Route} from 'react-router-dom';
import './App.css';
import CardWrapper from './components/CardWrapper';

// Importamos las paginas y el layout
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import MensajeError from './pages/MensajeError';
import Layout from './pages/Layout';
// import Navegation from './components/Navegation';

function App() {
  
  return (
    <div className="App">
      {/* <Navegation /> */}
      <Routes>
  <Route path="/" element={<Layout />}>
 <Route index element={<Home />} />
 <Route path="Nosotros" element={<Nosotros />} />
 <Route path="*" element={<MensajeError />} />

 </Route>
</Routes>

      <CardWrapper
        titulo = {"Ofertas"}
      />
     </div>
  );
}

export default App;
