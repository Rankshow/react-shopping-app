import logo from '../image/FreshFood.jpg';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Footer from './Footer';
import  CardComp from './CardComp';
import './NavBarComp.css'
// import { Features } from './Features';
// import { Service } from './Service';
// import { Home } from './Home';

const NavbarComp = () => {
        return (
        <BrowserRouter>
            <div>
                <>
                <Navbar bg="secondary" expand="lg" sticky="fixed" >
                <Container>
                    <Navbar.Brand href="#home" flex='d-flex' className='text-white'>
                    <img className='rounded-pill' style={{height: '4rem'}} src={logo} alt="FreshFood" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{fontSize:'20px', fontWeight:'10em'}}>
                        <Nav.Link className='NavTitle text-warning' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='NavTitle text-warning' as={Link} to="/footer">About</Nav.Link>
                        <Nav.Link className='NavTitle text-warning' as={Link} to="/service">Our Services</Nav.Link>
                        <Nav.Link className='NavTitle text-warning' as={Link} to="/cardcomp">Contact</Nav.Link>
                        <Nav.Link className='NavTitle text-warning' as={Link} to="/features">Features</Nav.Link>
                        <Nav.Link><ShoppingCartOutlined className='NavTitle text-warning' style={{fontSize: '30px', color: 'orange'}} theme="outlined" /></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div>
                    <Routes>
                        <Route path='/footer' element={<Footer/>} />
                        {/* <Route path='/service' element={<Service/>} /> */}
                        <Route path='/cardcomp' element={<CardComp/>} />
                        {/* <Route path='/features' element={<Features/>} /> */}
                        {/* <Route path='/' element={<Home/>} /> */}
                    </Routes>
                </div>
          </>
        </div>
  </BrowserRouter>
  );
}
export default NavbarComp;