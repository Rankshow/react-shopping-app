import NavbarComp from './component/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComp from './component/CardComp';
import Section from './component/Section'
import AddCart from './component/AddCartComp'  
import RecipeData from './component/recipeGallery'
import Footer from './component/Footer';
import MovingDot from './component/MovingDot';
import GallerySwipe from "./component/GallerySwipe";
import ShoppingCart from "./component/Product";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <NavbarComp />
     <Section />
     <CardComp />
     <GallerySwipe />
     <AddCart />
     <RecipeData/>
     <Footer/>
     <MovingDot />
     <ShoppingCart />
    </div>
     </>
  );
}

export default App;
