import NavbarComp from './component/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/CardComp';
import Section from './component/Section'
import AddCart from './component/AddCartComp'  
import  RecipeData from './component/recipeGallery'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <NavbarComp />
     <Section />
     <BasicExample />
     <AddCart />
     <RecipeData/>
    </div>
     </>
  );
}

export default App;
