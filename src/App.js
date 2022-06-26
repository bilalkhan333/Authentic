import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {auth} from "./firebase-config";
import {signOut} from "firebase/auth";
import {useState} from "react";
import Register from "./components/Register";

function App() {
  const Logout = async () => {
    await signOut(auth)
  }
  return (
    <div className="App">
      <div>
        <Register/>
      </div>
      <br/>
      <div>
        <Login/>
      </div>
      <div>
        <button onClick={Logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;
