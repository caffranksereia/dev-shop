import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Comprado from './Components/Comprado'
import BuyingCar from './Components/BuyingCar';
import Profile from './Components/Profile';
import SearchProfile from './Components/SearchProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Compras" component={Comprado}/>
          <Route exact path ="/Carrinho" component={BuyingCar}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/home" component={SearchProfile}/>
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
