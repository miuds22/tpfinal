import { useEffect, useState, useTransition } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductSearcher from './Components/productSearcher';
import Home from './Components/Home';
import Carta from './Components/Carta';
import Tabla from './Components/Tabla'
function App() {
  let busquedasGuardadas = JSON.parse(localStorage.getItem("historial"));  
  if(!busquedasGuardadas){busquedasGuardadas=[]}
  
  useEffect(()=>{busquedasGuardadas?  localStorage.setItem('historial',JSON.stringify(historial)):  localStorage.setItem('historial',JSON.stringify([]));
      console.log(historial)},
                [busquedasGuardadas])


  function cambiarPuntero(nuevoMenu){
    cambiarMenu(()=> {seleccionarMenu(nuevoMenu)});
  };
  //permite actualizar el estado de los componentes sin bloquear la UI
  const [estaPendiente, cambiarMenu] = useTransition();
  //guardo que menu ha seleccionado
  const [menu, seleccionarMenu] = useState("home");

  const [historial,editarHistorial] =useState(busquedasGuardadas)
  const editarLista = (busqueda) =>{
    editarHistorial([busqueda,...historial].slice(0,5))
  }

  return (
  <div className='App'>
    <Header id="App-header" SelectorMenu={cambiarPuntero} /> 
    <div  className='row fullh' id='body'>
      <div id="sideBar" className='col-lg-2 fullh'>
              <div class="titulo"> historial</div>
              {historial.map( element => <Carta product={element.busqueda}/>)}
      </div>
      <div className='home col-lg-10 fullh' style={{ overflowY: 'scroll', maxHeight: '100%  ' }}>
          {menu ==="home" && <ProductSearcher  editarLista={editarLista} />}
      </div> 
    </div>  
  </div>
  );
}

export default App;
