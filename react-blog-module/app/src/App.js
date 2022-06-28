import { Link, Outlet } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{display:"block"}}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        haha.
      </p>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/post">Post</Link>
      </nav>  
      <Outlet />
    </div>
  );
}

export default App;
