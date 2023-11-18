import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import './App.css'
import Hospitals from "./components/Hospitals/Hospitals";
import Value from "./components/Value/Value"
import Contact from "./components/Contact/Contact"
function App() {
  return (
    <div className = "App">

      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>

      </div>
      <Hospitals/>
      <Value/>
      <Contact/>
    </div>
  );
}
export default App;
