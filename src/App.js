import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import { useState, useEffect } from 'react'
import axios from 'axios';
import Forgot from './pages/Forgot';

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get('user');

          const user = response.data;

          setUser(user);
        } catch (e) {
          setUser(null);
        }
      }
    )();
  }, [login]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav user={user} setLogin={() => setLogin(false)} />

        <Route path="/" exact component={() => <Home user={user} />} />
        <Route path="/login" component={() => <Login setLogin={() => setLogin(true)} />} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
      </BrowserRouter>
    </div>
  );
}

export default App;
