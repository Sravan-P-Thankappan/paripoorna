import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import '/node_modules/primeflex/primeflex.css';
import Home from "./page/Home";




function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
