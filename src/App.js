import NavbarComp from './component/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/CardComp';
import Section from './component/Section'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <NavbarComp />
     <Section />
     <BasicExample />
    </div>
     </>
  );
}

export default App;
