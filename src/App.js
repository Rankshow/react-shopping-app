import NavbarComp from './component/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/CardComp';
import ChatBox from './component/Section'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <NavbarComp />
     <ChatBox />
     <BasicExample />
    </div>
     </>
  );
}

export default App;
