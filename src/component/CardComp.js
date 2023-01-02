import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import garlic from '../image/GaliRice.jpg';
import chicken from '../image/chickenRice.jpg';
import shrimp from '../image/ShrimpRice.jpg';


function BasicExample() {
  return (
    <>
    <div className='row py-5'>
    <Card className='mx-auto' style={{ width: '18rem', margin: '0.5rem' }}>
      <Card.Img variant="top" src={garlic} />
      <Card.Body>
        <Card.Title className='text-center'>Galic Rice</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mx-auto' style={{ width: '18rem', margin: '0.5rem' }}>
      <Card.Img variant="top" src={chicken} />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mx-auto'  style={{ width: '18rem', margin: '0.5rem' }}>
      <Card.Img variant="top" src={shrimp} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mx-auto'  style={{ width: '18rem', margin: '0.5rem' }}>
      <Card.Img variant="top" src={garlic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default BasicExample;