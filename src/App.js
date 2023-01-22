import NavbarComp from './component/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/CardComp';
import Section from './component/Section'
import AddCart from './component/AddCartComp'  
import RecipeData from './component/recipeGallery'
import Footer from './component/Footer';
// import MovingDot from './component/MovingDot';
import GallerySwipe from "./component/GallerySwipe";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <NavbarComp />
     <Section />
     <BasicExample />
     <GallerySwipe />
     <AddCart />
     <RecipeData/>
     <Footer/>
     {/* <MovingDot /> */}
    </div>
     </>
  );
}

export default App;
