import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../image/FreshFood.jpg';


function BasicExample() {
  return (
    <>
    <div className='row'>
    <Card className='mx-auto'  style={{ width: '18rem', margin: '0.5rem' }}>
      <Card.Img variant="top" src={logo} />
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
      <Card.Img variant="top" src={logo} />
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
      <Card.Img variant="top" src={logo} />
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
      <Card.Img variant="top" src={logo} />
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