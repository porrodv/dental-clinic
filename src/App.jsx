import './App.css';
import { Route, Switch } from 'wouter';

// en App irán todos los componentes estructudos por rutas con wouter
// los componentes de /componentes estarán ordenados en /pages
function App () {
  return (
    <>
      <Switch>
        <Route path='/' component={test} />
      </Switch>
    </>
  );
}

// componente de prueba para enrutamiento
function test () {
  return (
    <div style={{ height: ' 100vh', width: '100vw', display: 'grid', placeContent: 'center' }}>
      <h1>INICIO DEL PROYECTO</h1>
    </div>
  );
}

export default App;
