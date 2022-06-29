import { Link, Outlet } from "react-router-dom";

import { siteName } from './config';
import { Header } from './components/header';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <Header label={siteName} />
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
    </div>
  );
}

export default App;
