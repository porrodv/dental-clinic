import './App.css';
import { Route, Switch } from 'wouter';

import MainPage from './pages/MainPage';

// en App irán todos los componentes estructudos por rutas con wouter
// los componentes de /componentes estarán ordenados en /pages
function App () {
  return (
    <>
      <Switch>
        <Route path='/' component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
