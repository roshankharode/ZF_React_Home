import logo from './logo.svg';
import './App.css';
import ZF_Navbarr from './Component/ZF_Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from './Component/Component1'; // Import the first component
import Component2 from './Component/Component2'; // Import the second component
// import Cn_implmentation from './Component/Cn_implmentation';
function App() {
  return (
    <div className="App">
     <ZF_Navbarr/>
     {/* <Component1/> */}
     {/* <Cn_implmentation/> */}
     {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
