import logo from '../image/FreshFood.jpg';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons'

const NavbarComp = () => {
        return (
            <div>
                <Navbar bg="secondary" expand="lg" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home" flex='d-flex' className='text-white'>
                    <img className='rounded-pill' style={{height: '4rem'}} src={logo} alt="FreshFood" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{fontSize:'20px', fontWeight:'10em'}}>
                        <Nav.Link className='text-warning' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-warning' href="#about">About</Nav.Link>
                        <Nav.Link className='text-warning' href="#service">Our Services</Nav.Link>
                        <Nav.Link className='text-warning' href="#contact">Contact</Nav.Link>
                        <Nav.Link className='text-warning' href="#featurs">Features</Nav.Link>
                        <Nav.Link><ShoppingCartOutlined style={{fontSize: '30px', color: 'orange'}} theme="outlined" /></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
  );
}
export default NavbarComp;