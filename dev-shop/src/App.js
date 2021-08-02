import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Buying from './Components/Buying'
import BuyingCar from './Components/BuyingCar';
import Profile from './Components/Profile';
import SearchProfile from './Components/SearchProfile';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route  path ="/" exact component ={SearchProfile}/>
          <Route  path="/Compras" exact component={Buying}/>
          <Route  path ="/Carrinho" exact component={BuyingCar}/>
          <Route  path="/Profile" exact component={Profile}/>
          
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
