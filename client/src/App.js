import Navigation from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookSearch from './pages/BookSearch'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <BookSearch />

          </Route>
        </Switch>


      </Router>
      
     
    </div>
  );
}

export default App;
